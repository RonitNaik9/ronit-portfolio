export const portfolioData = {
  profile: {
    name: "Ronit Naik",
    title: "Software & Machine Learning Engineer",
    subtitle: "Bridging the gap between production-grade backend engineering, MLOps, and advanced data science.",
    location: "Boston, MA",
    email: "ronitnaik9@gmail.com",
    github: "https://github.com/RonitNaik9",
    linkedin: "https://linkedin.com", // Swap with your actual link
    citizenship: "US Citizen",
    resumeUrl: "#" // Link to your hosted resume PDF
  },
  education: [
    {
      institution: "Northeastern University",
      degree: "Master's in Computer Science (Specialization: Artificial Intelligence)",
      timeline: "Sep 2024 - Apr 2026",
      location: "Boston, MA",
      gpa: "3.84",
      courses: ["Algorithms", "Programming Design Patterns", "Cloud Computing", "LLMs with Graph DB", "Computer Vision"]
    },
    {
      institution: "Vellore Institute of Technology",
      degree: "Bachelor's of Technology in Computer Science with AI and ML",
      timeline: "Sept 2020 - May 2024",
      location: "India",
      gpa: "8.88 / 10",
      courses: ["Data Structures & Algorithms", "Web Programming", "Design Patterns in Java", "Operating Systems", "Python"]
    }
  ],
  skills: {
    languages: ["Python", "Java", "SQL", "HTML5", "CSS", "JavaScript", "C", "C++", "Cypher"],
    frameworks: ["ReactJS", "React-Native", "Tensorflow", "PyTorch", "Spring Boot", "FastAPI", "Express.js", "Node.js", "LangGraph", "LangChain"],
    tools: ["AWS", "Terraform", "Postman", "PowerBI", "Git", "Neo4j", "Azure", "Docker", "Kafka", "PostgreSQL", "MLflow", "Airflow", "Jira"]
  },
  experience: [
    {
      company: "AstraZeneca",
      role: "Data Science and Data Management Co-op",
      timeline: "Jun 2025 - Dec 2025",
      location: "Wilmington, DE",
      bullets: [
        "Reduced duplicate support queries by 40% by engineering an automated FAQ system using Gemini-2.5-Flash and Sentence-Transformers, utilizing DBSCAN clustering and semantic similarity matching.",
        "Uncovered 12 critical data inconsistencies in Customer Engagement Data Products by building a production-ready RAG pipeline with Airflow, Databricks Genie and AWS Athena to translate natural language queries to SQL.",
        "Enhanced downstream analytics accuracy by developing an LLM-powered address-matching pipeline to standardize, clean, and deduplicate complex Healthcare Professional (HCP) and Healthcare Account (HCA) records.",
        "Led exploratory data analysis (EDA) on large-scale customer engagement datasets using AWS Athena and Python, identifying key behavior patterns to perform executive stakeholder reporting and pipeline architecture."
      ]
    },
    {
      company: "Northeastern University",
      role: "Graduate Teaching Assistant",
      timeline: "Sep 2024 - Jun 2025",
      location: "Boston, MA",
      bullets: [
        "Conducted weekly office hours, guided 400+ students to build better projects, and graded assignments.",
        "Delivered detailed feedback, significantly boosting the understanding of advanced OOPS and AI concepts."
      ]
    },
    {
      company: "Quest Global",
      role: "Machine Learning Software Engineer Intern",
      timeline: "Jan 2024 - May 2024",
      location: "India",
      bullets: [
        "Achieved 95% precision in production for anomaly detection models by deploying them on AWS SageMaker and architecting a serverless inference pipeline using AWS API Gateway and AWS Lambda.",
        "Streamlined model development and deployment cycles by engineering robust ETL pipelines and leveraging MLflow for end-to-end model versioning and experiment tracking.",
        "Accelerated data visualization and model integration by enhancing a full-stack enterprise web application utilizing Spring Boot, ReactJS, and PostgreSQL."
      ]
    }
  ],
  projects: [
    {
      title: "AdaptTutor: Emotion-Aware Coding System",
      tech: ["React.js", "FastAPI", "TailwindCSS", "Google Gemini 2.5", "PostgreSQL", "Docker", "WebSockets"],
      description: "An adaptive coding tutoring ecosystem that monitors student coding behavior, infers cognitive-emotional state via WebSockets, and dynamically serves custom pedagogical code hints via LLMs.",
      highlights: [
        "Integrated Monaco Code Editor engine with live sandbox proxy payloads running code via Judge0 HTTP endpoints.",
        "Utilized google-genai SDK for real-time WebSocket state inference prompts."
      ],
      github: "https://github.com/RonitNaik9"
    },
    {
      title: "Multi-Agent Customer Support Ecosystem",
      tech: ["LangGraph", "ChromaDB", "Python", "LLMs"],
      description: "An event-driven multi-agent system designed to isolate support concerns, orchestrating state management and dynamic agent switching for enterprise-grade prompt execution.",
      highlights: [
        "Leveraged LangGraph for complex execution paths and deterministic state recovery graphs.",
        "Integrated ChromaDB vector store for highly precise context retrieval and low latency query embedding matches."
      ],
      github: "https://github.com/RonitNaik9/Multi-Agent-customer-support-system-with-LangGraph-and-ChromaDB"
    },
    {
      title: "IncidentStream: Real-Time Monitoring Dashboard",
      tech: ["Terraform", "AWS Lambda", "React.js", "Node.js", "DynamoDB", "SQS/SNS"],
      description: "A production-ready incident alert dashboard pushing severity-scored payloads to active clients in under 1 second.",
      highlights: [
        "Provisioned 36 separate AWS resources cleanly isolated across 6 repeatable Terraform modules utilizing least-privilege IAM control rules.",
        "Engineered real-time React dashboard layout built with custom WebSocket streams, manual metric overrides, and MTTA log tracking charts."
      ],
      github: "https://github.com/RonitNaik9"
    },
    {
      title: "ResearchConnect: Graph Recommender App",
      tech: ["Neo4j", "Streamlit", "Python", "OpenAlex API", "NLP"],
      description: "A professional matchmaker engine that models scholarly publications, affiliations, and scientific trends inside an intricate Knowledge Graph to recommend optimal research partners.",
      highlights: [
        "Constructed custom pipeline merging Jaccard similarity, publication recency, and natural language statements for a blended scoring matrix.",
        "Engineered parallelized data pipelines running batch Cypher insertions directly into a hosted Neo4j database instances."
      ],
      github: "https://github.com/RonitNaik9"
    },
    {
      title: "Intelligent Job Application Tracker",
      tech: ["FastAPI", "Apache Kafka", "Redis", "PostgreSQL", "Docker"],
      description: "An event-driven background parsing architecture scraping personal job history data with live Chrome extensions.",
      highlights: [
        "Automated continuous ingestion tracking over Kafka brokers, evaluating across 50+ background skill layers natively.",
        "Implemented rigorous multi-tier caching architectures decreasing baseline API latency by 60% and infrastructure costs by 70%."
      ],
      github: "https://github.com/RonitNaik9"
    },
    {
      title: "Crypto Prediction with Sentiment NLP",
      tech: ["TensorFlow", "Keras", "Apache Airflow", "Docker", "MLflow", "ARIMA"],
      description: "A multimodal time-series pipeline tracking real-time Twitter social sentiment combined alongside historical crypto price tickers.",
      highlights: [
        "Orchestrated distributed task ingestion utilizing Apache Airflow dags to automatically construct text features.",
        "Tracked hyperparameters, versioned models, and tracked metrics with full MLflow lifecycle tracking containers."
      ],
      github: "https://github.com/RonitNaik9"
    }
  ]
};