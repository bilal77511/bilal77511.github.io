const skills = [
  { category: "Programming Languages", items: ["Python"] },
  { category: "Machine Learning", items: ["YOLO Object Detection", "PyTorch", "Keras", "GPT-3", "Prompt Engineering"] },
  { category: "Cloud & Containerization", items: ["Kubernetes", "Docker"] },
  { category: "3D Modeling & Game Development", items: ["Blender", "Unreal Engine"] },
  { category: "Other", items: ["Git", "GitHub", "MongoDB", "Django", "LlamaIndexing"] }
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{skillGroup.category}</h3>
              <ul className="list-disc list-inside">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

