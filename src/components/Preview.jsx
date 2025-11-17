import { motion } from 'framer-motion'

function Stat({ label, value, trend }) {
  return (
    <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-5">
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
      <div className="mt-2 flex items-baseline gap-2">
        <div className="text-2xl font-semibold text-slate-900 dark:text-white">{value}</div>
        <div className={`text-xs ${trend > 0 ? 'text-emerald-600' : 'text-rose-600'}`}>{trend > 0 ? `+${trend}%` : `${trend}%`}</div>
      </div>
    </div>
  )
}

function Row({ name, email, status }) {
  return (
    <div className="grid grid-cols-3 items-center gap-4 rounded-xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-3 text-sm">
      <div className="truncate text-slate-900 dark:text-white">{name}</div>
      <div className="truncate text-slate-600 dark:text-slate-300">{email}</div>
      <div className={`justify-self-end rounded-full px-2 py-1 text-xs ${status === 'Approved' ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' : status === 'Pending' ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300' : 'bg-rose-500/15 text-rose-700 dark:text-rose-300'}`}>{status}</div>
    </div>
  )
}

export default function Preview() {
  return (
    <section id="preview" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">A dashboard that feels familiar</h2>
          <p className="mt-4 text-slate-700 dark:text-slate-300">Clean cards, subtle depth, and frictionless flows.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-3">
            {[...Array(6)].map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Row name={`User ${i + 1}`} email={`user${i + 1}@example.com`} status={i % 3 === 0 ? 'Approved' : i % 3 === 1 ? 'Pending' : 'Rejected'} />
              </motion.div>
            ))}
          </div>
          <div className="space-y-3">
            <Stat label="Total Requests" value="12,481" trend={8.2} />
            <Stat label="Approval Rate" value="68%" trend={1.3} />
            <Stat label="Flags" value="42" trend={-3.2} />
          </div>
        </div>
      </div>
    </section>
  )
}
