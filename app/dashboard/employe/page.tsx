"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRole } from "@/types";
import { LogoutButton } from "@/components/ui/LogoutButton";

export default function EmployeDashboard() {
  const { data: session } = useSession();

  if (!session || session.user.role !== UserRole.EMPLOYE) {
    redirect("/auth");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-xl font-semibold">Dashboard Employé</h1>
            <LogoutButton />
          </div>
        </div>
      </header>
      <div className="p-8">
        {/* <h1 className="text-2xl font-bold mb-4">Dashboard Employé</h1> */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Pointage */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="font-semibold mb-4">Pointage</h2>
            {/* Boutons de pointage */}
          </div>

          {/* Historique */}
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="font-semibold mb-4">Historique</h2>
            {/* Liste des pointages */}
          </div>
        </div>
      </div>
    </div>
  );
}