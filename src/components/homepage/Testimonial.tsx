
const Testimonial = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of event organizers who trust eventify for their
            events.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Eventify transformed how we manage our corporate events. The platform is intuitive, and the analytics help us understand our audience better.",
              author: "Sarah Johnson",
              role: "Marketing Director",
              company: "TechVilla Corp",
              delay: "0s",
            },
            {
              quote:
                "I've used many event platforms, but Eventify stands out for its ease of use and powerful features. It's saved me countless hours of work.",
              author: "Michael Chen",
              role: "Event Coordinator",
              company: "Global Events",
              delay: "0.2s",
            },
            {
              quote:
                "The customer support at Eventify is exceptional. They helped me set up my first virtual conference and were there every step of the way.",
              author: "Jessica Williams",
              role: "Conference Organizer",
              company: "EduSummit Ng",
              delay: "0.4s",
            },
          ].map((testimonial, i) => (
            <div
              key={i}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100 animate-fade-in"
              style={{ animationDelay: testimonial.delay }}
            >
              <div className="flex items-center mb-4">
                <div className="text-4xl text-violet-300">"</div>
              </div>
              <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
              <div className="flex items-center">
                {/* <div className="h-10 w-10 rounded-full bg-gray-300 overflow-hidden">
                  <img
                    src="/placeholder.svg?height=40&width=40"
                    alt={testimonial.author}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div> */}
                <div className="ml-3">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
