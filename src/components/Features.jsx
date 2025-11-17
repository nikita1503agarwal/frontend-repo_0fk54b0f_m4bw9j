import { ShieldCheck, ListChecks, Users, Lock, Sparkles, Gauge } from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Secure by default',
    desc: 'End-to-end encryption for submissions and verifications with granular roles.',
  },
  {
    icon: ListChecks,
    title: 'Smart lists',
    desc: 'Segment, tag, and prioritize entries. Bulk import from CSV and APIs.',
  },
  {
    icon: Users,
    title: 'Team spaces',
    desc: 'Invite collaborators with fine-grained permissions and SSO support.',
  },
  {
    icon: Lock,
    title: 'Policy engine',
    desc: 'Create rules to auto-approve, flag, or reject based on conditions.',
  },
  {
    icon: Sparkles,
    title: 'Delightful UX',
    desc: 'A crisp, tactile interface with buttery animations that stays out of the way.',
  },
  {
    icon: Gauge,
    title: 'Realtime insights',
    desc: 'Track conversion, fraud detection, and velocity with live charts.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(0,0,0,0.04),transparent),radial-gradient(800px_500px_at_90%_0,rgba(0,0,0,0.04),transparent)] dark:bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(255,255,255,0.06),transparent),radial-gradient(800px_500px_at_90%_0,rgba(255,255,255,0.06),transparent)]"></div>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Everything you need to manage access</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">Thoughtfully designed tools that are powerful yet simple.</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-inner">
                <Icon size={18} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
