"use client";

export function Skills() {
  const skillCategories = [
    {
      title: "Containerization & Orchestration",
      skills: ["Kubernetes", "Docker", "Helm", "Kustomize", "EKS", "Kubespray"],
      icon: "☸️",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Azure", "GCP", "Terraform", "Pulumi", "CloudFormation"],
      icon: "☁️",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "CI/CD & DevOps",
      skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD", "Tekton"],
      icon: "🔄",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Observability",
      skills: ["Prometheus", "Grafana", "ELK Stack", "Jaeger", "Datadog", "Sentry"],
      icon: "📊",
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Infrastructure & Networking",
      skills: ["Nginx", "Load Balancing", "VPN", "DNS", "CDN", "VPC"],
      icon: "🌐",
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Programming & Scripting",
      skills: ["Python", "Go", "Bash", "JavaScript", "YAML", "Groovy"],
      icon: "💻",
      color: "from-amber-500 to-orange-500"
    }
  ];

  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      year: "2025",
      badge: "🏆"
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining cloud-native applications at scale
          </p>
        </div>

        {/* Certification Badge */}
        <div className="flex justify-center mb-12">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/30 rounded-2xl p-6 flex items-center gap-4"
            >
              <span className="text-4xl">{cert.badge}</span>
              <div>
                <h3 className="text-lg font-bold text-white">{cert.name}</h3>
                <p className="text-amber-400 text-sm">{cert.issuer} • {cert.year}</p>
              </div>
              <a
                href="https://www.credly.com/badges/70a41aa8-c939-4a5b-95a7-4bc65fe40f99/public_url"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-slate-400 hover:text-white text-sm underline"
              >
                Verify →
              </a>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-slate-700/50 text-slate-300 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-slate-600/50 transition-colors cursor-default"
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
