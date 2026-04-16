export function Experience() {
  const experiences = [
    {
      company: "GeekyAnts",
      role: "DevOps Engineer II",
      period: "Sep 2025 - Present",
      location: "Bangalore, India",
      description: "Building and maintaining cloud infrastructure for production applications",
      highlights: [
        "Managing Kubernetes clusters on AWS EKS for production workloads",
        "Implementing CI/CD pipelines using GitHub Actions and ArgoCD",
        "Setting up observability stack with Prometheus, Grafana, and ELK",
        "Built HealOps - internal DevOps platform for the company"
      ]
    },
    {
      company: "Infosys",
      role: "System Engineer",
      period: "Feb 2022 - Sep 2025",
      location: "Bangalore, India",
      description: "Started as Systems Associate, promoted to System Engineer",
      highlights: [
        "Managed enterprise-level infrastructure on AWS cloud",
        "Implemented infrastructure as code using Terraform",
        "Automated deployment processes reducing deployment time by 60%",
        "Maintained 99.9% uptime for critical production systems"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          Work <span className="text-emerald-400">Experience</span>
        </h2>
        <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
          My professional journey in the DevOps field
        </p>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-slate-700 to-slate-800" />

          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1 md:text-right">
                <div className={`bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all ${
                  index % 2 === 0 ? "md:text-left" : "md:text-right"
                }`}>
                  <div className="flex items-center gap-2 mb-2 justify-center md:justify-end">
                    <span className="text-emerald-400 font-medium">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-lg text-emerald-400 mb-2">{exp.company}</p>
                  <p className="text-slate-400 text-sm mb-4">{exp.location}</p>
                  <p className="text-slate-300 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight) => (
                      <li key={highlight} className="text-slate-400 text-sm flex items-start gap-2 justify-center md:justify-end">
                        <span className="text-emerald-500 mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-6">
                <div className="w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900" />
              </div>

              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
