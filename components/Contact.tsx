import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            <a href="mailto:bilal77511@gmail.com" className="flex items-center text-blue-600 hover:text-blue-800">
              <Mail size={24} className="mr-2" />
              bilal77511@gmail.com
            </a>
            <a href="tel:+923406322593" className="flex items-center text-blue-600 hover:text-blue-800">
              <Phone size={24} className="mr-2" />
              +92 340 632 2593
            </a>
            <div className="flex items-center text-gray-700">
              <MapPin size={24} className="mr-2" />
              TIP Colony, 22630, Haripur, KPK, Pakistan
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <a 
              href="https://www.linkedin.com/in/muhammad-bilal-a75782280/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

