import { ArrowRight } from "lucide-react";

type Props = {
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const HowItWorks = ({ setShowRegisterModal }: Props) => {
  return (
    <section
      id="how-it-works"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full opacity-70 blur-3xl -translate-y-1/4 translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Create and manage your events in just a few simple steps.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-200 via-indigo-300 to-violet-200 transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-8 z-10 shadow-lg animate-pulse-slow">
                  1
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-2xl p-6 shadow-xl w-full h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Create Your Event
                  </h3>

                  {/* Animated Illustration */}
                  <div className="relative h-48 mb-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl overflow-hidden">
                    {/* Form Builder Animation */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-3">
                      <div className="w-full h-4 bg-violet-200 rounded-md mb-3 animate-pulse"></div>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div
                          className="h-8 bg-gray-100 rounded-md animate-pulse"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="h-8 bg-gray-100 rounded-md animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                      <div
                        className="h-8 bg-gray-100 rounded-md mb-3 animate-pulse"
                        style={{ animationDelay: "0.3s" }}
                      ></div>
                      <div
                        className="h-16 bg-gray-100 rounded-md animate-pulse"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>

                    {/* Animated Cursor */}
                    <div className="absolute h-4 w-4 rounded-full bg-violet-600 animate-cursor-move"></div>
                  </div>

                  <p className="text-gray-600 text-center">
                    Set up your event details, customize your registration form,
                    and design your event page.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                {/* Step Number */}
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-8 z-10 shadow-lg animate-pulse-slow"
                  style={{ animationDelay: "0.3s" }}
                >
                  2
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-2xl p-6 shadow-xl w-full h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Share & Promote
                  </h3>

                  {/* Animated Illustration */}
                  <div className="relative h-48 mb-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl overflow-hidden">
                    {/* Social Share Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-24 h-32 bg-white rounded-xl shadow-lg p-2 z-20 relative animate-float">
                          <div className="w-full h-12 bg-indigo-100 rounded-md mb-2"></div>
                          <div className="w-full h-3 bg-gray-200 rounded-full mb-1"></div>
                          <div className="w-3/4 h-3 bg-gray-200 rounded-full mb-1"></div>
                          <div className="w-1/2 h-3 bg-gray-200 rounded-full"></div>
                        </div>

                        {/* Share Lines */}
                        <div
                          className="absolute top-1/2 left-full w-8 h-8 bg-blue-500 rounded-full -ml-4 animate-scale-pulse"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="absolute top-1/4 left-full w-8 h-8 bg-green-500 rounded-full -ml-4 animate-scale-pulse"
                          style={{ animationDelay: "0.3s" }}
                        ></div>
                        <div
                          className="absolute bottom-1/4 left-full w-8 h-8 bg-red-500 rounded-full -ml-4 animate-scale-pulse"
                          style={{ animationDelay: "0.5s" }}
                        ></div>

                        {/* Share Rays */}
                        <div
                          className="absolute top-0 left-full w-16 h-1 bg-blue-200 rounded-full transform rotate-15 origin-left animate-grow"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="absolute top-1/3 left-full w-20 h-1 bg-green-200 rounded-full transform origin-left animate-grow"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <div
                          className="absolute bottom-1/3 left-full w-24 h-1 bg-red-200 rounded-full transform -rotate-15 origin-left animate-grow"
                          style={{ animationDelay: "0.6s" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-center">
                    Share your event page via email, social media, or embed it
                    on your website.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center">
                {/* Step Number */}
                <div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center text-white font-bold text-xl mb-8 z-10 shadow-lg animate-pulse-slow"
                  style={{ animationDelay: "0.6s" }}
                >
                  3
                </div>

                {/* Step Content */}
                <div className="bg-white rounded-2xl p-6 shadow-xl w-full h-full">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                    Manage & Track
                  </h3>

                  {/* Animated Illustration */}
                  <div className="relative h-48 mb-6 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-xl overflow-hidden">
                    {/* Dashboard Animation */}
                    <div className="absolute inset-4 bg-white rounded-lg shadow-sm p-3">
                      {/* Chart */}
                      <div className="h-20 mb-3 flex items-end space-x-1">
                        {[40, 60, 30, 70, 50, 80, 45].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-gradient-to-t from-violet-500 to-indigo-500 rounded-t-sm animate-grow-up"
                            style={{
                              height: `${height}%`,
                              animationDelay: `${i * 0.1}s`,
                            }}
                          ></div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-2">
                        <div
                          className="h-8 bg-indigo-100 rounded-md flex items-center px-2 animate-pulse"
                          style={{ animationDelay: "0.1s" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                          <div className="w-full h-3 bg-indigo-200 rounded-full"></div>
                        </div>
                        <div
                          className="h-8 bg-violet-100 rounded-md flex items-center px-2 animate-pulse"
                          style={{ animationDelay: "0.2s" }}
                        >
                          <div className="w-2 h-2 rounded-full bg-violet-500 mr-2"></div>
                          <div className="w-full h-3 bg-violet-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-center">
                    Monitor registrations, communicate with attendees, and get
                    insights on your event.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Arrow */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowRegisterModal(true)}
              className="px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-medium rounded-full hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all flex items-center"
            >
              Start Creating Events{" "}
              <ArrowRight className="ml-2 h-5 w-5 animate-bounce-x" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
