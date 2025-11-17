import { useEffect, useState } from 'react'
import { Menu, X, ShieldCheck, Sun, Moon } from 'lucide-react'

function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-1.5 text-sm text-slate-800 dark:text-slate-200 hover:bg-white/90 dark:hover:bg-white/10 transition"
      aria-label="Toggle theme"
    >
      {dark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">{dark ? 'Light' : 'Dark'}</span>
    </button>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur-xl px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-700 text-white shadow-inner dark:from-white/10 dark:to-white/5">
              <ShieldCheck size={18} />
            </div>
            <span className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Whitelyst</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
            <a href="#features" className="hover:text-black dark:hover:text-white transition">Features</a>
            <a href="#preview" className="hover:text-black dark:hover:text-white transition">Preview</a>
            <a href="#pricing" className="hover:text-black dark:hover:text-white transition">Pricing</a>
            <a href="#faq" className="hover:text-black dark:hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="hidden sm:inline-flex items-center rounded-full bg-black text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90 transition">
              Join Waitlist
            </button>
            <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-slate-800 dark:text-slate-200" onClick={() => setOpen(!open)}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-2">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl p-4">
            <div className="grid gap-3 text-sm text-slate-800 dark:text-slate-200">
              <a href="#features" className="rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10">Features</a>
              <a href="#preview" className="rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10">Preview</a>
              <a href="#pricing" className="rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10">Pricing</a>
              <a href="#faq" className="rounded-lg px-2 py-2 hover:bg-black/5 dark:hover:bg-white/10">FAQ</a>
              <button className="mt-2 inline-flex items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-medium">Join Waitlist</button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
