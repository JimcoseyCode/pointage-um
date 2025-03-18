// app/dashboard/page.tsx
"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { UserRole } from "@/types";
import Layout from "./Layout";
import PlanningView from "./components/PlanningView";
import DocumentsView from "./components/DocumentsView";
import HelpView from "./components/HelpView";
import SettingsView from "./components/SettingsView";
import { useState } from "react";

export default function EmployeDashboard() {
  const { data: session } = useSession();
  const [activeView, setActiveView] = useState("planning"); // Vue par défaut

  if (!session || session.user.role !== UserRole.EMPLOYE) {
    redirect("/auth");
  }

  const handleNavItemClick = (view: string) => {
    setActiveView(view);
  };

  const renderView = () => {
    switch (activeView) {
      case "planning":
        return <PlanningView />;
      case "documents":
        return <DocumentsView />;
      case "help":
        return <HelpView />;
      case "settings":
        return <SettingsView />;
      default:
        return (
            <>
            <h1>Bienvenue dans ton dashboard {session.user.name}</h1>
            </>

        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Layout onNavItemClick={handleNavItemClick}>
        {renderView()}
      </Layout>
    </div>
  );
}