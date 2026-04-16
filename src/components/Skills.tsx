export function Skills() {
  const skillCategories = [
    {
      title: "Containerization & Orchestration",
      skills: ["Kubernetes", "Docker", "Helm", "Kustomize"],
      icon: "☸️"
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "Terraform", "Pulumi"],
      icon: "☁️"
    },
    {
      title: "CI/CD & Automation",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Tekton"],
      icon: "🔄"
    },
    {
      title: "Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Datadog"],
      icon: "📊"
    },
    {
      title: "Programming",
      skills: ["Python", "Go", "Bash", "JavaScript", "YAML"],
      icon: "💻"
    },
    {
      title: "DevOps Tools",
      skills: ["Ansible", "Nginx", "Linux", "Git", "PM2"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Technical <span className="text-emerald-400">Skills</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive toolkit for building, deploying, and maintaining cloud-native applications
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700/50 text-slate-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
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
