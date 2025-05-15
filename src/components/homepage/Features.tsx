
const Features = () => {
  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-violet-100 rounded-full opacity-70 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything you need to create exceptional events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to make event planning seamless and
            stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {[
            {
              title: "Intuitive Event Builder",
              description:
                "Create beautiful event pages with our drag-and-drop builder. No design skills needed.",
              icon: "🎨",
              animation: "animate-float",
            },
            {
              title: "Smart Registration Forms",
              description:
                "Collect exactly the information you need with customizable registration forms.",
              icon: "📝",
              animation: "animate-float-slow",
            },
            {
              title: "Attendee Management",
              description:
                "Easily manage your guest list, send updates, and track attendance.",
              icon: "👥",
              animation: "animate-float",
            },
            {
              title: "Ticketing & Payments",
              description:
                "Sell tickets, manage capacity, and accept payments securely.",
              icon: "🎟️",
              animation: "animate-float-slow",
            },
            {
              title: "Marketing Tools",
              description:
                "Promote your event with email campaigns, social sharing, and SEO optimization.",
              icon: "📢",
              animation: "animate-float",
            },
            {
              title: "Analytics Dashboard",
              description:
                "Get real-time insights into registrations, attendance, and engagement.",
              icon: "📊",
              animation: "animate-float-slow",
            },
          ].map((feature, i) => (
            <div key={i} className="group">
              <div
                className={`bg-white rounded-2xl p-8 shadow-sm border border-gray-100 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${feature.animation}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-50 to-indigo-50 flex items-center justify-center mb-6 text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
