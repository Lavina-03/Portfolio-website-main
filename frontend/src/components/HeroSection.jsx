import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">Building Digital</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Solutions That Scale
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
                Transforming ambitious ideas into powerful digital experiences. From concept to launch, I partner with startups and scaling businesses to build products that drive real growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 group"
              >
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 px-8 py-6 text-lg font-semibold transition-all duration-300"
              >
                See Our Work
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-800">
              {/* <div>
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-sm text-gray-500">Projects Delivered</div>
              </div> */}
              {/* <div>
                <div className="text-3xl font-bold text-cyan-400">98%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div> */}
              {/* <div>
                <div className="text-3xl font-bold text-cyan-400">24/7</div>
                <div className="text-sm text-gray-500">Support Available</div>
              </div> */}
            </div>
          </div>

          {/* Right: 3D Image Treatment with Transparent Background */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative group">
              {/* Enhanced Multi-layer Glow Effect */}
              <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded-full blur-[60px] group-hover:blur-[80px] transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-4 bg-cyan-400/30 rounded-full blur-3xl group-hover:blur-[50px] transition-all duration-500"></div>
              
              {/* 3D Depth Container - Reduced Size */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Background Layers for 3D Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full transform translate-x-4 translate-y-4 blur-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-tl from-cyan-400/15 to-transparent rounded-full transform -translate-x-2 -translate-y-2"></div>
                
                {/* Main Image Container */}
                <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-700 group-hover:rotate-2">
                  {/* 3D Shadow Layer */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/50 to-transparent rounded-full transform translate-x-3 translate-y-3 blur-md"></div>
                  
                  {/* Image with Transparent Background */}
                  <img
                    src="/lavina-no-bg.png"
                    alt="Lavina Kalda"
                    className="relative w-full h-full object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.6)] group-hover:drop-shadow-[0_0_60px_rgba(6,182,212,0.8)] transition-all duration-500"
                  />
                  
                  {/* Rim Lighting Effect */}
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(6,182,212,0.3)] group-hover:shadow-[inset_0_0_80px_rgba(6,182,212,0.5)] transition-all duration-500"></div>
                </div>
              </div>

              {/* Floating Particles - 3D Effect */}
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-cyan-400 rounded-full animate-ping shadow-lg shadow-cyan-400/50"></div>
              <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50" style={{ animationDelay: '0.5s' }}></div>
              <div className="absolute top-1/3 -right-6 w-2 h-2 bg-cyan-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/3 -left-6 w-2 h-2 bg-blue-300 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;