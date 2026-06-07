import Link from "next/link";
import { ArrowUpRight, Heart, Target, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-24">
        <div className="tag mb-6">About us</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          We build websites <span className="italic-serif text-ink-500">that work</span>.
        </h1>
        <p className="text-lg text-ink-500 max-w-2xl leading-relaxed">
          Codewave Studio was founded with one mission: help small business owners win online without paying agency prices.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="card-minimal rounded-3xl p-8 md:p-14 mb-10">
          <div className="serif text-4xl text-ink-400 mb-6">Our story</div>
          <div className="text-ink-700 space-y-5 leading-relaxed text-lg">
            <p>
              Most small business owners get burned by web designers. Either they pay $2,000–$5,000 for a slow, template-based site, or they DIY something on Wix that looks like everyone else's.
            </p>
            <p>
              We started Codewave Studio to change that. We hand-code every site using modern technology — Next.js, React, Tailwind — the same stack used by Netflix, TikTok, and Notion. But we charge a fraction of what big agencies do.
            </p>
            <p>
              Our clients are restaurants in Texas, plumbers in Arizona, dentists in Florida, and salons in California. Real businesses with real customers. <span className="italic-serif text-ink-900">Honest websites for honest businesses.</span>
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {[
            { icon: Target, n: "01", title: "Results First", desc: "Every design decision is made to get you more customers — not to win design awards." },
            { icon: Heart, n: "02", title: "Honest Pricing", desc: "Fixed prices. No surprises. What we quote is what you pay." },
            { icon: Users, n: "03", title: "Real Support", desc: "Talk to a real human. We answer emails in under 4 hours, every business day." },
          ].map((v) => (
            <div key={v.title} className="card-minimal rounded-2xl p-7">
              <div className="flex justify-between items-start mb-5">
                <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center">
                  <v.icon size={20} className="text-ink-900" />
                </div>
                <span className="serif text-3xl text-ink-400">{v.n}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{v.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
          >
            Work With Us <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
