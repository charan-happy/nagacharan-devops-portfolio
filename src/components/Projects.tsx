"use client";

export function Projects() {
  const projects = [
    {
      name: "HealOps",
      description: "Internal DevOps platform for deployment, monitoring & infrastructure management",
      tech: ["Kubernetes", "AWS EKS", "Next.js", "ArgoCD", "Prometheus", "Grafana"],
      stats: { value: "70%", label: "Faster Deployments" },
      link: "https://healops.online"
    },
    {
      name: "InfraStream",
      description: "Real-time infrastructure monitoring with streaming data visualization",
      tech: ["Next.js", "WebSockets", "Kafka", "PostgreSQL", "Valkey"],
      stats: { value: "<100ms", label: "Real-time" },
      link: "https://infrastream.healops.online"
    },
    {
      name: "JobFlow",
      description: "Automated job scheduling & workflow orchestration platform",
      tech: ["NestJS", "BullMQ", "Redis", "PostgreSQL", "Docker"],
      stats: { value: "1K+", label: "Jobs/Day" },
      link: "https://jobflow.healops.online"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Production applications I've built and maintain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a key={project.name} href={project.link} target="_blank" rel="noopener noreferrer"
               className="group block bg-slate-800/50 border border-slate-700 rounded-2xl overflow-hidden hover:border-emerald-500/50 transition-all hover:-translate-y-1">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <svg className="w-5 h-5 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-slate-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 bg-slate-700/50 text-slate-400 rounded text-xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-t border-slate-700 p-4 bg-slate-800">
                <span className="text-2xl font-bold text-emerald-400">{project.stats.value}</span>
                <span className="text-slate-500 text-sm ml-2">{project.stats.label}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
