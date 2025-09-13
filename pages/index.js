import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen">
        {/* Header */}
        <header className="py-12 text-center">
          <h1 className="text-4xl font-bold">George Siciaridis</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            CFO & Business Manager — Construction Finance & Operations
          </p>
          <p className="mt-2 italic max-w-2xl mx-auto">
            Scaling subcontractors into multimillion-dollar enterprises with tight cash control,
            job costing, and automation (Xero • ADP • Zapier • AI).
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 rounded-md bg-black text-white dark:bg-white dark:text-black font-semibold"
            >
              Download PDF
            </button>
            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600"
            >
              {dark ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </header>

        {/* Experience */}
        <section className="max-w-3xl mx-auto px-6 py-8">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>

          <div className="mb-6">
            <h3 className="font-bold">CFO / Business Manager — Adler Hydro Vac</h3>
            <p className="text-sm text-gray-500">South Florida · Feb 2024 – Present</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Directed full-cycle accounting with Xero + ADP + Zapier stack</li>
              <li>Built job-costing & billing systems (SOVs, COs, NTO/NOC tracking)</li>
              <li>Implemented daily cash tracking & lender-ready reporting</li>
              <li>Automated invoicing, reconciliation, and expense coding</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold">Accountant — KD Construction</h3>
            <p className="text-sm text-gray-500">Jan 2023 – Feb 2024</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Owned AIA billing, prepared draws, verified releases</li>
              <li>Reconciled job-cost reports for labor, subs, materials, overhead</li>
              <li>Processed subcontractor payments, tracked NTOs/NOCs</li>
              <li>Maintained contracts, COs, budgets in accounting systems</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-bold">Construction Accountant / Project Manager — Ric-Man International</h3>
            <p className="text-sm text-gray-500">2017 – 2020</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Led construction accounting across large utility projects</li>
              <li>Reconciled subcontractor AIA pay apps, COs, budgets vs. commitments</li>
              <li>Streamlined vendor setup & compliance processes</li>
              <li>Partnered with PMs & field teams on cost alignment</li>
            </ul>
          </div>
        </section>

        {/* Certifications */}
        <section className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Certifications</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>FMVA — Corporate Finance Institute</li>
            <li>Blockchain Essentials — IBM</li>
          </ul>
        </section>

        {/* Contact */}
        <section className="max-w-3xl mx-auto px-6 py-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-4">Contact</h2>
          <p>Email: <a href="mailto:gsiciaridis@gmail.com" className="underline">gsiciaridis@gmail.com</a></p>
          <p>Phone: 954-770-7438</p>
        </section>

        <footer className="py-6 text-center text-gray-500 text-sm">
          © 2025 George Siciaridis
        </footer>
      </main>
    </div>
  );
}
