"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRole } from "@/types/auth/auth";

export default function DashboardPage() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth");
    },
  });

  // Attendre que la session soit chargée
  if (status === "loading") {
    return <div>Chargement...</div>;
  }

  // Vérification supplémentaire de la session et du rôle
  if (!session?.user?.role) {
    redirect("/auth");
  }

  // Redirection selon le rôle
  switch (session.user.role) {
    case UserRole.admin:
      redirect("/dashboard/admin");
    case UserRole.responsable:
      redirect("/dashboard/responsable");
    case UserRole.manager:
      redirect("/dashboard/manager");
    case UserRole.employe:
      redirect("/dashboard/employe");
    default:
      redirect("/auth");
  }

  // Cette ligne ne sera jamais atteinte à cause des redirections
  return null;
}