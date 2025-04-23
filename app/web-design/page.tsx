import SectionLayout from "../components/section-layout"

export default function WebDesign() {
  return (
    <SectionLayout title="Web Design & Coding">
      <p className="text-lg mb-6">
        This section showcases my web design and coding projects, highlighting my skills in creating responsive and
        interactive websites.
      </p>

      <div className="space-y-8">
        {/* Placeholder for project cards */}
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Project 1</h2>
          <p>Description of the project and technologies used.</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Project 2</h2>
          <p>Description of the project and technologies used.</p>
        </div>

        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-2">Project 3</h2>
          <p>Description of the project and technologies used.</p>
        </div>
      </div>
    </SectionLayout>
  )
}
