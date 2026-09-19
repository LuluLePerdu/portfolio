import type { Dictionary } from "@/content/dictionary";
import { Mark } from "./Mark";

export function Footer({ t }: { t: Dictionary["footer"] }) {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__big">
          <Mark className="footer__mark" />
          <p className="footer__name">
            Ludwig-Emmanuel
            <br />
            Dufour
          </p>
        </div>
        <div className="footer__bottom">
          <p className="label">
            © {new Date().getFullYear()} — {t.rights}
          </p>
          <p className="label footer__sig">
            {t.signature} <strong>Fjelkore</strong>
          </p>
          <a className="label link" href="#top">
            {t.top}
          </a>
        </div>
      </div>
    </footer>
  );
}
