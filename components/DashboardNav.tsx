import { useSession } from "next-auth/react";
import LogoutButton from "./LogoutButton";

export default function DashboardNav() {
  const { data: session } = useSession();

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-semibold">
              Bienvenue, {session?.user?.firstName}
            </span>
          </div>
          <LogoutButton />
        </div>
      </div>
    </nav>
  );
}