// v29

"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import PhotographyGrid from "./components/photography-grid"

// Define the sections with their background settings
const sections = [
  {
    id: "photography",
    label: "Photography",
    bgImage: "/images/photography-bg.png",
    path: "/photography",
    bgColor: "bg-white", // White background for Photography
    textColor: "text-black",
    inactiveTextColor: "text-gray-300",
  },
  {
    id: "web-design",
    label: "Web Design",
    bgImage: "/images/web-design-bg.png",
    path: "/web-design",
    bgColor: "bg-black", // Dark background for other sections
    textColor: "text-white",
    inactiveTextColor: "text-gray-400",
  },
  {
    id: "art-ideas",
    label: "Art & Ideas",
    bgImage: "/images/art-ideas-bg.png",
    path: "/art-ideas",
    bgColor: "bg-black",
    textColor: "text-white",
    inactiveTextColor: "text-gray-400",
  },
  {
    id: "yacon",
    label: "Yacon",
    bgImage: "/images/yacon-bg.png",
    path: "/yacon",
    bgColor: "bg-black",
    textColor: "text-white",
    inactiveTextColor: "text-gray-400",
  },
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

  // Get the current section
  const currentSection = sections.find((section) => section.id === activeSection) || sections[2]

  // Determine if we're using a white background
  const isWhiteBackground = currentSection.bgColor === "bg-white"

  return (
    <main className={`relative min-h-screen flex flex-col transition-colors duration-500 ${currentSection.bgColor}`}>
      {/* Background Image - only show for dark backgrounds */}
      {!isWhiteBackground && (
        <div className="fixed inset-0 z-0 transition-opacity duration-700">
          <Image
            src={currentSection.bgImage || "/placeholder.svg"}
            alt="Background"
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen p-6 md:p-12 lg:p-16">
        <header className="mb-12 md:mb-16">
          <h1
            className={`text-5xl md:text-7xl font-light tracking-wider font-brother ${isWhiteBackground ? "text-black" : "text-white"}`}
          >
            NICK WHITE
          </h1>
        </header>

        <nav className="flex flex-col space-y-4 md:space-y-6">
          {sections.map((section) => (
            <div key={section.id} className="flex">
              {/* Text element with event handlers */}
              <span
                className={`text-4xl md:text-5xl lg:text-6xl font-light select-none cursor-pointer transition-all duration-300 ${
                  activeSection === section.id
                    ? section.id === "photography"
                      ? "text-black"
                      : "text-white"
                    : activeSection === "photography"
                      ? "text-gray-300"
                      : "text-gray-400"
                }`}
                onMouseEnter={() => setActiveSection(section.id)}
                onClick={() => handleSectionClick(section.id, section.path)}
              >
                {section.label}
              </span>

              {/* Empty space to the right of the text */}
              <div className="flex-grow"></div>
            </div>
          ))}
        </nav>

        {/* Photography Grid - only visible when Photography is active */}
        <PhotographyGrid visible={activeSection === "photography"} />
      </div>
    </main>
  )
}
