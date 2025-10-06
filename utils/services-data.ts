export interface ServiceFeature {
  title: string
  description: string
  included: boolean
}

export interface ServicePlan {
  id: string
  name: string
  price: string
  description: string
  features: ServiceFeature[]
  popular?: boolean
  buttonText?: string
}

export interface Service {
  id: string
  title: string
  shortDescription: string
  longDescription: string
  icon: string
  iconColor: string
  slug: string
  heroImage?: string
  features: string[]
  plans: ServicePlan[]
  faqs: {
    question: string
    answer: string
  }[]
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Custom websites and web applications",
    longDescription:
      "I build responsive, high-performance websites and web applications using modern technologies like React, Next.js, and Node.js. My solutions are tailored to meet your specific business needs and provide an exceptional user experience.",
    icon: "Code",
    iconColor: "#3b82f6",
    slug: "web-development",
    features: [
      "Custom website development",
      "Web application development",
      "E-commerce solutions",
      "Content management systems",
      "Responsive design for all devices",
      "SEO-friendly structure",
      "Fast loading speeds",
      "Modern UI/UX design",
    ],
    plans: [
      {
        id: "basic",
        name: "Basic Website",
        price: "₹15,000",
        description: "Perfect for small businesses and personal websites",
        features: [
          { title: "Up to 5 pages", description: "Homepage, About, Services, Contact, etc.", included: true },
          { title: "Responsive design", description: "Works on all devices", included: true },
          { title: "Contact form", description: "Simple contact form with email notifications", included: true },
          { title: "Basic SEO setup", description: "Meta tags, sitemap, etc.", included: true },
          { title: "1 month of support", description: "Email support for any issues", included: true },
          { title: "Content management system", description: "Easy content updates", included: false },
          { title: "E-commerce functionality", description: "Online store with payment processing", included: false },
          { title: "Custom functionality", description: "Advanced features and integrations", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "business",
        name: "Business Website",
        price: "₹30,000",
        description: "Ideal for growing businesses and organizations",
        popular: true,
        features: [
          { title: "Up to 10 pages", description: "More comprehensive website structure", included: true },
          { title: "Advanced responsive design", description: "Optimized for all screen sizes", included: true },
          { title: "Content management system", description: "Easy content updates", included: true },
          { title: "Comprehensive SEO setup", description: "Advanced SEO optimization", included: true },
          { title: "3 months of support", description: "Priority email and phone support", included: true },
          { title: "Blog functionality", description: "Built-in blog with categories and tags", included: true },
          { title: "E-commerce functionality", description: "Online store with payment processing", included: false },
          { title: "Custom functionality", description: "Advanced features and integrations", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "ecommerce",
        name: "E-Commerce / Custom",
        price: "₹50,000",
        description: "For online stores and complex web applications",
        features: [
          { title: "Unlimited pages", description: "As many pages as needed", included: true },
          { title: "E-commerce functionality", description: "Full-featured online store", included: true },
          { title: "Payment gateway integration", description: "Secure payment processing", included: true },
          { title: "Advanced SEO and analytics", description: "Comprehensive SEO and tracking", included: true },
          { title: "6 months of support", description: "Priority support and maintenance", included: true },
          { title: "Custom functionality", description: "Advanced features and integrations", included: true },
          { title: "Inventory management", description: "Track and manage product inventory", included: true },
          { title: "Order processing system", description: "Automated order handling", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "What is your typical project timeline?",
        answer:
          "Project timelines vary depending on the scope and complexity. A simple website might take 2-3 weeks, while more complex applications can take 1-3 months. I'll provide a detailed timeline during our initial consultation.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer:
          "Yes, I offer ongoing support and maintenance packages to ensure your website or application continues to run smoothly. We can discuss the specific support requirements during our consultation.",
      },
      {
        question: "Can you help with website hosting and domain registration?",
        answer:
          "Yes, I can assist with setting up hosting, domain registration, and email services. I'll recommend the best options based on your specific needs and budget.",
      },
      {
        question: "Do you work with clients remotely?",
        answer:
          "Yes, I work with clients from all over the world. We can communicate via email, phone, video calls, and project management tools to ensure smooth collaboration regardless of location.",
      },
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "Security audits and penetration testing",
    longDescription:
      "I help businesses identify and fix security vulnerabilities in their websites and applications through comprehensive security audits and penetration testing. Protect your digital assets and customer data from cyber threats.",
    icon: "Shield",
    iconColor: "#8b5cf6",
    slug: "cybersecurity",
    features: [
      "Security audits",
      "Penetration testing",
      "Vulnerability assessment",
      "Security best practices implementation",
      "Secure authentication systems",
      "Data encryption implementation",
      "Security monitoring setup",
      "Incident response planning",
    ],
    plans: [
      {
        id: "basic-security",
        name: "Basic Security Audit",
        price: "₹20,000",
        description: "Essential security assessment for small websites",
        features: [
          {
            title: "Vulnerability scanning",
            description: "Automated scanning for common vulnerabilities",
            included: true,
          },
          { title: "Basic penetration testing", description: "Manual testing of critical components", included: true },
          { title: "Security configuration review", description: "Review of security settings", included: true },
          {
            title: "Detailed report with recommendations",
            description: "Comprehensive findings and fixes",
            included: true,
          },
          { title: "1 follow-up consultation", description: "Review of implemented changes", included: true },
          { title: "Advanced penetration testing", description: "In-depth manual testing", included: false },
          { title: "Code security review", description: "Review of application code", included: false },
          { title: "Security monitoring", description: "Ongoing security monitoring", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "comprehensive-security",
        name: "Comprehensive Security",
        price: "₹40,000",
        description: "Complete security assessment for business websites",
        popular: true,
        features: [
          { title: "Advanced vulnerability scanning", description: "Thorough automated scanning", included: true },
          { title: "In-depth penetration testing", description: "Comprehensive manual testing", included: true },
          { title: "Code security review", description: "Review of application code", included: true },
          {
            title: "Security implementation assistance",
            description: "Help implementing security measures",
            included: true,
          },
          { title: "3 months of security monitoring", description: "Ongoing vulnerability detection", included: true },
          { title: "Security architecture review", description: "Review of overall security design", included: true },
          { title: "Employee security training", description: "Security awareness training", included: false },
          { title: "Incident response planning", description: "Preparation for security incidents", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "enterprise-security",
        name: "Enterprise Security",
        price: "₹75,000",
        description: "Advanced security for complex applications and e-commerce",
        features: [
          { title: "Comprehensive security audit", description: "Complete security assessment", included: true },
          { title: "Advanced penetration testing", description: "In-depth manual testing", included: true },
          { title: "Security architecture review", description: "Review of overall security design", included: true },
          {
            title: "Complete security implementation",
            description: "Implementation of all security measures",
            included: true,
          },
          { title: "6 months of security monitoring", description: "Continuous security oversight", included: true },
          { title: "Employee security training", description: "Comprehensive security training", included: true },
          { title: "Incident response planning", description: "Detailed incident response procedures", included: true },
          { title: "Regular security updates", description: "Ongoing security maintenance", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "What is penetration testing?",
        answer:
          "Penetration testing is a simulated cyber attack against your computer system, network, or web application to check for exploitable vulnerabilities. It helps identify security weaknesses that could be exploited by malicious actors.",
      },
      {
        question: "How often should I conduct security audits?",
        answer:
          "For most businesses, I recommend conducting a comprehensive security audit at least once a year. However, if you regularly update your website or application, or if you handle sensitive data, more frequent assessments may be necessary.",
      },
      {
        question: "What happens if vulnerabilities are found?",
        answer:
          "If vulnerabilities are identified during the security audit or penetration test, I'll provide a detailed report outlining each issue, its potential impact, and specific recommendations for remediation. I can also assist with implementing the necessary fixes.",
      },
      {
        question: "Do you provide emergency security services?",
        answer:
          "Yes, I offer emergency security services for businesses experiencing security incidents or breaches. Contact me immediately if you suspect a security issue, and I'll work quickly to assess the situation and mitigate any damage.",
      },
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    shortDescription: "Improve your online visibility",
    longDescription:
      "I help businesses improve their search engine rankings and online visibility through comprehensive SEO strategies. Increase your organic traffic and reach more potential customers with effective SEO techniques.",
    icon: "Search",
    iconColor: "#0ea5e9",
    slug: "seo-optimization",
    heroImage: "/seo.jpg",
    features: [
      "On-page SEO optimization",
      "Off-page SEO strategies",
      "Keyword research and analysis",
      "SEO performance tracking",
      "Content optimization",
      "Technical SEO improvements",
      "Local SEO optimization",
      "Competitor analysis",
    ],
    plans: [
      {
        id: "basic-seo",
        name: "Basic SEO Package",
        price: "₹15,000",
        description: "Essential SEO for small websites",
        features: [
          { title: "Keyword research", description: "Identify valuable target keywords", included: true },
          { title: "On-page SEO optimization", description: "Optimize meta tags, headings, etc.", included: true },
          { title: "Technical SEO audit", description: "Identify technical SEO issues", included: true },
          { title: "Google Business Profile setup", description: "Local business listing", included: true },
          { title: "Monthly performance report", description: "Track SEO progress", included: true },
          { title: "Content optimization", description: "Optimize existing content", included: false },
          { title: "Link building", description: "Build quality backlinks", included: false },
          { title: "Competitor analysis", description: "Analyze competitor strategies", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "standard-seo",
        name: "Standard SEO Package",
        price: "₹30,000",
        description: "Comprehensive SEO for growing businesses",
        popular: true,
        features: [
          { title: "Advanced keyword research", description: "In-depth keyword analysis", included: true },
          { title: "Complete on-page optimization", description: "Thorough on-page SEO", included: true },
          { title: "Technical SEO implementation", description: "Fix all technical SEO issues", included: true },
          { title: "Content optimization", description: "Optimize existing content", included: true },
          { title: "Basic link building", description: "Build quality backlinks", included: true },
          { title: "Local SEO optimization", description: "Improve local search presence", included: true },
          { title: "Competitor analysis", description: "Analyze competitor strategies", included: true },
          { title: "Content creation", description: "Create new SEO-optimized content", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "premium-seo",
        name: "Premium SEO Package",
        price: "₹50,000",
        description: "Advanced SEO for maximum results",
        features: [
          { title: "Comprehensive keyword strategy", description: "Complete keyword planning", included: true },
          { title: "Advanced on-page optimization", description: "Expert on-page SEO", included: true },
          { title: "Complete technical SEO", description: "Comprehensive technical fixes", included: true },
          { title: "Strategic content creation", description: "Create new SEO-optimized content", included: true },
          { title: "Advanced link building", description: "Extensive quality backlinks", included: true },
          { title: "Conversion rate optimization", description: "Improve website conversions", included: true },
          { title: "E-commerce SEO", description: "Specialized e-commerce optimization", included: true },
          { title: "Weekly performance reports", description: "Detailed progress tracking", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer:
          "SEO is a long-term strategy, and results typically take time. You may start seeing improvements in 3-6 months, but significant results often take 6-12 months. The timeline depends on factors like your website's current state, competition, and the aggressiveness of your SEO strategy.",
      },
      {
        question: "What makes your SEO services different?",
        answer:
          "My approach to SEO is comprehensive and tailored to your specific business goals. I focus on sustainable, white-hat techniques that provide long-term results rather than quick fixes that could lead to penalties. I also provide transparent reporting so you can clearly see the progress and ROI of your SEO investment.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No reputable SEO professional can guarantee specific rankings, as search engines constantly update their algorithms and rankings depend on many factors, including competition. I focus on implementing proven SEO strategies that improve your visibility and drive relevant traffic to your website.",
      },
      {
        question: "Will I need to make changes to my website?",
        answer:
          "Most likely, yes. Effective SEO often requires changes to your website's content, structure, and technical elements. I'll provide specific recommendations and can implement these changes for you or guide your team through the implementation process.",
      },
    ],
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    shortDescription: "Enhance your applications with AI capabilities",
    longDescription:
      "I help businesses integrate AI capabilities into their applications to enhance user experiences, automate processes, and gain valuable insights from data. Leverage the power of AI to stay ahead of the competition.",
    icon: "Cpu",
    iconColor: "#10b981",
    slug: "ai-integration",
    heroImage: "/ai.jpg",
    features: [
      "Chatbot development",
      "AI-powered content generation",
      "Data analysis and insights",
      "Process automation",
      "Recommendation systems",
      "Natural language processing",
      "Computer vision integration",
      "Predictive analytics",
    ],
    plans: [
      {
        id: "basic-ai",
        name: "Basic AI Integration",
        price: "₹25,000",
        description: "Essential AI features for your application",
        features: [
          { title: "AI needs assessment", description: "Identify AI opportunities", included: true },
          { title: "Basic chatbot implementation", description: "Simple conversational AI", included: true },
          { title: "Data preparation", description: "Prepare data for AI processing", included: true },
          { title: "Integration with existing systems", description: "Connect AI to your platform", included: true },
          { title: "1 month of support", description: "Help with AI maintenance", included: true },
          { title: "Advanced AI features", description: "Complex AI capabilities", included: false },
          { title: "Custom AI model development", description: "Tailored AI solutions", included: false },
          { title: "AI performance optimization", description: "Improve AI accuracy and speed", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "advanced-ai",
        name: "Advanced AI Integration",
        price: "₹50,000",
        description: "Comprehensive AI solutions for businesses",
        popular: true,
        features: [
          { title: "Comprehensive AI strategy", description: "Strategic AI implementation", included: true },
          { title: "Advanced chatbot development", description: "Sophisticated conversational AI", included: true },
          { title: "Natural language processing", description: "Text analysis and understanding", included: true },
          { title: "Recommendation system", description: "Personalized user recommendations", included: true },
          { title: "Data analysis and insights", description: "Extract value from your data", included: true },
          { title: "3 months of support", description: "Ongoing AI maintenance", included: true },
          { title: "Custom AI model development", description: "Tailored AI solutions", included: false },
          { title: "Computer vision integration", description: "Image and video analysis", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "enterprise-ai",
        name: "Enterprise AI Solutions",
        price: "₹100,000",
        description: "Advanced AI for complex business needs",
        features: [
          { title: "Enterprise AI strategy", description: "Comprehensive AI planning", included: true },
          { title: "Custom AI model development", description: "Tailored AI solutions", included: true },
          { title: "Advanced NLP capabilities", description: "Sophisticated text processing", included: true },
          { title: "Computer vision integration", description: "Image and video analysis", included: true },
          { title: "Predictive analytics", description: "Forecast future trends", included: true },
          { title: "Process automation", description: "Streamline business processes", included: true },
          { title: "AI performance optimization", description: "Maximize AI effectiveness", included: true },
          { title: "6 months of support", description: "Comprehensive AI maintenance", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "How can AI benefit my business?",
        answer:
          "AI can benefit your business in numerous ways, including automating repetitive tasks, providing personalized user experiences, extracting insights from large datasets, improving decision-making, enhancing customer service with chatbots, and identifying patterns and trends that humans might miss.",
      },
      {
        question: "Do I need a lot of data to implement AI?",
        answer:
          "While having more data generally leads to better AI performance, you don't necessarily need massive amounts of data to start implementing AI. Many AI solutions can work with moderate datasets, and there are techniques to make the most of limited data. I can help you assess your data needs and develop an appropriate AI strategy.",
      },
      {
        question: "How long does it take to implement AI features?",
        answer:
          "The timeline for AI implementation varies depending on the complexity of the features and your existing infrastructure. Basic AI integrations might take 2-4 weeks, while more complex solutions could take 2-6 months. I'll provide a detailed timeline based on your specific requirements.",
      },
      {
        question: "Will AI replace human jobs in my company?",
        answer:
          "AI is typically most effective when it augments human capabilities rather than replacing them entirely. The goal is usually to automate repetitive or time-consuming tasks, allowing your team to focus on more creative, strategic, and high-value activities. I can help you implement AI in a way that enhances your team's productivity and job satisfaction.",
      },
    ],
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Cross-platform mobile applications",
    longDescription:
      "I develop cross-platform mobile applications that work seamlessly on both iOS and Android devices. Reach your mobile audience with high-performance, feature-rich applications that provide an exceptional user experience.",
    icon: "Smartphone",
    iconColor: "#22c55e",
    slug: "mobile-app-development",
    heroImage: "/mobile.jpg",
    features: [
      "React Native development",
      "Flutter development",
      "Native Android development",
      "App store submission and optimization",
      "UI/UX design for mobile",
      "Push notifications",
      "Offline functionality",
      "API integration",
    ],
    plans: [
      {
        id: "basic-app",
        name: "Basic Mobile App",
        price: "₹50,000",
        description: "Simple mobile app with essential features",
        features: [
          { title: "Cross-platform development", description: "Works on iOS and Android", included: true },
          { title: "Basic UI/UX design", description: "Clean, functional interface", included: true },
          { title: "Up to 5 screens", description: "Core app functionality", included: true },
          { title: "API integration", description: "Connect to backend services", included: true },
          { title: "App store submission", description: "Publish to app stores", included: true },
          { title: "Push notifications", description: "Send alerts to users", included: false },
          { title: "Offline functionality", description: "Work without internet", included: false },
          { title: "Advanced features", description: "Complex app capabilities", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "standard-app",
        name: "Standard Mobile App",
        price: "₹100,000",
        description: "Feature-rich app for businesses",
        popular: true,
        features: [
          { title: "Cross-platform development", description: "Works on iOS and Android", included: true },
          { title: "Professional UI/UX design", description: "Polished user interface", included: true },
          { title: "Up to 10 screens", description: "Comprehensive functionality", included: true },
          { title: "Advanced API integration", description: "Complex backend connections", included: true },
          { title: "Push notifications", description: "Send alerts to users", included: true },
          { title: "User authentication", description: "Secure login system", included: true },
          { title: "Basic offline functionality", description: "Limited offline features", included: true },
          { title: "Analytics integration", description: "Track user behavior", included: true },
        ],
        buttonText: "Get Started",
      },
      {
        id: "premium-app",
        name: "Premium Mobile App",
        price: "₹200,000",
        description: "Advanced app with all features",
        features: [
          { title: "Cross-platform development", description: "Works on iOS and Android", included: true },
          { title: "Custom UI/UX design", description: "Unique, branded interface", included: true },
          { title: "Unlimited screens", description: "Complete app functionality", included: true },
          { title: "Complex API integration", description: "Sophisticated backend", included: true },
          { title: "Advanced push notifications", description: "Targeted, scheduled alerts", included: true },
          { title: "Full offline functionality", description: "Complete offline operation", included: true },
          { title: "In-app purchases", description: "Monetization features", included: true },
          { title: "Advanced analytics", description: "Comprehensive user insights", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "What's the difference between native and cross-platform apps?",
        answer:
          "Native apps are built specifically for one platform (iOS or Android) using platform-specific programming languages. Cross-platform apps are built using frameworks like React Native or Flutter, allowing a single codebase to run on multiple platforms. Cross-platform development is typically more cost-effective and faster, while still providing near-native performance for most applications.",
      },
      {
        question: "How long does it take to develop a mobile app?",
        answer:
          "The development timeline depends on the app's complexity. A basic app might take 2-3 months, while more complex apps can take 4-8 months or longer. I'll provide a detailed timeline based on your specific requirements during our initial consultation.",
      },
      {
        question: "Do you handle app store submissions?",
        answer:
          "Yes, I handle the entire process of submitting your app to both the Apple App Store and Google Play Store. This includes preparing all necessary assets, setting up developer accounts (if needed), and ensuring your app meets all store guidelines and requirements.",
      },
      {
        question: "Can you update my existing mobile app?",
        answer:
          "Yes, I can update, improve, or add new features to your existing mobile app. I'll first review your current codebase to assess its quality and structure, then recommend the best approach for implementing the desired changes or enhancements.",
      },
    ],
  },
  {
    id: "database-design",
    title: "Database Design & Management",
    shortDescription: "Efficient data storage and retrieval solutions",
    longDescription:
      "I design and implement efficient database solutions that ensure optimal data storage, retrieval, and management. From relational databases to NoSQL solutions, I help you choose and implement the right database for your needs.",
    icon: "Database",
    iconColor: "#6366f1",
    slug: "database-design",
    heroImage: "/database.jpg",
    features: [
      "Database design and architecture",
      "Data migration and integration",
      "Performance optimization",
      "Database security implementation",
      "Backup and recovery solutions",
      "Scaling strategies",
      "Query optimization",
      "Data modeling",
    ],
    plans: [
      {
        id: "basic-database",
        name: "Basic Database Solution",
        price: "₹20,000",
        description: "Essential database setup for small projects",
        features: [
          { title: "Database needs assessment", description: "Identify requirements", included: true },
          { title: "Database design", description: "Efficient data structure", included: true },
          { title: "Basic implementation", description: "Set up database system", included: true },
          { title: "Data migration", description: "Transfer existing data", included: true },
          { title: "Security setup", description: "Basic security measures", included: true },
          { title: "Performance optimization", description: "Speed improvements", included: false },
          { title: "Scaling strategies", description: "Prepare for growth", included: false },
          { title: "Advanced security", description: "Enhanced protection", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "standard-database",
        name: "Standard Database Solution",
        price: "₹40,000",
        description: "Comprehensive database for businesses",
        popular: true,
        features: [
          { title: "Detailed requirements analysis", description: "In-depth assessment", included: true },
          { title: "Advanced database design", description: "Optimized data structure", included: true },
          { title: "Complete implementation", description: "Full database setup", included: true },
          { title: "Comprehensive data migration", description: "Complete data transfer", included: true },
          { title: "Enhanced security measures", description: "Robust protection", included: true },
          { title: "Performance optimization", description: "Speed and efficiency", included: true },
          { title: "Basic scaling strategy", description: "Growth preparation", included: true },
          { title: "Advanced features", description: "Complex database capabilities", included: false },
        ],
        buttonText: "Get Started",
      },
      {
        id: "premium-database",
        name: "Premium Database Solution",
        price: "₹80,000",
        description: "Advanced database for complex needs",
        features: [
          { title: "Enterprise requirements analysis", description: "Comprehensive assessment", included: true },
          { title: "Enterprise database architecture", description: "Sophisticated design", included: true },
          { title: "Full-scale implementation", description: "Complete setup", included: true },
          { title: "Complex data migration", description: "Advanced data transfer", included: true },
          { title: "Advanced security implementation", description: "Maximum protection", included: true },
          { title: "Comprehensive optimization", description: "Peak performance", included: true },
          { title: "Advanced scaling strategy", description: "Enterprise growth planning", included: true },
          { title: "High availability setup", description: "Minimize downtime", included: true },
        ],
        buttonText: "Get Started",
      },
    ],
    faqs: [
      {
        question: "What types of databases do you work with?",
        answer:
          "I work with a wide range of database technologies, including relational databases (MySQL, PostgreSQL, SQL Server), NoSQL databases (MongoDB, Firebase, DynamoDB), and graph databases (Neo4j). I'll recommend the best database solution based on your specific requirements and use case.",
      },
      {
        question: "Can you migrate data from my existing database?",
        answer:
          "Yes, I can migrate data from your existing database to a new system while ensuring data integrity and minimizing downtime. This includes data cleaning, transformation, and validation to ensure your data is properly structured in the new database.",
      },
      {
        question: "How do you ensure database security?",
        answer:
          "I implement multiple layers of security, including access control, encryption, secure authentication, regular security audits, and protection against common vulnerabilities like SQL injection. I also set up proper backup and recovery procedures to protect against data loss.",
      },
      {
        question: "Can you optimize my existing database?",
        answer:
          "Yes, I can analyze your existing database and identify opportunities for optimization, including query performance, indexing strategies, schema improvements, and hardware recommendations. This can significantly improve your application's speed and responsiveness.",
      },
    ],
  },
]

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug)
}
