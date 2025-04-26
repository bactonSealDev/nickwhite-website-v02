"use client"

import { useState } from "react"

// Simple utility function if @/lib/utils is not available
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}

export default function TestPage() {
  const [activeEffect, setActiveEffect] = useState<string | null>(null)

  // Enhanced blur-glow effect with variations
  const blurGlowVariations = [
    {
      id: "blur-glow-basic",
      className:
        "text-gray-400 transition-all duration-300 hover:text-white filter hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]",
      description: "Basic glow effect with brightness increase",
    },
    {
      id: "blur-glow-spacing",
      className:
        "text-gray-400 transition-all duration-500 hover:text-white hover:tracking-wider filter hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]",
      description: "Glow with increased letter spacing",
    },
    {
      id: "blur-glow-pulse",
      className: "text-gray-400 transition-all duration-300 hover:text-white filter hover:animate-glow-pulse",
      description: "Glow that pulses in and out",
    },
    {
      id: "blur-glow-fade",
      className:
        "text-gray-400 transition-all duration-500 hover:text-white hover:tracking-wider relative after:absolute after:inset-0 after:bg-white/0 hover:after:bg-white/10 after:blur-xl after:transition-opacity after:duration-1000 after:-z-10 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]",
      description: "Glow with spacing that slowly fades",
    },
    {
      id: "blur-glow-intense",
      className:
        "text-gray-400 transition-all duration-700 hover:text-white hover:tracking-wider filter hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]",
      description: "More intense glow with double shadow",
    },
    {
      id: "blur-glow-complete",
      className:
        "text-gray-400 transition-all duration-700 hover:text-white hover:tracking-[0.15em] relative hover:animate-glow-fade filter hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]",
      description: "Complete effect with spacing and fading glow",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 p-8">
      <h1 className="text-3xl font-bold mb-2 text-white">Enhanced Blur Glow Effects</h1>
      <p className="text-gray-400 mb-8">Hover over each "PHOTOGRAPHY" text to see the effect in action.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {blurGlowVariations.map((effect) => (
          <div
            key={effect.id}
            className="border border-gray-800 rounded-lg p-6 bg-gray-800/50 backdrop-blur-sm hover:bg-gray-800 transition-colors"
          >
            <h2 className="text-xl font-bold mb-4 text-white">Effect: {effect.id}</h2>
            <p className="text-sm text-gray-400 mb-6">{effect.description}</p>
            <div className="flex justify-center items-center h-16">
              <span className={cn("text-2xl font-light cursor-pointer inline-block", effect.className)}>
                PHOTOGRAPHY
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Interactive Demo</h2>
        <p className="text-gray-400 mb-8 text-center max-w-2xl mx-auto">
          Hover over each word to see the different blur glow variations. The last option "blur-glow-complete" combines
          all the requested features.
        </p>
        <div className="flex flex-wrap gap-8 justify-center">
          {blurGlowVariations.map((effect) => (
            <span
              key={effect.id}
              className={cn("text-2xl cursor-pointer", effect.className)}
              onMouseEnter={() => setActiveEffect(effect.id)}
              onMouseLeave={() => setActiveEffect(null)}
            >
              PHOTOGRAPHY
            </span>
          ))}
        </div>
        {activeEffect && (
          <p className="text-center mt-8 text-gray-400">
            Active effect: <span className="text-white font-medium">{activeEffect}</span> -{" "}
            {blurGlowVariations.find((e) => e.id === activeEffect)?.description}
          </p>
        )}
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Section Navigation Example</h2>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {["Photography", "Web Design", "Art & Ideas", "Yacon"].map((section) => (
            <a
              key={section}
              href="#"
              className="text-xl text-gray-400 transition-all duration-700 hover:text-white hover:tracking-[0.15em] relative hover:animate-glow-fade filter hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]"
            >
              {section}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 pb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Final Recommended Effect</h2>
        <div className="flex justify-center">
          <div className="relative inline-block">
            <span className="text-3xl font-light text-gray-400 transition-all duration-700 hover:text-white hover:tracking-[0.15em] filter hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.7)] hover:animate-glow-fade">
              PHOTOGRAPHY
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
