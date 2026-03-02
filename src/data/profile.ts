// Sourced from about me.txt – portfolio content

export const profile = {
  name: "Devansh Purwar",
  tagline: "Software Developer",
  email: "devanshpurwar3@gmail.com",
  phone: "+91 7318401857",
  linkedin: "https://linkedin.com/in/devansh-purwar",
  github: "https://github.com/devansh-purwar",
  cvUrl: "/devansh_cv.pdf",
};

export const education = {
  school: "Indian Institute of Information Technology, Dharwad",
  degree: "Bachelor of Technology in Data Science and Artificial Intelligence",
  period: "2020 - 2024",
  cgpa: "9.1/10",
};

export const aboutBlurb = `I'm a Software Engineer with 2+ years of experience, currently at CommerceIQ. I specialize in building scalable microservices, automation, and cloud infrastructure. I enjoy solving complex problems and have a strong foundation in algorithms and system design.`;

export const experiences = [
  {
    company: "CommerceIQ",
    role: "Software Engineer",
    location: "Bengaluru",
    period: "Sept 2024 - Present",
    points: [
      "Designed and developed a Java (Spring Boot) based service to simulate third-party retailer APIs, leveraging MongoDB for dynamic, per-endpoint configuration, enabling faster testing and reducing dependency on external systems.",
      "Built an automated QA orchestration platform using AWS Step Functions, AWS Lambda, and Amazon SQS to execute complete test suites in a single workflow, streamlining feature releases and generating consolidated test reports.",
      "Led segregation of AWS infrastructure and microservices across Beta/QA and Production accounts using multi-account, IAM boundary policies, and network isolation (VPC, security groups), improving environment isolation and enforcing least-privilege deployment pipelines.",
      "Designed and developed a post-deployment automation service in Spring Boot leveraging Kubernetes health probes, pod lifecycle monitoring, and CI/CD pipeline hooks to execute sanity checks, detect deployment anomalies, and automatically trigger rollbacks.",
    ],
  },
  {
    company: "Adbrew",
    role: "Software Engineer",
    location: "Delhi",
    period: "June 2023 - Aug 2024",
    points: [
      "Optimized operational workflows by transitioning from batch-based daily syncs to an event-driven architecture using Amazon Marketing Stream, significantly improving system responsiveness while reducing operational costs.",
      "Led the migration from deprecated Amazon Ads APIs to the latest versions in a Django codebase, ensuring no regression, backward compatibility, and uninterrupted data pipelines.",
      "Designed and implemented a high-throughput report processing mechanism to efficiently handle large daily report files by segmenting them into smaller chunks, enabling parallel processing and caching for faster downstream access.",
      "Actively participated in on-call rotations, diagnosing and resolving production incidents requiring immediate action, minimizing downtime and ensuring system stability.",
    ],
  },
];

export const projects = [
  {
    title: "Itinera AI",
    period: "Dec 2025",
    github: "https://github.com/devansh-purwar",
    description: "Architected a full-stack travel agent using React and FastAPI, orchestrating multi-model inference (Gemini, Perplexity) with strict schema enforcement to deliver reliable itineraries via a streaming, voice-enabled interface. Engineered a high-concurrency system using Python asyncio to parallelize image generation and external search.",
  },
  {
    title: "WhoOwesWhat",
    period: "Dec 2025",
    github: "https://github.com/devansh-purwar",
    description: "Architected and developed a full-stack expense-splitting application using Spring Boot and React, implementing the Strategy Pattern for 4 split calculation methods (Equal, Exact, Percentage, Shares) and an event-sourcing approach for idempotent balance calculations. Built RESTful APIs with Spring Data JPA managing 7 entities across User, Group, and Expense domains.",
  },
];

export const skills = {
  languages: ["Java", "Python", "SQL"],
  cloud: ["AWS", "Databricks", "MongoDB", "MySQL", "Docker"],
  frameworks: ["Spring Boot", "Maven", "CI/CD Pipelines", "Git", "New Relic", "Jenkins", "Redis"],
};

export const achievements = [
  { title: "Meta Hacker Cup", detail: "Global Rank 3028" },
  { title: "IITB–ISRO–AICTE Mapathon", detail: "Winner of the FOSSE project at IIT Bombay" },
  { title: "Algorithm practice", detail: "Solved 1000+ questions on GeeksforGeeks and LeetCode" },
  { title: "Google Crowdsource", detail: "Led a community webinar resulting in 2.5K+ meaningful contributions" },
  { title: "NSS Cadet", detail: "Educational mentoring, environmental sustainability, and social cleanliness drives" },
];
