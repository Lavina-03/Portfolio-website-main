import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { toast } from 'sonner';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { contactFormSubmit } from '../data/mock';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    projectType: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await contactFormSubmit(formData);
      
      if (result.success) {
        toast.success(result.message);
        setFormData({
          name: '',
          businessName: '',
          email: '',
          whatsapp: '',
          projectType: '',
          message: ''
        });
      }
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              Let's Build Something Great
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mt-6">
              Tell us about your project and we'll craft a solution around your goals.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-slate-700/50">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300 text-sm font-medium">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Business Name */}
                <div className="space-y-2">
                  <Label htmlFor="businessName" className="text-gray-300 text-sm font-medium">
                    Business Name *
                  </Label>
                  <Input
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="Your Company Ltd."
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="john@company.com"
                  />
                </div>

                {/* WhatsApp */}
                <div className="space-y-2">
                  <Label htmlFor="whatsapp" className="text-gray-300 text-sm font-medium">
                    WhatsApp Number *
                  </Label>
                  <Input
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300"
                    placeholder="+1 234 567 8900"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-gray-300 text-sm font-medium">
                    What do you need help with? *
                  </Label>
                  <Select value={formData.projectType} onValueChange={handleSelectChange} required>
                    <SelectTrigger className="bg-slate-900/50 border-slate-700 text-white focus:border-cyan-500 focus:ring-cyan-500/20">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-900 border-slate-700">
                      <SelectItem value="new-website" className="text-white hover:bg-slate-800">New Website/Web App</SelectItem>
                      <SelectItem value="redesign" className="text-white hover:bg-slate-800">Website Redesign</SelectItem>
                      <SelectItem value="ecommerce" className="text-white hover:bg-slate-800">E-Commerce Platform</SelectItem>
                      <SelectItem value="dashboard" className="text-white hover:bg-slate-800">Dashboard/Admin Panel</SelectItem>
                      <SelectItem value="fixes" className="text-white hover:bg-slate-800">Bug Fixes & Optimization</SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-slate-800">Other (Tell us more below)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300 text-sm font-medium">
                    Project Details (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-slate-900/50 border-slate-700 text-white placeholder:text-gray-500 focus:border-cyan-500 focus:ring-cyan-500/20 transition-all duration-300 resize-none"
                    placeholder="Tell us more about your project, goals, timeline, or any specific requirements..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />}
                </Button>
              </form>
            </div>

            {/* Right: Contact Info */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Whether you have a detailed brief or just an idea, let's discuss how we can bring your vision to life. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Phone className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">WhatsApp / Phone</div>
                      <a href="https://wa.me/918180916716" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 transition-colors duration-300">
                        +91 81809 16716
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Email</div>
                      <a href="mailto:lavikalda@gmail.com" className="text-white hover:text-cyan-400 transition-colors duration-300">
                        lavikalda@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <MapPin className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">Response Time</div>
                      <div className="text-white">Within 24 Hours</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30">
                <div className="text-center space-y-2">
                  <div className="text-4xl font-bold text-cyan-400">100%</div>
                  <div className="text-gray-300 font-medium">Confidentiality Guaranteed</div>
                  <div className="text-sm text-gray-500">Your project details are always secure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
