export function Certifications() {
  const certifications = [
    {
      name: "Certified Kubernetes Administrator (CKA)",
      issuer: "The Linux Foundation",
      date: "January 2025",
      credentialId: "70a41aa8-c939-4a5b-95a7-4bc65fe40f99",
      verifyUrl: "https://www.credly.com/badges/70a41aa8-c939-4a5b-95a7-4bc65fe40f99/public_url",
      badge: "🏆"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-white">
          <span className="text-emerald-400">Certifications</span>
        </h2>
        <p className="text-slate-400 text-center mb-12">
          Industry-recognized credentials validating my expertise
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-emerald-500/50 transition-all hover:transform hover:scale-[1.02]"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl">{cert.badge}</div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{cert.name}</h3>
                  <p className="text-emerald-400 font-medium">{cert.issuer}</p>
                  <p className="text-slate-500 text-sm">{cert.date}</p>
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-slate-400 hover:text-emerald-400 transition-colors underline"
                  >
                    Verify Credential →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
