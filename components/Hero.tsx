import Image from 'next/image'
import { Github, Linkedin, FileText } from 'lucide-react'

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="text-center space-y-8">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <Image
            src="https://avatars.githubusercontent.com/u/149602572?v=4"
            alt="Muhammad Bilal"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold">
            Muhammad Bilal
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600">
            Software Engineer | AI Enthusiast | Problem Solver
          </p>
        </div>

        <div className="flex justify-center space-x-6 mt-8">
          <a 
            href="https://github.com/bilal77511" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Github size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/muhammad-bilal-a75782280/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="/Muhammad_Bilal_CV.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FileText size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

