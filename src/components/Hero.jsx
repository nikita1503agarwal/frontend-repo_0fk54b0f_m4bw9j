import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white dark:from-slate-950/70 dark:via-slate-950/60 dark:to-slate-950"></div>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1 text-xs text-slate-700 dark:text-slate-300">
            <span className="h-2 w-2 rounded-full bg-rose-500"></span>
            Interactive cover background
          </div>
          <h1 className="mt-6 text-5xl sm:text-6xl font-semibold tracking-tight text-slate-900 dark:text-white">
            Whitelist management, done the Apple way
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-300">
            Create, verify and manage product access with a minimalist dashboard that feels delightful and effortless.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-slate-900 px-6 py-3 text-sm font-medium shadow hover:opacity-90 transition">
              Get Started
            </button>
            <button className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-6 py-3 text-sm text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-white/10 transition">
              Live Demo
            </button>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-slate-600 dark:text-slate-400">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              Verified entries
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
              Audit-ready
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500"></span>
              Rate limited
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
