"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRole } from "@/types";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { LogoutButton } from "@/components/ui/LogoutButton";

export default function AdminDashboard() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (!session?.user || session.user.role !== UserRole.admin) {
    redirect("/auth");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Dashboard Administrateur</h1>
            <LogoutButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Statistiques */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Statistiques Globales</h2>
            <div className="space-y-4">
              {/* Contenu des stats */}
            </div>
          </div>

          {/* Gestion des utilisateurs */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Gestion Utilisateurs</h2>
            <div className="space-y-4">
              {/* Liste des utilisateurs */}
            </div>
          </div>

          {/* Paramètres système */}
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Paramètres Système</h2>
            <div className="space-y-4">
              {/* Paramètres */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}