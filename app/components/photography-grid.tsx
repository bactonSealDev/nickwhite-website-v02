// v34

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PhotographyGridProps {
  visible: boolean;
}

export default function PhotographyGrid({ visible }: PhotographyGridProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImageCount, setLoadedImageCount] = useState(0);

  // Preload images when component mounts
  useEffect(() => {
    // This is a placeholder for the actual images in your public folder
    const allImages = [
      "/images/photography/photo1.jpg",
      "/images/photography/photo2.jpg",
      "/images/photography/photo3.jpg",
      "/images/photography/photo4.jpg",
      "/images/photography/photo5.jpg",
      "/images/photography/photo6.jpg",
      "/images/photography/photo7.jpg",
      "/images/photography/photo8.jpg",
      "/images/photography/photo9.jpg",
      "/images/photography/photo10.jpg",
      "/images/photography/photo11.jpg",
      "/images/photography/photo12.jpg",
      "/images/photography/photo13.jpg",
      "/images/photography/photo14.jpg",
      "/images/photography/photo15.jpg",
      "/images/photography/photo16.jpg",
      "/images/photography/photo17.jpg",
      "/images/photography/photo18.jpg",
      "/images/photography/photo19.jpg",
      "/images/photography/photo20.jpg",
      "/images/photography/photo21.jpg",
      "/images/photography/photo22.jpg",
      "/images/photography/photo23.jpg",
      "/images/photography/photo24.jpg",
      "/images/photography/photo25.jpg",
      "/images/photography/photo26.jpg",
      "/images/photography/photo27.jpg",
      "/images/photography/photo28.jpg",
      "/images/photography/photo29.jpg",
    ];

    try {
      // Shuffle the array to get random images each time
      const shuffled = [...allImages].sort(() => 0.5 - Math.random());

      // Take the first 16 images (or however many you want to display)
      const selectedImages = shuffled.slice(0, 16);
      setImages(selectedImages);

      // Simpler approach - just set images and mark as loaded
      // This avoids the Image constructor conflict
      setImagesLoaded(true);
      setLoading(false);

      // Preload images in the background without blocking rendering
      selectedImages.forEach((src, index) => {
        const imgElement = document.createElement("img");
        imgElement.onload = () => {
          setLoadedImageCount((prev) => prev + 1);
        };
        imgElement.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          setLoadedImageCount((prev) => prev + 1);
        };
        imgElement.src = src;
      });
    } catch (err) {
      console.error("Error loading images:", err);
      setError(true);
      setLoading(false);
    }
  }, []); // Only run once on mount to preload images

  // If not visible, don't render anything
  if (!visible) return null;

  // Container animation - faster animation for better responsiveness
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        staggerChildren: 0.3, // Faster stagger for quicker appearance
      },
    },
  };

  // Item animation - faster animation for better responsiveness
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3 },
    },
  };

  // Handle loading and error states
  if (loading && !imagesLoaded) {
    return (
      <div className="w-full mt-8 flex justify-center">
        <div className="text-gray-500">
          Loading images... ({loadedImageCount} of {images.length})
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full mt-8 flex justify-center">
        <div className="text-gray-500">
          Failed to load images. Please try again.
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="w-full mt-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="aspect-square relative overflow-hidden border border-gray-200"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={src || "/placeholder.svg"}
              alt={`Photography portfolio image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500"
              priority={index < 4} // Prioritize loading the first 4 images
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = `/placeholder.svg?height=300&width=300&query=photography+${
                  index + 1
                }`;
                console.warn(`Failed to load image: ${src}`);
              }}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
