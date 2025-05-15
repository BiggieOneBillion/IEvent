import { Link } from "react-router-dom"
import { X, Menu } from "lucide-react"

type MobileNavProps = {
  isOpen: boolean
  onToggle: () => void
  onSignIn: () => void
  onRegister: () => void
}

export const MobileNav = ({ isOpen, onToggle, onSignIn, onRegister }: MobileNavProps) => (
  <div className="md:hidden">
    <button
      onClick={onToggle}
      className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
    >
      {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
    </button>

    {isOpen && (
      <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="#features"
            className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
            onClick={onToggle}
          >
            Features
          </Link>
          <Link
            to="#how-it-works"
            className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
            onClick={onToggle}
          >
            How It Works
          </Link>
          <Link
            to="#testimonials"
            className="block px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
            onClick={onToggle}
          >
            Testimonials
          </Link>
          <button
            onClick={() => {
              onToggle()
              onSignIn()
            }}
            className="block w-full text-left px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md"
          >
            Sign In
          </button>
          <button
            onClick={() => {
              onToggle()
              onRegister()
            }}
            className="block w-full text-left px-3 py-2 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-md hover:from-violet-700 hover:to-indigo-700"
          >
            Get Started
          </button>
        </div>
      </div>
    )}
  </div>
)