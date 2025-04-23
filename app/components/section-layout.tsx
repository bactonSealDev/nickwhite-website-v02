"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

interface SectionLayoutProps {
  title: string
  children: React.ReactNode
}

export default function SectionLayout({ title, children }: SectionLayoutProps) {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-b from-dark-red to-dark-red-dark p-6 md:p-12 lg:p-16">
      <button onClick={() => router.push("/")} className="flex items-center text-gray-300 hover:text-white mb-6">
        <ArrowLeft className="mr-2" size={20} />
        Back to Home
      </button>

      <h1 className="text-4xl md:text-5xl font-bold mb-8">{title}</h1>

      <div className="max-w-4xl">{children}</div>
    </div>
  )
}
