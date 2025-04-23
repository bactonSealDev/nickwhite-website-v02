import SectionLayout from "@/app/components/section-layout"

export default function Photography() {
  return (
    <SectionLayout title="Photography">
      <p className="text-lg mb-6">
        Welcome to my photography portfolio. This section showcases my work in various photography styles and subjects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Placeholder for photo gallery */}
        <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">Photo 1</div>
        <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">Photo 2</div>
        <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">Photo 3</div>
        <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">Photo 4</div>
      </div>
    </SectionLayout>
  )
}
