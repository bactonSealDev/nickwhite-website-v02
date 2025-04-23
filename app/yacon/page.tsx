import SectionLayout from "../components/section-layout"

export default function Yacon() {
  return (
    <SectionLayout title="Yacon">
      <p className="text-lg mb-6">
        Learn about Yacon, its cultivation, benefits, and my personal experience with this remarkable plant.
      </p>

      <div className="space-y-8">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">What is Yacon?</h2>
          <p>
            Yacon (Smallanthus sonchifolius) is a perennial plant native to the Andes. It produces large, sweet-tasting
            tubers that are low in calories and have prebiotic properties.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Growing Yacon</h2>
          <p>
            Information about how to cultivate and harvest Yacon, including soil requirements, planting techniques, and
            optimal growing conditions.
          </p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Health Benefits</h2>
          <p>
            Explore the various health benefits associated with Yacon, including its potential for supporting digestive
            health and blood sugar management.
          </p>
        </div>
      </div>
    </SectionLayout>
  )
}
