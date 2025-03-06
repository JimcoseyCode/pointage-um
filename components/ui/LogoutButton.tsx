"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export function LogoutButton() {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/auth" })}
      variant="outline"
      size="sm"
      className="gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300 transition-colors"
    >
      <LogOut className="h-4 w-4" />
      <span>Déconnexion</span>
    </Button>
  );
}