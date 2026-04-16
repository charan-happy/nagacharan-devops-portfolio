"use client";

export function Projects() {
  const projects = [
    {
      name: "HealOps",
      description: "A comprehensive internal DevOps platform built to streamline deployment, monitoring, and infrastructure management for engineering teams at GeekyAnts.",
      tech: ["Kubernetes", "AWS EKS", "Next.js", "PostgreSQL", "Redis", "ArgoCD", "Prometheus", "Grafana"],
      link: "https://healops.online",
      stats: [
        { label: "Deployment Time", value: "70% Faster" },
        { label: "Uptime", value: "99.9%" },
        { label: "Team Size", value: "50+ Engineers" }
      ]
    },
    {
      name: "InfraStream",
      description: "Real-time infrastructure monitoring dashboard with streaming data visualization for cloud resources and application metrics.",
      tech: ["Next.js", "WebSockets", "Aiven Kafka", "PostgreSQL", "Valkey"],
      link: "https://infrastream.healops.online",
      stats: [
        { label: "Real-time Data", value: "<100ms" },
        { label: "Events/sec", value: "10K+" }
      ]
    },
    {
      name: "JobFlow",
      description: "Automated job scheduling and workflow orchestration platform for managing recurring tasks and background jobs.",
      tech: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Docker"],
      link: "https://jobflow.healops.online",
      stats: [
        { label: "Jobs/day", value: "1000+" },
        { label: "Success Rate", value: "99.99%" }
      ]
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Production-grade applications I've built and maintained
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-[1.02] flex flex-col group"
            >
              <div className="flex-1">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-700">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-lg font-bold text-emerald-400">{stat.value}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-slate-700 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-colors"
              >
                View Live →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
