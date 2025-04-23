import SectionLayout from "@/app/components/section-layout"

export default function ArtIdeas() {
  return (
    <SectionLayout title="Art & Ideas">
      <p className="text-lg mb-6">
        This section explores my artistic work and conceptual ideas, showcasing various mediums and thought processes.
      </p>

      <div className="space-y-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Concept Series: Nature</h2>
          <p className="mb-4">An exploration of natural forms and patterns through various artistic mediums.</p>
          <div className="aspect-video bg-gray-700 rounded-lg"></div>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Abstract Expressions</h2>
          <p className="mb-4">A collection of abstract works exploring color, form, and emotion.</p>
          <div className="aspect-video bg-gray-700 rounded-lg"></div>
        </div>
      </div>
    </SectionLayout>
  )
}
