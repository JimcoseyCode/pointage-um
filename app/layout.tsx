import { Providers as _Providers } from "./providers";
import type { Metadata } from "next";
import { cn as _cn } from "@/lib/utils";
import "./globals.css";
import { SessionProvider } from "@/providers/session-provider";
export const metadata: Metadata = {
  title: "Fds-Pointage-UM",
  description:
    "Outil numérique permettant d'enregistrer et de suivre les heures de travail des employés. Simplifie la gestion des présences, réduit les erreurs et optimise les processus de paie.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
