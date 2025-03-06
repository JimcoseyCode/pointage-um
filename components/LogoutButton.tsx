"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <Button
      variant="outline"
      onClick={() => signOut({ callbackUrl: "/" })}
      className="flex items-center space-x-2 hover:bg-red-50 hover:text-red-600 hover:border-red-300"
    >
      <LogOut className="w-4 h-4" />
      <span>Déconnexion</span>
    </Button>
  );
}