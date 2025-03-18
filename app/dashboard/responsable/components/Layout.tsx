"use client"

import type React from "react"
import Navbar from "./Navbar"
import Topbar from "./Topbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

