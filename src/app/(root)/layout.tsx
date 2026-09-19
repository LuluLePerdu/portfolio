export default function RootRedirectLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA">
      <body style={{ margin: 0, background: "#0c0e0d" }}>{children}</body>
    </html>
  );
}
