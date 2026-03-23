import React from 'react';
import { Gem, Gauge, Settings, Handshake } from 'lucide-react';
import { whyChooseUs } from '../data/mock';

const iconMap = {
  gem: Gem,
  gauge: Gauge,
  settings: Settings,
  handshake: Handshake
};

const WhyChooseSection = () => {
  return (
    <section id="why-choose" className="py-32 relative">
      {/* Background Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Why Work With Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
              Partner with someone who's as committed to your success as you are.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => {
              const IconComponent = iconMap[item.icon];
              
              return (
                <div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-10 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden"
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                        <IconComponent className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-400 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-gradient-to-r from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
              <p className="text-2xl font-semibold text-white mb-2">
                "Quality, Speed, and Partnership"
              </p>
              <p className="text-gray-400">
                The three pillars that define every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
