export const CalendarPreview = () => (
  <div className="relative">
    <div className="absolute inset-0 bg-gradient-to-r from-violet-100/40 to-indigo-100/40 rounded-3xl transform rotate-3"></div>
    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 transition-all hover:rotate-0 duration-300">
      <div className="relative w-full h-[400px] bg-white">
        <div className="absolute inset-8 bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="h-12 bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-between px-4">
            <div className="w-24 h-4 bg-white/30 rounded-full"></div>
            <div className="flex space-x-1">
              <div className="w-4 h-4 rounded-full bg-white/30"></div>
              <div className="w-4 h-4 rounded-full bg-white/30"></div>
              <div className="w-4 h-4 rounded-full bg-white/30"></div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-1 p-4">
            {Array.from({ length: 31 }).map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium
                  ${i === 14
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

          <div className="absolute h-6 w-6 rounded-full border-2 border-violet-600 animate-cursor"></div>
        </div>

        <div className="absolute top-4 right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80 animate-spin-slow"></div>
        <div className="absolute bottom-12 right-12 w-8 h-8 bg-green-400 rounded-lg opacity-80 animate-bounce"></div>
        <div className="absolute top-12 left-4 w-12 h-12 bg-pink-400 rounded-lg opacity-80 animate-ping-slow"></div>
      </div>
    </div>
  </div>
)