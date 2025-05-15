import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HeroSection = ({ setShowRegisterModal }: Props) => {
  return (
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
              The modern platform for planning, promoting, and managing events
              of any size. Streamlined workflows, powerful tools, beautiful
              designs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setShowRegisterModal(true)}
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
          <div className="relative">
            {/* Animated Hero Illustration */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-100/40 to-indigo-100/40 rounded-3xl transform rotate-3"></div>
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 transition-all hover:rotate-0 duration-300">
              <div className="relative w-full h-[400px] bg-white">
                {/* Calendar Base */}
                <div className="absolute inset-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                  {/* Calendar Header */}
                  <div className="h-12 bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-between px-4">
                    <div className="w-24 h-4 bg-white/30 rounded-full"></div>
                    <div className="flex space-x-1">
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                      <div className="w-4 h-4 rounded-full bg-white/30"></div>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-1 p-4">
                    {Array.from({ length: 31 }).map((_, i) => (
                      <div
                        key={i}
                        className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                              ${
                                i === 14
                                  ? "bg-violet-600 text-white scale-110 shadow-md animate-pulse"
                                  : i % 7 === 0 || i % 7 === 6
                                  ? "text-gray-400"
                                  : "hover:bg-gray-100 text-gray-700"
                              }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>

                  {/* Animated Event Cards */}
                  <div className="absolute bottom-4 right-4 w-48 h-24 bg-gradient-to-r from-pink-500 to-rose-500 rounded-lg shadow-lg p-3 text-white animate-float-slow">
                    <div className="w-full h-3 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-3/4 h-3 bg-white/20 rounded-full mb-4"></div>
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 rounded-full bg-white/20 mr-2"></div>
                      <div>
                        <div className="w-20 h-2 bg-white/20 rounded-full mb-1"></div>
                        <div className="w-16 h-2 bg-white/20 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-20 left-4 w-40 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg shadow-lg p-3 text-white animate-float">
                    <div className="w-full h-3 bg-white/20 rounded-full mb-2"></div>
                    <div className="w-3/4 h-3 bg-white/20 rounded-full"></div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold animate-pulse">
                      3
                    </div>
                  </div>

                  {/* Animated Cursor */}
                  <div className="absolute h-6 w-6 rounded-full border-2 border-violet-600 animate-cursor"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-spin-slow"></div>
                <div className="absolute bottom-12 right-12 w-8 h-8 bg-green-400 rounded-lg opacity-80 animate-bounce"></div>
                <div className="absolute top-12 left-4 w-12 h-12 bg-pink-400 rounded-lg opacity-80 animate-ping-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
