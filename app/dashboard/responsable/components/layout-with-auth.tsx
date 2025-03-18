"use client"

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"
import { LoadingSpinner } from "@/components/ui/loading-spinner"
import type React from "react"
import Navbar from "./Navbar"
import Topbar from "./Topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = useSession()

  if (session.status === "loading") {
    return (
      <div className="h-screen flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (session.status === "unauthenticated") {
    redirect("/auth")
  }

  return (
    <div className="flex min-h-screen">
      <Navbar />
      <div className="flex flex-1 flex-col ml-[280px]">
        <Topbar />
        <main className="flex-1 p-5 bg-[#f9f9f9] m-5 rounded-lg">{children}</main>
      </div>
    </div>
  )
}

