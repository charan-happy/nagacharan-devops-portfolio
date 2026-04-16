"use client";

export function Skills() {
  const skillGroups = [
    { category: "Cloud & Infrastructure", skills: ["AWS", "Azure", "GCP", "Terraform", "Kubernetes", "Docker"] },
    { category: "CI/CD & Automation", skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Ansible"] },
    { category: "Observability", skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"] },
    { category: "Programming", skills: ["Python", "Go", "Bash", "JavaScript", "YAML"] },
  ];

  return (
    <section id="skills" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies I work with to build production-grade systems
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <a href="https://www.credly.com/badges/70a41aa8-c939-4a5b-95a7-4bc65fe40f99/public_url" target="_blank" rel="noopener noreferrer" 
             className="group flex items-center gap-4 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl px-6 py-4 hover:scale-105 transition-transform">
            <span className="text-4xl">🏆</span>
            <div className="text-left">
              <div className="text-white font-bold">Certified Kubernetes Administrator</div>
              <div className="text-amber-400 text-sm">The Linux Foundation • 2025</div>
            </div>
            <svg className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div key={group.category} className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all">
              <h3 className="text-lg font-semibold text-white mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
