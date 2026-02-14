module.exports = {
    ExperienceData: [
        {
            company: 'Tesote',
            role: 'Software Engineer',
            period: 'Jun 2025 - Feb 2026',
            description: 'Achieved 100% performance improvement on report generation through ActiveRecord refactoring, Redis caching, and in-memory retrieval. Built real-time reactive UIs with Stimulus and Turbo. Automated web scraping for bank data extraction and contributed to transaction processing pipeline.',
            highlights: [
                '100% performance improvement on report generation',
                'Real-time reactive UIs with Stimulus & Turbo',
                'Automated web scraping for bank data extraction',
                'Transaction processing pipeline (ingestion, transformation, AI categorization)'
            ],
            techStack: ['Rails 7', 'Ruby 3.4', 'PostgreSQL', 'Sidekiq Pro', 'Redis', 'Stimulus', 'Turbo', 'Selenium', 'Ferrum']
        },
        {
            company: 'Gathersight',
            role: 'Senior Software Engineer',
            period: 'Nov 2021 - Jul 2024',
            description: 'Led backend architecture for a scientific knowledge platform. Built large-scale data ingestion from OpenAlex (millions of records), advanced search with PostgreSQL similarity algorithms, and AI-assisted features with OpenAI API.',
            highlights: [
                '45% improvement in application response time',
                'Large-scale data pipeline — millions of scientific articles',
                'Advanced search with PostgreSQL pg_trgm similarity',
                '90%+ test coverage with RSpec, Capybara & Cypress',
                '40% reduction in production bugs QoQ',
                '99.5%+ uptime with AWS CloudWatch'
            ],
            techStack: ['Rails API', 'React', 'TypeScript', 'PostgreSQL', 'AWS', 'OpenAI API', 'Sidekiq', 'Redis']
        },
        {
            company: 'Tranquilamente',
            role: 'Lead Full-Stack Developer',
            period: 'Sep 2017 - Dec 2022',
            description: 'Built and scaled a production telemedicine platform serving 12,000+ therapy sessions with 50+ psychologists. Engineered a custom video consultation app with React/TypeScript and Twilio, dual payment processing, and comprehensive clinical history management.',
            highlights: [
                '12,000+ completed therapy sessions',
                'Custom video app — 50+ React components, 24 custom hooks',
                'Dual payment processing (Epayco + PayPal) with zero incidents',
                '60% organic traffic increase through SEO optimization',
                '4.9/5 user satisfaction rating',
                'CI/CD pipeline with parallel tests across 8 containers'
            ],
            techStack: ['Rails 5-7.1', 'React', 'TypeScript', 'Twilio Video', 'PostgreSQL', 'Sidekiq', 'CircleCI', 'Heroku']
        },
        {
            company: 'ConvertLoop',
            role: 'Full-Stack Developer',
            period: 'Dec 2016 - Sep 2017',
            description: 'Feature development and automated testing for a user engagement SaaS platform helping software companies improve customer retention.',
            highlights: [
                'Feature development for user engagement platform',
                'Automated testing with RSpec & Capybara',
                'Full-stack work with Rails, PostgreSQL & Vue.js'
            ],
            techStack: ['Rails', 'PostgreSQL', 'Vue.js', 'CoffeeScript', 'RSpec', 'Capybara']
        }
    ],

    SkillsData: [
        {
            category: 'Backend',
            icon: 'fa fa-server',
            items: ['Ruby on Rails', 'Ruby', 'Node.js', 'REST APIs', 'GraphQL', 'Sidekiq', 'ActionCable', 'ActiveRecord']
        },
        {
            category: 'Frontend',
            icon: 'fa fa-code',
            items: ['React', 'TypeScript', 'JavaScript', 'Hotwire/Turbo', 'Stimulus', 'Vue.js', 'HTML5/CSS3', 'SCSS']
        },
        {
            category: 'Databases',
            icon: 'fa fa-database',
            items: ['PostgreSQL', 'Redis', 'MongoDB', 'Query Optimization', 'Schema Design', 'pg_trgm Search']
        },
        {
            category: 'Cloud & DevOps',
            icon: 'fa fa-cloud',
            items: ['AWS (EC2, S3, Lambda)', 'Docker', 'Heroku', 'CI/CD', 'Jenkins', 'Linux', 'CircleCI', 'GitHub Actions', 'Sentry', 'Papertrail']
        },
        {
            category: 'Testing',
            icon: 'fa fa-check-circle',
            items: ['RSpec', 'Capybara', 'Cypress', 'Jest', 'Selenium', 'Factory Bot', 'TDD/BDD', '90%+ Coverage']
        },
        {
            category: 'Integrations',
            icon: 'fa fa-plug',
            items: ['Twilio Video', 'OpenAI API', 'Google Calendar', 'Payment Gateways', 'OAuth 2.0', 'Webhooks']
        }
    ],

    CounterData: [
        {
            count: 8,
            suffix: '+',
            desc: 'Years Experience'
        },
        {
            count: 45,
            suffix: '%',
            desc: 'Faster Response Times'
        },
        {
            count: 90,
            suffix: '%+',
            desc: 'Test Coverage'
        },
        {
            count: 99.5,
            suffix: '%+',
            desc: 'Uptime Maintained'
        }
    ],

    ServiceData: [
        {
            icon: 'fa fa-laptop-code',
            name: 'Full-Stack Web Development',
            desc: 'End-to-end web applications with Ruby on Rails and React. From database design to responsive UIs, delivering production-ready platforms across fintech, healthtech, and SaaS.'
        },
        {
            icon: 'fa fa-cogs',
            name: 'API Architecture & Integrations',
            desc: 'RESTful and GraphQL APIs with 8+ third-party integrations. Payment gateways, OAuth, real-time webhooks, and large-scale data pipelines processing millions of records.'
        },
        {
            icon: 'fa fa-video',
            name: 'Real-Time & Video Systems',
            desc: 'Custom video consultation platforms with Twilio, WebSocket real-time features with ActionCable, and reactive UIs with Hotwire. Built a 50+ component video app serving 12K+ sessions.'
        },
        {
            icon: 'fa fa-tachometer-alt',
            name: 'Performance & DevOps',
            desc: '100% performance improvements through query optimization and caching. Docker containerization, CI/CD pipelines with parallel testing, and AWS infrastructure with 99.5%+ uptime.'
        }
    ],

    DigitalGrowthData: {
        title: 'Beyond Code',
        subtitle: 'Digital Growth & Marketing',
        intro: 'Most developers can\'t do marketing. Most marketers can\'t code. I do both — applying technical SEO, paid search, and automation to drive measurable business results.',
        capabilities: [
            { name: 'Technical SEO', desc: 'JSON-LD schema, Core Web Vitals, semantic HTML, AI search optimization' },
            { name: 'SEM / Google Ads', desc: 'Campaign management, conversion tracking, keyword-level ROI analysis' },
            { name: 'Email Automation', desc: '22 mailer classes, nurture sequences, segmented re-engagement campaigns' },
            { name: 'Analytics', desc: 'GA4, Ahoy, Matomo, Blazer dashboards, HIPAA-aware tracking' },
            { name: 'Workflow Automation', desc: 'N8N workflows for reminders, content automation, and marketing orchestration' },
            { name: 'CRMs & Funnels', desc: 'CRM integration, customer lifecycle management, quiz-driven lead generation, and conversion funnel implementation' }
        ],
        metrics: [
            { value: '70%', label: 'Gross ROI on Google Ads ($9.9K spend → $16.8K revenue)' },
            { value: '60%', label: 'Organic traffic increase through SEO optimization' },
            { value: '143K', label: 'Search impressions across 12 months' }
        ]
    },

    WorkingWithMeData: [
        {
            icon: 'fa fa-clock-o',
            title: 'US Eastern Timezone',
            desc: 'Same hours as New York, Miami, Atlanta. Flexible for West Coast overlap.'
        },
        {
            icon: 'fa fa-dollar',
            title: 'USD Billing',
            desc: 'Invoice in USD via Wise or direct bank transfer. W-8BEN on file.'
        },
        {
            icon: 'fa fa-file-text-o',
            title: 'Contractor Ready',
            desc: 'Independent contractor or via EOR (Deel / Remote). Fast onboarding.'
        },
        {
            icon: 'fa fa-wifi',
            title: 'Remote-First Setup',
            desc: '300 Mbps fiber + mobile backup. 6+ years on distributed US and European teams.'
        },
        {
            icon: 'fa fa-comments-o',
            title: 'Async & Sync',
            desc: 'Daily standups, Slack, code reviews, sprint planning. Fluent English (C1/C2).'
        },
        {
            icon: 'fa fa-handshake-o',
            title: 'Agile Workflow',
            desc: 'Full Scrum ceremonies, pair programming, GitHub PRs, Linear/Jira.'
        }
    ],

    PersonalInfo: {
        name: 'Jefferson Bernal Cardona',
        title: 'Senior Ruby on Rails Developer',
        email: 'jeffe.bernal@gmail.com',
        phone: '+57 314 811 2185',
        location: 'Medellin, Colombia',
        timezone: 'EST / UTC-5',
        linkedin: 'https://linkedin.com/in/jeffersonbernal',
        github: 'https://github.com/jeferbc',
        bio: 'Senior Full-Stack Developer with 8+ years building production web applications using Ruby on Rails, React, and TypeScript. Proven track record across fintech, healthtech, edtech, and SaaS — from multi-tenant financial platforms processing bank transactions to a telemedicine platform serving 12,000+ therapy sessions.',
        availability: 'Available for remote work - US Eastern timezone'
    }
}
