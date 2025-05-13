import { useState } from "react";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState<boolean>(true);
  const signIn = () => setIsSignIn(true);
  const signUp = () => setIsSignIn(false);

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="flex-1 flex">
        {/* Left Column - Content */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center px-20 bg-whitey">
          <div className="max-w-lg">
            <h1 className="text-4xl font-bold text-indigo-900 mb-6">
              {isSignIn ? "Welcome Back!" : "Join the Experience"}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {isSignIn
                ? "Your next unforgettable event is just a login away. Manage your bookings, track attendance, and create amazing experiences."
                : "Create, manage, and track your events with ease. Join thousands of event organizers who trust our platform."}
            </p>
            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* Existing feature items */}
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-sm text-gray-600">
                  Real-time Event Tracking
                </p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-sm text-gray-600">Digital Ticketing</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-sm text-gray-600">Analytics & Insights</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-sm text-gray-600">Attendee Engagement</p>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p className="ml-4 text-sm text-gray-600">Mobile Check-in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-whitey shadow-2xl lg:shadow-none">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-bold text-gray-900 lg:hidden mb-6">
                {isSignIn ? "Welcome Back!" : "Join the Experience"}
              </h2>
            </div>
            {isSignIn ? (
              <SignIn handleSignUp={signUp} />
            ) : (
              <SignUp handleSignIn={signIn} />
            )}
          </div>
        </div>
      </div>

      {/* Company Logos Banner */}
      <div className="w-full bg-white py-8 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
          <p className="text-center text-sm text-gray-500 mb-6">Trusted by leading companies worldwide</p>
          <div className="relative">
            <div className="flex space-x-12 animate-scrolly overflow-x-auto no-scrollbar">
              {/* Company Logo 1 */}
              <div className="flex-none w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              {/* Company Logo 2 */}
              <div className="flex-none w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
              {/* Company Logo 3 */}
              <div className="flex-none w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              {/* Company Logo 4 */}
              <div className="flex-none w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                </svg>
              </div>
              {/* Company Logo 5 */}
              <div className="flex-none w-32 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-20 h-8 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
