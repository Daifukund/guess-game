import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rébus – Qui suis-je ?",
  description: "Jeu de rébus en ligne - Devinez les célébrités !",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        {children}
      </body>
    </html>
  );
}
