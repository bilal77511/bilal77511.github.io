const experiences = [
  {
    title: "MLOps Intern",
    company: "Pak-Austria Fachhochschule Institute of Applied Sciences and Technology",
    date: "Sep 2023 - Nov 2023",
    description: [
      "Configured a Kubernetes cluster with 1 master node and 4 GPU-enabled worker nodes.",
      "Developed and optimized Docker images for cluster deployment.",
      "Deployed and tested JupyterHub, facilitating easy access to resources for university students.",
      "Demonstrated it as proof of concept for containerized applications on HPCC."
    ]
  },
  {
    title: "Python Trainer & Moderator",
    company: "iCodeGuru",
    date: "Current",
    description: [
      "Teach Python to groups of 20-30 underprivileged students.",
      "Cover topics including data structures and algorithms.",
      "Improve leadership and communication skills through teaching."
    ]
  },
  {
    title: "Hackathon Participant",
    company: "Various",
    date: "2023 - Present",
    description: [
      "Participated in 14 hackathons, both national and international.",
      "Achieved top 5 rankings at Allegro Multimodal Hackathon and Edge Runners Hackathon 3.2.",
      "Secured 2nd place in the national-level WordSprint Hackathon."
    ]
  }
]

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Experience</h2>
        <div className="max-w-3xl mx-auto space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600">{exp.title}</h3>
              <p className="text-gray-600 mb-2">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-4">{exp.date}</p>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

