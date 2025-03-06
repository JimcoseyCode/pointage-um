// app/dashboard/page.tsx

"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRole } from "@/types"; // Importe le type UserRole

export default function DashboardPage() {
  const { data: session } = useSession();

  // Redirige vers la page de connexion si l'utilisateur n'est pas connecté
  if (!session) {
    redirect("/auth");
  }

  // Redirection automatique selon le rôle
  switch (session.user.role) {
    case UserRole.responsable:
      redirect("/dashboard/responsable");
    case UserRole.admin:
      redirect("/dashboard/admin");
    case UserRole.manager:
      redirect("/dashboard/manager");
    case UserRole.employe:
      redirect("/dashboard/employe");
    default:
      redirect("/auth");
  }
}