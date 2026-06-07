import Link from "next/link";
import { ArrowUpRight, Check, Code2, Database, Cloud, Cpu, GitBranch, Shield, Star, Zap, Clock, DollarSign, MessageCircle } from "lucide-react";

export const metadata = {
  title: "Custom Software Development for USA Businesses | Codewave Studio",
  description:
    "Custom software, web apps, and SaaS development for USA businesses. Modern stack. Fixed pricing starting at $1,499.",
};

export default function SoftwareDevelopmentLanding() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <div className="tag mx-auto mb-8">
            <span className="dot-lime" /> Trusted by USA small businesses
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 max-w-5xl mx-auto">
            Custom <span className="italic-serif text-ink-500">software</span> for USA small businesses.
          </h1>

          <p className="text-lg md:text-xl text-ink-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Web apps, internal tools, SaaS platforms, and automations.
            Built fast. Built right. <span className="text-ink-900 font-semibold">Starting at $1,499.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-10">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
            >
              Get a Free Quote in 24 Hours <ArrowUpRight size={18} />
            </Link>
            <a
              href="https://wa.me/923176596072"
              target="_blank"
              rel="noopener"
              className="btn-lime inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-ink-500">
            <div className="flex items-center gap-2"><Check size={14} className="text-ink-900" /> Fixed pricing</div>
            <span className="divider-dot" />
            <div className="flex items-center gap-2"><Check size={14} className="text-ink-900" /> 2–6 week delivery</div>
            <span className="divider-dot" />
            <div className="flex items-center gap-2"><Check size={14} className="text-ink-900" /> 100% satisfaction guarantee</div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mx-auto mb-5">— Common problems</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Tired of <span className="italic-serif text-ink-500">these problems?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "01", title: "Overpaying for software", desc: "Expensive SaaS subscriptions that don't quite fit your workflow." },
            { n: "02", title: "Manual, repetitive work", desc: "Your team wasting hours on tasks that should be automated." },
            { n: "03", title: "Spreadsheet chaos", desc: "Data scattered across Excel files, emails, and sticky notes." },
            { n: "04", title: "Slow, outdated systems", desc: "Old software that crashes, lags, and frustrates your customers." },
            { n: "05", title: "Tools that don't talk", desc: "Stripe, QuickBooks, Mailchimp — they need to work together." },
            { n: "06", title: "Custom features missing", desc: "Off-the-shelf software almost works, but not quite for your business." },
          ].map((p) => (
            <div key={p.title} className="card-minimal rounded-2xl p-7">
              <span className="serif text-3xl text-ink-400 mb-5 block">{p.n}</span>
              <h3 className="font-bold text-xl mb-2">{p.title}</h3>
              <p className="text-ink-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT WE BUILD */}
      <section className="bg-cream-50 border-y border-cream-300 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="tag mb-5">— What we build</div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Software that <span className="italic-serif text-ink-500">solves</span> real problems.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-lg text-ink-500 leading-relaxed">
                From simple internal tools to full SaaS platforms — we build software that fits your business, not the other way around.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Code2, title: "Custom Web Applications", desc: "Internal dashboards, CRMs, inventory systems, booking platforms." },
              { icon: Database, title: "SaaS Products", desc: "Turn your idea into a subscription business. Stripe, auth, dashboards — full stack." },
              { icon: Cloud, title: "API & Integrations", desc: "Connect QuickBooks, Stripe, Shopify, Zapier, HubSpot. Tools that talk." },
              { icon: Cpu, title: "AI-Powered Automation", desc: "Chatbots, document parsers, lead qualifiers powered by GPT-4 and Claude." },
              { icon: GitBranch, title: "E-Commerce Platforms", desc: "Custom Shopify alternatives, B2B portals, multi-vendor marketplaces." },
              { icon: Shield, title: "Maintenance & Scaling", desc: "Got software that needs fixes, speed, or new features? We modernize it." },
            ].map((s) => (
              <div key={s.title} className="card-minimal rounded-2xl p-7 bg-white">
                <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center mb-5">
                  <s.icon size={20} className="text-ink-900" />
                </div>
                <h3 className="font-bold text-xl mb-2">{s.title}</h3>
                <p className="text-ink-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-12">
          <div className="tag mx-auto mb-5">— Our tech stack</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Modern tools. <span className="italic-serif text-ink-500">Production-grade</span> code.
          </h2>
          <p className="text-ink-500 mt-3 text-lg">The same technology used by Netflix, Stripe, and Notion.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Next.js", "React", "TypeScript", "Node.js",
            "Python", "PostgreSQL", "MongoDB", "AWS",
            "Vercel", "Stripe", "OpenAI API", "Tailwind CSS",
          ].map((tech) => (
            <div key={tech} className="card-minimal rounded-xl py-5 text-center font-semibold">
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-ink-900 text-cream-100 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider mb-5">
              <span className="dot-lime" /> Pricing
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Fixed price. <span className="italic-serif text-lime">No surprises.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "MVP / Prototype", price: "$1,499", time: "2–3 weeks", features: ["Single core feature", "User auth", "Database", "Hosting setup", "Source code yours"], popular: false },
              { name: "Business App", price: "$3,499", time: "4–6 weeks", features: ["Up to 8 features", "Stripe payments", "Admin dashboard", "Email notifications", "30 days support"], popular: true },
              { name: "Full Platform", price: "$6,999+", time: "6–12 weeks", features: ["Unlimited features", "Custom integrations", "AI features included", "60 days support", "Free hosting 1 year"], popular: false },
            ].map((p) => (
              <div key={p.name} className={`relative rounded-3xl p-8 ${p.popular ? "bg-lime text-ink-900" : "bg-white/5 border border-white/10"}`}>
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-ink-900 text-lime text-xs font-bold tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="font-bold text-2xl mb-1">{p.name}</h3>
                <div className={`flex items-center gap-2 text-sm mb-4 ${p.popular ? "text-ink-700" : "text-cream-300"}`}>
                  <Clock size={14} /> {p.time}
                </div>
                <div className="text-5xl font-bold mb-6 tracking-tight">{p.price}</div>
                <ul className="space-y-3 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <Check size={16} className="shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className={`block text-center py-3 rounded-full font-semibold transition ${p.popular ? "bg-ink-900 text-lime hover:bg-ink-800" : "btn-lime"}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <p className="text-center text-cream-300 text-sm mt-8">
            Need something different? <Link href="/contact" className="text-lime hover:underline">Get a custom quote</Link>.
          </p>
        </div>
      </section>

      {/* WHY US */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mx-auto mb-5">— Why us</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Why USA businesses <span className="italic-serif text-ink-500">choose us</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: DollarSign, t: "Fixed pricing in USD", d: "No hourly billing. You know the price before we start. Pay 50% upfront, 50% on delivery." },
            { icon: Zap, t: "Fast delivery", d: "Most projects ship in 2–6 weeks. We work in your time zone (EST/PST hours available)." },
            { icon: Shield, t: "You own the code", d: "Full source code, hosting access, and documentation are yours from day one. No vendor lock-in." },
            { icon: MessageCircle, t: "Direct communication", d: "Talk to the developer directly — not a project manager. Reply within 4 business hours." },
          ].map((w) => (
            <div key={w.t} className="card-minimal rounded-2xl p-7 flex gap-5">
              <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center shrink-0">
                <w.icon size={20} className="text-ink-900" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">{w.t}</h3>
                <p className="text-ink-500 leading-relaxed">{w.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream-50 border-y border-cream-300 py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="tag mx-auto mb-5">— Client stories</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              What our <span className="italic-serif text-ink-500">clients</span> say.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Daniel K.", role: "AutoFlow Logistics — Dallas, TX", text: "Built our entire dispatch system in 5 weeks. Saved us $40k/year vs the SaaS we were using." },
              { name: "Jennifer M.", role: "Wellness Clinic — Tampa, FL", text: "Custom patient booking platform handling 3 clinics. Fast, reliable, and the support is unmatched." },
              { name: "Carlos R.", role: "BrightAds Marketing — San Diego, CA", text: "They built our entire client reporting dashboard. Clients love it. ROI in the first month." },
            ].map((t) => (
              <div key={t.name} className="card-minimal rounded-2xl p-7">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className="fill-ink-900 text-ink-900" />
                  ))}
                </div>
                <p className="text-ink-800 mb-5 leading-relaxed">"{t.text}"</p>
                <div className="pt-5 border-t border-cream-300">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-ink-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <div className="tag mx-auto mb-5">— FAQ</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            Frequently asked <span className="italic-serif text-ink-500">questions</span>.
          </h2>
        </div>

        <div className="space-y-3">
          {[
            { q: "How long does it take?", a: "Most MVPs ship in 2–3 weeks. Business apps in 4–6 weeks. Larger platforms 6–12 weeks. You'll get a firm timeline with your quote." },
            { q: "Do I own the code?", a: "Yes — 100%. You get full source code, GitHub access, documentation, and deployment credentials. No lock-in, ever." },
            { q: "What if I need changes later?", a: "Every project includes a free support window. After that, we offer monthly maintenance plans, or hourly work at $50/hr." },
            { q: "Can you work with my existing system?", a: "Absolutely. We integrate with Shopify, QuickBooks, Stripe, Salesforce, HubSpot, Zapier, and most APIs." },
            { q: "How do payments work?", a: "50% upfront to start, 50% on delivery. Pay via Stripe (USD card) or wire transfer. Fully invoiced." },
            { q: "What if I'm not happy?", a: "We don't move to the next milestone until you approve the current one. If you're truly unhappy in the first week, we refund." },
          ].map((f) => (
            <details key={f.q} className="card-minimal rounded-2xl p-6 group">
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center text-lg">
                {f.q}
                <span className="text-ink-500 group-open:rotate-45 transition text-2xl font-light">+</span>
              </summary>
              <p className="text-ink-500 mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-ink-900 text-cream-100 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
              Get your free project <span className="italic-serif text-lime">estimate</span>.
            </h2>
            <p className="text-cream-300 text-lg mb-10 max-w-2xl mx-auto">
              Tell us what you want to build. We'll send a fixed quote, timeline, and tech plan within 24 hours. No commitment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-lime inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
              >
                Get Free Quote <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://wa.me/923176596072"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold bg-white/10 border border-white/20 hover:bg-white/15 transition"
              >
                <MessageCircle size={18} /> WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
