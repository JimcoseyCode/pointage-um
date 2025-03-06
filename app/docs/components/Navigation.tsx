"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const sections = [
  { title: "Introduction", href: "#introduction" },
  { title: "Architecture", href: "#architecture" },
  { title: "Routes", href: "#routes" },
  { title: "Authentification", href: "#auth" },
  { title: "Composants", href: "#components" },
  { title: "API", href: "#api" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="flex space-x-4 border-b pb-4">
      {sections.map((section) => (
        <Link
          key={section.href}
          href={section.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === section.href
              ? "text-foreground"
              : "text-muted-foreground"
          )}
        >
          {section.title}
        </Link>
      ))}
    </nav>
  );
}