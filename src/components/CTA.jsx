export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-8 py-10 sm:px-12 sm:py-14 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Ready to open your doors with confidence?
          </h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Start free. Upgrade when you need advanced automation and SSO.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <button className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-slate-900 px-6 py-3 text-sm font-medium shadow hover:opacity-90 transition">
              Create Workspace
            </button>
            <button className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-6 py-3 text-sm text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-white/10 transition">
              Contact Sales
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400" id="faq">
          GDPR-ready • SOC 2 in progress • Status page • API access
        </p>
      </div>
    </section>
  )
}
