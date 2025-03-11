"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function DocsPage() {
  

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center justify-between mb-8">
        <Button
          asChild
          variant="outline"
          size="lg"
          className="group hover:scale-105 transition-transform duration-300"
        >
          <Link href="/">
            <span className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour à l'accueil
            </span>
          </Link>
        </Button>
        <h1 className="text-4xl font-bold">Documentation</h1>
      </div>
    </div>
  );
}