import {
  Palette,
  Code,
  AppWindow,
  ShoppingCart,
  Cloud,
  Bot,
  Workflow,
  Share2,
  Sparkles,
  MessageCircle,
} from "lucide-react";

export const COMPANY = {
  name: "CodeVista",
  tagline: "Vision Through Code",
  description:
    "We craft cutting-edge websites, AI-powered solutions, and automation workflows that transform businesses and drive growth.",
  email: "info@codevista.com",
  phone: "+92 XXX XXXXXXX",
  address: "Bahria Town Phase 7, Rawalpindi, Pakistan",
  mapQuery: "Bahria+Town+Phase+7+Rawalpindi+Pakistan",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const SERVICES = [
  {
    id: "website-designing",
    title: "Website Designing",
    shortDescription:
      "Beautiful, user-centric website designs that captivate your audience and reflect your brand identity.",
    description:
      "We create stunning, pixel-perfect website designs that combine aesthetics with functionality. Our design process focuses on user experience, brand consistency, and conversion optimization to ensure your website not only looks great but delivers results.",
    icon: Palette,
    features: [
      "Custom UI/UX design",
      "Responsive layouts for all devices",
      "Brand-aligned visual identity",
      "Wireframing and prototyping",
      "Design system creation",
    ],
    technologies: ["Figma", "Adobe XD", "Sketch", "TailwindCSS"],
  },
  {
    id: "web-development",
    title: "Web Development",
    shortDescription:
      "Full-stack web development with modern frameworks and best practices for performance and scalability.",
    description:
      "Our expert developers build robust, scalable web applications using the latest technologies. From simple landing pages to complex platforms, we deliver clean, maintainable code that performs flawlessly.",
    icon: Code,
    features: [
      "Full-stack development",
      "API design and integration",
      "Database architecture",
      "Performance optimization",
      "SEO-friendly development",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    id: "web-applications",
    title: "Web Applications",
    shortDescription:
      "Powerful web applications with rich interactivity, real-time features, and seamless user experiences.",
    description:
      "We build feature-rich web applications that solve complex business problems. Our apps are built with scalability in mind, featuring real-time updates, offline capability, and intuitive interfaces.",
    icon: AppWindow,
    features: [
      "Progressive Web Apps (PWA)",
      "Real-time functionality",
      "Role-based access control",
      "Third-party integrations",
      "Offline-first architecture",
    ],
    technologies: ["React", "Next.js", "Socket.io", "Redis", "MongoDB"],
  },
  {
    id: "ecommerce",
    title: "E-commerce Web Applications",
    shortDescription:
      "End-to-end e-commerce solutions with secure payments, inventory management, and seamless checkout.",
    description:
      "Launch your online store with our comprehensive e-commerce solutions. We build secure, high-converting platforms with integrated payment gateways, inventory management, and analytics dashboards.",
    icon: ShoppingCart,
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "Inventory management system",
      "Order tracking and fulfillment",
      "Analytics and reporting",
    ],
    technologies: ["Next.js", "Stripe", "Shopify API", "PostgreSQL", "Redis"],
  },
  {
    id: "cloud-services",
    title: "CI/CD, Cloud Services & Hosting",
    shortDescription:
      "Reliable cloud infrastructure, automated deployments, and scalable hosting solutions.",
    description:
      "We set up and manage your entire cloud infrastructure. From CI/CD pipelines to container orchestration, we ensure your applications deploy reliably and scale effortlessly.",
    icon: Cloud,
    features: [
      "CI/CD pipeline setup",
      "Container orchestration (Docker/K8s)",
      "Cloud migration",
      "Auto-scaling configuration",
      "Monitoring and alerting",
    ],
    technologies: ["AWS", "Google Cloud", "Vercel", "Docker", "GitHub Actions"],
  },
  {
    id: "ai-solutions",
    title: "AI Solutions, AI Agents & Automation",
    shortDescription:
      "Intelligent AI solutions and autonomous agents that automate processes and unlock new possibilities.",
    description:
      "Harness the power of artificial intelligence to transform your business. We build custom AI agents, chatbots, and intelligent automation systems that learn, adapt, and deliver measurable results.",
    icon: Bot,
    features: [
      "Custom AI agent development",
      "Natural language processing",
      "Machine learning models",
      "Intelligent chatbots",
      "Predictive analytics",
    ],
    technologies: ["OpenAI", "LangChain", "Python", "TensorFlow", "Claude API"],
  },
  {
    id: "automation-workflows",
    title: "Automation Workflows",
    shortDescription:
      "Streamlined business processes through N8N and Make.com automation workflows.",
    description:
      "Eliminate repetitive tasks and streamline your operations with custom automation workflows. We design and implement sophisticated integrations using N8N and Make.com to connect your tools and automate your processes.",
    icon: Workflow,
    features: [
      "Custom workflow design",
      "Multi-platform integration",
      "Data synchronization",
      "Trigger-based automation",
      "Error handling and monitoring",
    ],
    technologies: ["N8N", "Make.com", "Zapier", "REST APIs", "Webhooks"],
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    shortDescription:
      "Comprehensive social media management across Google Cloud and Meta Business Studio platforms.",
    description:
      "Maximize your social media presence with our expert management services. We handle everything from content strategy to analytics across Google Cloud and Meta Business Studio platforms.",
    icon: Share2,
    features: [
      "Content strategy and planning",
      "Platform-specific optimization",
      "Analytics and reporting",
      "Community management",
      "Paid advertising campaigns",
    ],
    technologies: [
      "Google Cloud",
      "Meta Business Studio",
      "Google Analytics",
      "Buffer",
      "Canva",
    ],
  },
  {
    id: "customized-solutions",
    title: "Customized AI & Web Solutions",
    shortDescription:
      "Tailor-made solutions combining AI and web technologies to address your unique business challenges.",
    description:
      "Every business is unique, and so are our solutions. We combine AI capabilities with web technologies to create custom platforms that address your specific challenges and goals.",
    icon: Sparkles,
    features: [
      "Requirements analysis",
      "Custom architecture design",
      "AI-powered features",
      "Scalable solutions",
      "Ongoing support and iteration",
    ],
    technologies: ["Next.js", "Python", "OpenAI", "AWS", "PostgreSQL"],
  },
  {
    id: "whatsapp-instagram-agents",
    title: "WhatsApp & Instagram AI Agents",
    shortDescription:
      "AI-powered agents for WhatsApp and Instagram that automate customer interactions and boost sales.",
    description:
      "Transform your customer communication with AI-powered agents on WhatsApp and Instagram. Our agents handle inquiries, process orders, schedule appointments, and provide 24/7 customer support.",
    icon: MessageCircle,
    features: [
      "24/7 automated customer support",
      "Order processing and tracking",
      "Appointment scheduling",
      "Lead qualification",
      "Multi-language support",
    ],
    technologies: [
      "WhatsApp Business API",
      "Instagram API",
      "OpenAI",
      "Node.js",
      "MongoDB",
    ],
  },
];

export const STATS = [
  { label: "Projects Delivered", value: 150 },
  { label: "Happy Clients", value: 80 },
  { label: "Technologies", value: 30 },
  { label: "Years Experience", value: 5 },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  "AWS",
  "Google Cloud",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "OpenAI",
  "TailwindCSS",
  "N8N",
  "Make.com",
  "Vercel",
  "GitHub Actions",
];
