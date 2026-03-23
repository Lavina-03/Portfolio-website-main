import React from 'react';
import { Sparkles, Code, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              What We Do
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a digital solutions architect who turns complex business challenges into elegant, scalable products. Whether you're launching your first startup or scaling to the next level, I build the digital infrastructure that powers your growth.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                From concept to launch and beyond, I handle the entire product lifecycle — strategy, design, development, and optimization. No agencies, no middlemen, just direct partnership with someone who's invested in your success.
              </p>

              <div className="pt-6">
                <div className="inline-flex items-center gap-3 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-6 py-3">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-medium">End-to-end solution provider</span>
                </div>
              </div>
            </div>

            {/* Right: Value Props */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <Code className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">Full-Stack Expertise</h3>
                <p className="text-gray-400 leading-relaxed">
                  Comprehensive technical capabilities across frontend, backend, databases, and cloud infrastructure. One partner for your entire tech stack.
                </p>
              </div>

              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                <Users className="w-10 h-10 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">Business-First Approach</h3>
                <p className="text-gray-400 leading-relaxed">
                  Technology serves your business goals, not the other way around. Every decision is driven by ROI, user experience, and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
