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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
