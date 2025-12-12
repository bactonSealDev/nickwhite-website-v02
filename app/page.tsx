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
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  // Handle mouse enter - show the section content
  const handleMouseEnter = (sectionId: string) => {
    setHoveredSection(sectionId)
  }

  // Handle mouse leave - reset hovered section
  const handleMouseLeave = () => {
    setHoveredSection(null)
  }

  // Handle click - navigate to the section page
  const handleSectionClick = (sectionId: string, path: string) => {
    setActiveSection(sectionId)
    setIsNavigating(true)

    // Add a longer delay to see the grid before navigation
    setTimeout(() => {
      router.push(path)
    }, 800) // Increased from 300ms to 800ms
  }

  // Determine which section to use for styling
  // Use hoveredSection for hover effects, fall back to activeSection
  const currentSectionId = hoveredSection || activeSection
  const currentSection = sections.find((section) => section.id === currentSectionId) || sections[2]

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
                  (hoveredSection || activeSection) === section.id
                    ? section.id === "photography"
                      ? "text-black"
                      : "text-white"
                    : (hoveredSection === "photography" || activeSection === "photography")
                      ? "text-gray-300"
                      : "text-gray-400"
                }`}
                onMouseEnter={() => handleMouseEnter(section.id)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleSectionClick(section.id, section.path)}
              >
                {section.label}
              </span>

              {/* Empty space to the right of the text */}
              <div className="flex-grow"></div>
            </div>
          ))}
        </nav>

        {/* Photography Grid - only visible when Photography is hovered */}
        <PhotographyGrid visible={hoveredSection === "photography" && !isNavigating} />
      </div>
    </main>
  )
}
