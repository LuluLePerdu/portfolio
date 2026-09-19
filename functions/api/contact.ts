/**
 * POST /api/contact — Cloudflare Pages Function.
 *
 * Sends the contact form through Brevo, the same relay the homelab uses for
 * Authelia and the newsletter. Workers can't speak SMTP comfortably, so this
 * goes through Brevo's HTTP API instead; the sender stays on the verified
 * ludwig-emmanuel.dev domain.
 *
 * Environment (Pages > Settings > Variables and secrets):
 *   BREVO_API_KEY   secret, a Brevo API key (not the SMTP key)
 *   CONTACT_TO      where messages land, defaults to the owner's inbox
 *   CONTACT_FROM    verified sender, defaults to portfolio@ludwig-emmanuel.dev
 */

interface Env {
  BREVO_API_KEY?: string;
  CONTACT_TO?: string;
  CONTACT_FROM?: string;
}

interface Payload {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
  elapsed?: unknown;
  locale?: unknown;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_HOSTS = [/^ludwig-emmanuel\.dev$/, /\.pages\.dev$/, /^localhost(:\d+)?$/, /^127\.0\.0\.1(:\d+)?$/];

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

/** Plain single-line text, trimmed and capped. */
function line(value: unknown, max: number) {
  return typeof value === "string" ? value.replace(/[\r\n\t]+/g, " ").trim().slice(0, max) : "";
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  // Only accept posts coming from the site itself.
  const origin = request.headers.get("Origin");
  if (origin) {
    let host = "";
    try {
      host = new URL(origin).host;
    } catch {}
    if (!ALLOWED_HOSTS.some((re) => re.test(host))) return json({ error: "forbidden" }, 403);
  }

  let data: Payload;
  try {
    data = await request.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  // Bots: filled the hidden field, or submitted faster than a person can type.
  // Answer as if it worked so they don't learn anything.
  const tooFast = typeof data.elapsed === "number" && data.elapsed < 3000;
  if (line(data.website, 200) || tooFast) return json({ ok: true });

  const name = line(data.name, 120);
  const email = line(data.email, 200);
  const subject = line(data.subject, 160);
  const message = typeof data.message === "string" ? data.message.trim().slice(0, 5000) : "";
  const locale = data.locale === "en" ? "en" : "fr";

  if (!name || !EMAIL.test(email) || !message) return json({ error: "invalid" }, 422);

  if (!env.BREVO_API_KEY) {
    console.error("contact: BREVO_API_KEY is not set");
    return json({ error: "not_configured" }, 503);
  }

  const to = env.CONTACT_TO || "Ludwig-emmanuel@hotmail.com";
  const from = env.CONTACT_FROM || "portfolio@ludwig-emmanuel.dev";
  const ip = request.headers.get("CF-Connecting-IP") ?? "unknown";
  const country = request.headers.get("CF-IPCountry") ?? "";

  const text = [
    `Nom : ${name}`,
    `Courriel : ${email}`,
    `Sujet : ${subject || "(aucun)"}`,
    `Langue du site : ${locale}`,
    "",
    message,
    "",
    "--",
    `Envoyé depuis le formulaire de ludwig-emmanuel.dev (${ip}${country ? `, ${country}` : ""})`,
  ].join("\n");

  const res = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Portfolio", email: from },
      to: [{ email: to }],
      replyTo: { email, name },
      subject: `[Portfolio] ${subject || `Message de ${name}`}`,
      textContent: text,
      tags: ["portfolio-contact"],
    }),
  });

  if (!res.ok) {
    console.error("contact: brevo responded", res.status, await res.text());
    return json({ error: "send_failed" }, 502);
  }

  return json({ ok: true });
};

export const onRequest: PagesFunction<Env> = async () =>
  new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
