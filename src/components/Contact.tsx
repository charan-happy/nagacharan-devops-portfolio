"use client";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let's <span className="text-emerald-400">Connect</span>
        </h2>
        <p className="text-slate-400 mb-12">
          Open to remote opportunities in DevOps, SRE & Platform Engineering
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
          <a href="mailto:nagacharan4286@gmail.com" className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 rounded-xl py-4 hover:border-emerald-500/50 transition-all">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            <span className="text-white">Email</span>
          </a>
          <a href="tel:+919912495981" className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 rounded-xl py-4 hover:border-emerald-500/50 transition-all">
            <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            <span className="text-white">Call</span>
          </a>
          <a href="https://www.linkedin.com/in/nagacharan-g" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 bg-slate-900 border border-slate-700 rounded-xl py-4 hover:border-emerald-500/50 transition-all">
            <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            <span className="text-white">LinkedIn</span>
          </a>
        </div>

        <a href="mailto:nagacharan4286@gmail.com?subject=DevOps Opportunity" 
           className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-10 py-4 rounded-xl font-semibold transition-all hover:scale-105">
          Send Message
        </a>
      </div>
    </section>
  );
}
