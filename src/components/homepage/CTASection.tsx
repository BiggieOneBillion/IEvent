import React from "react";

type Props = {
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const CTASection = ({ setShowRegisterModal }: Props) => {
  return (
    <section className="py-20 bg-gradient-to-r from-violet-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-full bg-[url('/placeholder.svg?height=800&width=1600')] opacity-10 bg-cover bg-center"></div>
      </div>

      {/* Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-white opacity-20 rounded-full animate-float-slow"></div>
        <div
          className="absolute top-3/4 left-1/3 w-8 h-8 bg-white opacity-20 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-white opacity-20 rounded-full animate-float-slow"
          style={{ animationDelay: "0.3s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-white opacity-20 rounded-full animate-float"
          style={{ animationDelay: "0.7s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to create your next amazing event?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of event organizers who are creating successful
            events with eventify.
          </p>
          <button
            onClick={() => setShowRegisterModal(true)}
            className="px-8 py-4 bg-white text-indigo-600 font-medium rounded-full hover:shadow-lg hover:bg-gray-50 transition-all animate-pulse-slow"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
