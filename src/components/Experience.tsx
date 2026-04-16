"use client";

export function Experience() {
  const experiences = [
    {
      company: "GeekyAnts",
      role: "DevOps Engineer II",
      period: "Sep 2025 - Present",
      highlights: [
        "Built HealOps - internal DevOps platform for deployment & monitoring",
        "Managing AWS EKS clusters serving 50+ engineers",
        "Implemented GitOps with ArgoCD for automated deployments"
      ]
    },
    {
      company: "Infosys",
      role: "System Engineer",
      period: "Feb 2022 - Sep 2025",
      highlights: [
        "Managed enterprise AWS infrastructure with 99.9% uptime",
        "Implemented Infrastructure as Code using Terraform",
        "Reduced deployment time by 60% through automation"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Work <span className="text-emerald-400">Experience</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500 to-slate-800" />

          {experiences.map((exp, idx) => (
            <div key={exp.company} className={`relative flex gap-8 mb-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1 pl-12 md:pl-0">
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-emerald-400 font-semibold">{exp.period}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-emerald-400 mb-4">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h) => (
                      <li key={h} className="text-slate-400 text-sm flex items-start gap-2">
                        <span className="text-emerald-500 mt-1">▹</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-4 transform -translate-x-1/2 mt-4">
                <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
