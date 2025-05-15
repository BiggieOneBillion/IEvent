import { Link } from "react-router-dom"

export const Logo = () => (
  <Link to="/" className="flex items-center">
    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl">
      E
    </div>
    <span className="ml-2 text-xl font-bold text-gray-900">eventify</span>
  </Link>
)