import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    name: "Controlling Games Through Hand Gestures",
    description: "Developed a car game using Unreal Engine and hand gestures to assist hand trauma patients in rehabilitation.",
    technologies: ["Unreal Engine", "YOLO", "Computer Vision"],
    link: "https://youtu.be/nolA7gAj25A",
    github: "https://github.com/bilal77511/yolov5-hand-gesture-car-game-control.git",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Pulse & Prism",
    description: "A tool that automates the creation of short-form video content for platforms like TikTok and YouTube Shorts.",
    technologies: ["Aria", "Allegro", "OpenAI TTS"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "Offline Edubot",
    description: "An AI-powered offline tutor designed to provide quality education in low-connectivity areas.",
    technologies: ["Llama 3.2", "AI", "Education"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    name: "LegalBuddy",
    description: "An AI-powered tool for attorneys to generate case analysis reports and perform liability analysis.",
    technologies: ["MongoDB", "Upstage OCR", "LLaMA"],
    link: "#",
    github: "#",
    image: "/placeholder.svg?height=200&width=300"
  }
]

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="mb-4 relative h-48 rounded-md overflow-hidden">
      <Image
        src={project.image}
        alt={project.name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <h3 className="text-xl font-semibold mb-2 text-blue-600">{project.name}</h3>
    <p className="text-gray-700 mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.technologies.map((tech, index) => (
        <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex space-x-4">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
        <ExternalLink size={16} className="mr-1" /> Demo
      </a>
      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
        <Github size={16} className="mr-1" /> Code
      </a>
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

