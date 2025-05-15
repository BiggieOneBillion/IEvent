import { Link } from "react-router-dom"

type DesktopNavProps = {
  onSignIn: () => void
  onRegister: () => void
}

export const DesktopNav = ({ onSignIn, onRegister }: DesktopNavProps) => (
  <nav className="hidden md:flex items-center space-x-8">
    <Link to="#features" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
      Features
    </Link>
    <Link to="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
      How It Works
    </Link>
    <Link to="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
      Testimonials
    </Link>
    <button onClick={onSignIn} className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
      Sign In
    </button>
    <button
      onClick={onRegister}
      className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-medium rounded-full hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all"
    >
      Get Started
    </button>
  </nav>
)