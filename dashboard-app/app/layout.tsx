import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parallax · Vulnerabilidad Sociosanitaria EUA",
  description: "Explora cómo la vulnerabilidad social y la carga de salud cambian entre 31,742 comunidades de Estados Unidos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans">{children}</body>
    </html>
  );
}
