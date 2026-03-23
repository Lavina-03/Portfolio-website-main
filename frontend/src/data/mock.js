// Mock data for portfolio website

export const businessInfo = {
  name: "Lavina Kalda",
  tagline: "Building Digital Solutions That Scale",
  description: "Transforming ambitious ideas into powerful digital experiences. From concept to launch, I partner with startups and scaling businesses to build products that drive real growth.",
  email: "lavikalda@gmail.com",
  phone: "+91 81809 16716",
  whatsapp: "+918180916716"
};

export const services = [
  {
    id: 1,
    title: "Lead Generation",
    description: "Strategic digital solutions designed to attract and convert your ideal customers into qualified leads.",
    icon: "target"
  },
  {
    id: 2,
    title: "Revenue Growth",
    description: "Build revenue-generating platforms that turn visitors into paying customers through optimized user experiences.",
    icon: "trending-up"
  },
  {
    id: 3,
    title: "Brand Authority",
    description: "Establish your brand as an industry leader with compelling digital presence that builds trust and credibility.",
    icon: "award"
  },
  {
    id: 4,
    title: "Conversion Optimization",
    description: "Data-driven design and development that maximizes conversions at every touchpoint in your customer journey.",
    icon: "zap"
  },
  {
    id: 5,
    title: "Digital Presence",
    description: "Create a powerful online footprint that captures attention and positions your business for long-term success.",
    icon: "globe"
  },
  {
    id: 6,
    title: "Scalable Solutions",
    description: "Build robust, future-proof platforms that grow with your business without compromising performance.",
    icon: "rocket"
  }
];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform & Admin Panel",
    description: "Worked on an existing e-commerce website that was already live but had multiple technical issues. Handled both the main website and admin panel, resolving broken button functionality, product display bugs, and layout errors. Also improved the admin panel usability and ensured all data reflected correctly on the website.",
    images: [
      "SC1.png",
      "SC2.png",
      "SC3.png",
      "SC4.png",
      "SC5.png"
    ],
    category: "E-Commerce",
    tags: ["Admin Panel", "Bug Fixes", "UX Optimization", "Live Website"]
  },
  {
    id: 2,
    title: "Wallet Automation Website",
    description: "Built a landing page and dashboard interface for a startup in the AI automation space. Handled layout design, responsiveness, and front-end interactions for a complete web solution.",
    images: [
      "TD1.png",
      "TD2.png",
      "TD3.png",
      "TD4.png",
      "TD5.png",
      "TD6.png",
      "TD7.png",
      "TD8.png"
    ],
    category: "AI Automation",
    tags: ["Landing Page", "Dashboard", "Startup", "Responsive Design"]
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Quality-Driven",
    description: "Every project is built with meticulous attention to detail, ensuring pixel-perfect execution and flawless functionality.",
    icon: "gem"
  },
  {
    id: 2,
    title: "Speed & Efficiency",
    description: "Fast turnaround without compromising quality. Your project launches on time, every time.",
    icon: "gauge"
  },
  {
    id: 3,
    title: "Custom Solutions",
    description: "No cookie-cutter templates. Every solution is tailored specifically to your business goals and audience.",
    icon: "settings"
  },
  {
    id: 4,
    title: "Long-Term Partnership",
    description: "Beyond launch, I'm here to support your growth with updates, optimizations, and strategic guidance.",
    icon: "handshake"
  }
];

export const contactFormSubmit = async (formData) => {
  // Mock submission - will be replaced with backend API
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Form submitted (MOCKED):', formData);
      resolve({ success: true, message: "Thank you! I'll get back to you within 24 hours." });
    }, 1500);
  });
};