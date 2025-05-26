import React from "react";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { Button } from "@repo/ui/button";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-sm font-medium text-indigo-600">
                New: AI-powered suggestions
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              Where ideas flow,
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                creativity grows
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Transform your thoughts into stunning visual stories with our
              intuitive drawing tool. Perfect for wireframes, diagrams, and
              creative expression.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-2xl font-medium hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
                Start Creating Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
               <button className="flex text-gray-600 items-center justify-center gap-2 px-8 py-4 rounded-2xl font-medium border-2 border-gray-200 hover:border-gray-300 transition-colors duration-300">
                <Users className="w-5 h-5 text-gray-600" />
                Join Community
              </button>
            </div>

            <div className="mt-10 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&h=50`}
                    alt={`User ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <span>Join 50k+ creators</span>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl p-8 relative overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&h=750"
                alt="Excelidraw Interface"
                className="rounded-2xl shadow-2xl w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">AI Assistant</h3>
                  <p className="text-sm text-gray-600">Suggests improvements</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-indigo-100 rounded-full w-3/4"></div>
                <div className="h-2 bg-purple-100 rounded-full w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
