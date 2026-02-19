export interface Service {
    id: string;
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    icon: string;
    features: string[];
    benefits: string[];
}

export interface ServiceCategory {
    id: string;
    title: string;
    description?: string;
    services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
    {
        id: 'core-dev',
        title: 'Core Development Services',
        description: 'Building robust, scalable, and high-performance digital foundations for your business.',
        services: [
            {
                id: 'web-dev',
                slug: 'web-development',
                title: 'Web Development',
                description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
                longDescription: 'We build high-performance, scalable, and secure web applications tailored to your business needs. Our team specializes in modern frontend and backend technologies to deliver seamless user experiences.',
                icon: 'Code2',
                features: ['Custom Web App Development', 'Progressive Web Apps (PWA)', 'API Integration', 'Performance Optimization'],
                benefits: ['Faster load times', 'SEO-friendly architecture', 'Scalable solutions', 'Secure and reliable']
            },
            {
                id: 'mobile-dev',
                slug: 'mobile-app-development',
                title: 'Mobile App Development',
                description: 'Native and cross-platform mobile apps for iOS and Android that deliver exceptional user experiences.',
                longDescription: 'Reach your customers on any device with our top-notch mobile application development services. We create native and cross-platform apps that provide a native-like experience.',
                icon: 'Smartphone',
                features: ['iOS & Android App Development', 'Cross-Platform Solutions (Flutter/React Native)', 'UI/UX Design for Mobile', 'App Store Optimization'],
                benefits: ['Wider audience reach', 'Enhanced user engagement', 'Cost-effective development', 'Offline capabilities']
            },
            {
                id: 'ui-ux',
                slug: 'ui-ux-design',
                title: 'UI/UX Design',
                description: 'User-centric design that focuses on intuitive interfaces and engaging user journeys.',
                longDescription: 'Our design philosophy centers on the user. We create intuitive, engaging, and aesthetically pleasing interfaces that drive user satisfaction and business growth.',
                icon: 'Palette',
                features: ['User Research & Personas', 'Wireframing & Prototyping', 'Visual Design', 'Usability Testing'],
                benefits: ['Improved user retention', 'Higher conversion rates', 'Brand consistency', 'Intuitive navigation']
            },
            {
                id: 'ecommerce',
                slug: 'ecommerce-platforms',
                title: 'E-commerce Platforms',
                description: 'Secure and scalable online stores tailored to drive sales and maximize revenue.',
                longDescription: 'Launch your online store with our robust e-commerce solutions. We build secure, scalable, and conversion-optimized platforms to help you sell more online.',
                icon: 'ShoppingCart',
                features: ['Custom Storefront Development', 'Payment Gateway Integration', 'Inventory Management', 'SEO & Marketing Tools'],
                benefits: ['Increased sales', 'Streamlined operations', 'Secure transactions', 'global reach']
            }
        ]
    },
    {
        id: 'advanced-tech',
        title: 'Advanced Technology Solutions',
        description: 'Leveraging cutting-edge technologies to drive innovation and efficiency.',
        services: [
            {
                id: 'cloud',
                slug: 'cloud-solutions',
                title: 'Cloud Solutions',
                description: 'Scalable cloud infrastructure setup, migration, and optimization on AWS and Azure.',
                longDescription: 'Accelerate your digital transformation with our comprehensive cloud services. We help you migrate, manage, and optimize your infrastructure on leading cloud platforms.',
                icon: 'Cloud',
                features: ['Cloud Migration Strategy', 'Infrastructure as Code', 'DevOps & CI/CD', 'Cloud Security & Compliance'],
                benefits: ['Scalability on demand', 'Cost optimization', 'Enhanced security', 'High availability']
            },
            {
                id: 'ai-services',
                slug: 'ai-services',
                title: 'AI Services',
                description: 'Intelligent AI and Machine Learning solutions to automate processes and gain insights.',
                longDescription: 'Harness the power of Artificial Intelligence to automate workflows, analyze data, and get predictive insights. We build smart solutions that give you a competitive edge.',
                icon: 'Cpu',
                features: ['Machine Learning Models', 'Natural Language Processing (NLP)', 'Computer Vision', 'Predictive Analytics'],
                benefits: ['Data-driven decisions', 'Process automation', 'Personalized experiences', 'Competitive advantage']
            }
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital Marketing Services',
        description: 'Strategic marketing solutions to increase visibility, traffic, and conversions.',
        services: [
            {
                id: 'seo',
                slug: 'seo',
                title: 'Search Engine Optimization (SEO)',
                description: 'Data-driven SEO strategies to improve search rankings and drive organic traffic.',
                longDescription: 'Improve your visibility on search engines and attract high-quality organic traffic. Our SEO experts use proven strategies to rank your website higher for relevant keywords.',
                icon: 'Search',
                features: ['On-Page & Off-Page SEO', 'Keyword Research', 'Technical SEO Audit', 'Content Marketing Strategy'],
                benefits: ['Higher search rankings', 'Increased organic traffic', 'Better brand visibility', 'Long-term ROI']
            },
            {
                id: 'smo',
                slug: 'smo',
                title: 'Social Media Optimization (SMO)',
                description: 'Building brand presence and engagement across key social media platforms.',
                longDescription: 'Engage with your audience on social media platforms where they spend their time. We help you build a strong brand presence and community on Facebook, Instagram, LinkedIn, and more.',
                icon: 'Share2',
                features: ['Social Media Strategy', 'Content Creation & Curation', 'Community Management', 'Paid Social Advertising'],
                benefits: ['Brand awareness', 'Customer engagement', 'Lead generation', 'Community building']
            },
            {
                id: 'ppc',
                slug: 'ppc',
                title: 'PPC – Google Ads',
                description: 'Targeted pay-per-click campaigns that deliver immediate results and high ROI.',
                longDescription: 'Get immediate results with targeted PPC campaigns. We manage your Google Ads and social media ads to ensure maximum ROI and lead generation.',
                icon: 'Megaphone',
                features: ['Keyword Bidding Strategy', 'Ad Copywriting', 'Landing Page Optimization', 'Performance Tracking & Reporting'],
                benefits: ['Immediate traffic', 'Measurable results', 'Targeted reach', 'High conversion rates']
            }
        ]
    }
];
