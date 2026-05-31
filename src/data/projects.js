export const projects = [
  {
    title: "AI SQL Query Generator",
    description: "AI SQL Query Generator is a full-stack SaaS platform that generates, optimizes, validates, formats, explains SQL queries, and creates database schemas using Gemini AI with saved schema context. It includes protected user and admin workspaces, subscription management, advanced analytics, billing workflows, and a complete operational dashboard.",
    highlights: [
      "Built Gemini AI tools for SQL generation, optimization, validation, formatting, explanation, and database schema creation with saved schema context.",
      "Implemented Clerk authentication, protected user/admin routing, workspace switching, account restrictions, access appeal flow, and organization-based Team workspaces.",
      "Created Free, Professional, and Team subscriptions with feature gating, usage limits, Razorpay checkout, payment verification, invoices, downgrade flow, and signed webhooks.",
      "Developed a user dashboard with schema management, searchable query history, copy/export actions, pins, favorites, tags, billing, invoices, support, FAQ, feedback, and notifications.",
      "Added analytics with Recharts and custom DSA utilities for mode usage, top referenced tables, time saved, SQL quality score, workflow metrics, and recent activity insights.",
      "Built an admin console for moderation, plan updates, suspension, access approvals, feedback triage, notifications, security-event review, audit logs, OpenAPI docs, tests, Docker, and Render deployment."
    ],
    stack: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "Clerk", "Gemini API", "Razorpay", "Recharts", "Docker", "Render", "OpenAPI"],
    image: "/projects/Project-1.jpg.png",
    live: "https://ai-sql-query-generator-fp.onrender.com/",
    github: "https://github.com/utsav1223/AI_SQL_Query_Generator",
    detail: "Production-style AI SQL SaaS with schema context, Clerk auth, Team workspaces, Razorpay subscriptions, analytics, admin controls, and deployment-ready backend tooling."
  },
  {
    title: "Fair Trade Agri Portal",
    description: "A full-fledged FullStack web application built with PHP, MySQL, and Tailwind CSS. It connects farmers and buyers for transparent agri-trade with features like order management, location-based delivery, cart system, and responsive dashboards.",
    highlights: [
      "Connects farmers and buyers through a transparent agri-trade workflow.",
      "Supports cart, order management, and location-based delivery features.",
      "Built with PHP, MySQL, Tailwind CSS, and responsive dashboards."
    ],
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "Tailwind CSS"],
    image: "/projects/Project2.jpg",
    live: "https://agriportal.great-site.net/",
    github: "https://github.com/utsav1223/Fair-Trade-Agri-Portal-For-Farmers-And-Buyers",
    detail: "Full-stack agri-trade portal connecting farmers and buyers through clear workflows."
  }
];
