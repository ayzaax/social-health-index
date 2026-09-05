import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeHealth — Vulnerabilidad Sociosanitaria en EUA",
  description: "Herramienta pública que revela desigualdades de salud a nivel código postal en Estados Unidos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
