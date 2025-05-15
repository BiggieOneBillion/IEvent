import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { CalendarPreview } from "./CalendarPreview"

type HeroProps = {
  onRegister: () => void
}

export const Hero = ({ onRegister }: HeroProps) => (
  <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-violet-100 rounded-full opacity-70 blur-3xl"></div>
      <div className="absolute top-40 -left-20 w-72 h-72 bg-indigo-100 rounded-full opacity-70 blur-3xl"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative z-10">
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-violet-800 bg-violet-100 rounded-full">
            Simplify your event management
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Create events that{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              people remember
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The modern platform for planning, promoting, and managing events of any size. Streamlined workflows,
            powerful tools, beautiful designs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onRegister}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all"
            >
              Get Started Free
            </button>
            <Link
              to="#how-it-works"
              className="px-8 py-4 text-gray-700 font-medium rounded-full border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center"
            >
              See How It Works <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <CalendarPreview />
      </div>
    </div>
  </section>
)