"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { LoadingSpinner } from "@/components/ui/loading-spinner";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
const { data: _session, status } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/auth");
    },
  });

  if (status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  return <>{children}</>;
}