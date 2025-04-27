"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"

// Define the sections
const sections = [
  { id: "photography", label: "Photography", bgImage: "/images/photography-bg.png", path: "/photography" },
  { id: "web-design", label: "Web Design & Coding", bgImage: "/images/web-design-bg.png", path: "/web-design" },
  { id: "art-ideas", label: "Art & Ideas", bgImage: "/images/art-ideas-bg.png", path: "/art-ideas" },
  { id: "yacon", label: "Yacon", bgImage: "/images/yacon-bg.png", path: "/yacon" },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState("art-ideas")
  const router = useRouter()

  const handleSectionClick = (sectionId: string, path: string) => {
    setActiveSection(sectionId)
    // Add a small delay to see the background change before navigation
    setTimeout(() => {
      router.push(path)
    }, 300)
  }

  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 transition-opacity duration-700">
        <Image
          src={sections.find((section) => section.id === activeSection)?.bgImage || "/images/art-ideas-bg.png"}
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-red-900/50 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-screen p-6 md:p-12 lg:p-16">
        <header className="mb-12 md:mb-16">
          <h1 className="text-5xl md:text-7xl font-light tracking-wider font-brother">NICK WHITE</h1>
        </header>

        <nav className="flex flex-col space-y-4 md:space-y-6">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`text-2xl md:text-3xl lg:text-4xl font-light font-brother select-none cursor-pointer ${
                activeSection === section.id ? "text-white" : "text-gray-400"
              } transition-all duration-700 hover:text-white hover:tracking-[0.15em]  filter hover:[filter:drop-shadow(0_0_8px_rgba(255,255,255,0.7))_drop-shadow(0_0_15px_rgba(255,255,255,0.5))] hover:animate-glow-fade`}
              onMouseEnter={() => setActiveSection(section.id)}
              onClick={() => handleSectionClick(section.id, section.path)}
            >
              {section.label}
            </div>
          ))}
        </nav>
      </div>
    </main>
  )
}
