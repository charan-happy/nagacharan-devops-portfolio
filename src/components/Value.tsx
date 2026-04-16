"use client";

export function Value() {
  const values = [
    {
      title: "Infrastructure as Code",
      description: "I automate infrastructure provisioning using Terraform and Pulumi, reducing manual errors and enabling consistent deployments across environments.",
      icon: "🏗️",
      metrics: "70% faster provisioning"
    },
    {
      title: "CI/CD Pipeline Expertise",
      description: "I design and implement efficient CI/CD pipelines that reduce deployment time from hours to minutes, with automated testing and rollback capabilities.",
      icon: "⚡",
      metrics: "10x faster deployments"
    },
    {
      title: "Kubernetes & Cloud Native",
      description: "I build and manage scalable Kubernetes clusters on AWS EKS, implementing best practices for high availability and disaster recovery.",
      icon: "☸️",
      metrics: "99.9% uptime achieved"
    },
    {
      title: "Observability & Monitoring",
      description: "I implement comprehensive monitoring solutions using Prometheus, Grafana, and ELK stack for proactive issue detection and fast incident response.",
      icon: "🔍",
      metrics: "50% faster MTTR"
    },
    {
      title: "Cost Optimization",
      description: "I analyze cloud resources and implement cost-saving strategies including right-sizing, reserved instances, and spot instance usage.",
      icon: "💰",
      metrics: "40% AWS cost reduction"
    },
    {
      title: "Security & Compliance",
      description: "I implement security best practices including RBAC, secrets management, network policies, and regular security audits.",
      icon: "🛡️",
      metrics: "Zero security breaches"
    }
  ];

  return (
    <section id="value" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What I <span className="text-emerald-400">Bring to Your Team</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Proven results from building and scaling production infrastructure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-gradient-to-br from-slate-800/50 to-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {value.description}
              </p>
              <div className="inline-block bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium">
                {value.metrics}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">4+</div>
              <div className="text-slate-400 text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">99.9%</div>
              <div className="text-slate-400 text-sm">Uptime Achieved</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">50+</div>
              <div className="text-slate-400 text-sm">Engineers Supported</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-2">1000+</div>
              <div className="text-slate-400 text-sm">Deployments/Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
