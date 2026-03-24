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
    description: "Worked on a live e-commerce website facing critical technical failures affecting sales and operations. Diagnosed and resolved broken checkout buttons, product display bugs, and layout errors across multiple pages. Rebuilt the admin panel flow to ensure real-time data accuracy between inventory, orders, and the live storefront.",
    impact: [
      "Fixed broken checkout & cart button functionality that was blocking purchases",
      "Resolved product display bugs causing incorrect items to appear on listings",
      "Improved admin panel usability — reducing management time by streamlining order & inventory views",
      "Ensured live data sync between admin panel and customer-facing website"
    ],
    problemSolved: "The client was losing sales daily due to broken functionality on a live store. Every bug fixed directly restored revenue.",
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
    description: "Designed and developed a full web presence for an AI automation startup from scratch. Built a high-converting landing page and a feature-rich dashboard interface that communicates the product's value clearly to investors and users alike.",
    impact: [
      "Built a fully responsive landing page optimized for conversions",
      "Designed an intuitive dashboard UI for the automation product",
      "Handled all front-end interactions and animations for a polished experience",
      "Delivered a startup-ready web presence used for investor demos"
    ],
    problemSolved: "The startup needed a professional web presence fast to support investor pitches and early user onboarding.",
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