import Link from "next/link";
import { ArrowUpRight, Check, Code2, Smartphone, Search, Zap, ShieldCheck, Rocket, Star, MessageCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="grain relative">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="tag mb-8">
            <span className="dot-lime" />
            Booking projects for Q3 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 max-w-5xl">
            We build <span className="italic-serif text-ink-500">websites</span> that grow USA <span className="italic-serif text-ink-500">small businesses</span>.
          </h1>

          <p className="text-lg md:text-xl text-ink-500 max-w-2xl mb-10 leading-relaxed">
            Custom-coded, lightning-fast websites and software built to convert visitors into customers.
            Delivered in 7 days. Starting at <span className="text-ink-900 font-semibold">$799</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
            >
              Get a Free Quote <ArrowUpRight size={18} />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold bg-white border border-cream-300 hover:border-ink-900 transition"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats strip */}
          <div className="mt-20 pt-10 border-t border-cream-300 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "7 days", label: "Average Delivery" },
              { value: "100%", label: "Mobile-Friendly" },
              { value: "5.0", label: "Client Rating" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-4xl md:text-5xl font-bold tracking-tight">{s.value}</div>
                <div className="text-sm text-ink-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-ink-900 text-cream-100 overflow-hidden py-6 border-y border-ink-700">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center text-2xl font-medium">
              {["Next.js", "React", "Tailwind", "TypeScript", "Node.js", "Python", "Stripe", "AWS", "Vercel", "PostgreSQL", "OpenAI"].map((t) => (
                <span key={t} className="flex items-center gap-12">
                  {t}
                  <span className="w-2 h-2 rounded-full bg-lime" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <div className="tag mb-5">What we do</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              Everything your <span className="italic-serif text-ink-500">business</span> needs online.
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-lg text-ink-500 leading-relaxed">
              We design, build, and ship websites + custom software that look beautiful and bring measurable results to your bottom line.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { icon: Code2, title: "Custom Web Design", desc: "Hand-coded, pixel-perfect sites built around your brand — never templates.", n: "01" },
            { icon: Smartphone, title: "Mobile-First Build", desc: "Looks gorgeous on every device. 60%+ of your traffic comes from phones.", n: "02" },
            { icon: Search, title: "Local SEO", desc: "Show up on Google when customers search for your services in your city.", n: "03" },
            { icon: Zap, title: "Blazing Performance", desc: "Sub-2 second load times. Faster sites rank higher and convert better.", n: "04" },
            { icon: ShieldCheck, title: "Security & SSL", desc: "HTTPS, spam protection, and daily backups included on every project.", n: "05" },
            { icon: Rocket, title: "Launch in 7 Days", desc: "Most small business sites are live and converting in a single week.", n: "06" },
          ].map((s) => (
            <div key={s.title} className="card-minimal rounded-2xl p-7 group">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-cream-100 flex items-center justify-center">
                  <s.icon size={20} className="text-ink-900" />
                </div>
                <span className="text-sm text-ink-400 font-medium">{s.n}</span>
              </div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — big numbered band */}
      <section className="bg-ink-900 text-cream-100 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-10 mb-16">
            <div className="md:col-span-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider mb-5">
                <span className="dot-lime" /> How we work
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                From idea to <span className="italic-serif text-lime">launch</span> in four steps.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 flex items-end">
              <p className="text-lg text-cream-300 leading-relaxed">
                A transparent, no-surprise process built around your time. From the first call to the final launch, you always know what's next.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { n: "01", t: "Free Consultation", d: "15-minute call to understand your business and goals." },
              { n: "02", t: "Design Mockup", d: "Custom design sent for approval within 48 hours." },
              { n: "03", t: "Development", d: "We build your site with clean, fast, modern code." },
              { n: "04", t: "Launch & Support", d: "Site goes live. 30 days of free changes included." },
            ].map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-6">
                <div className="serif text-6xl text-lime mb-3">{s.n}</div>
                <h3 className="font-bold text-xl mb-2">{s.t}</h3>
                <p className="text-cream-300 text-sm leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="tag mb-5 mx-auto">Pricing</div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Simple, <span className="italic-serif text-ink-500">fixed</span> pricing.
          </h2>
          <p className="text-lg text-ink-500">
            No hourly rates. No hidden fees. Pick a package and we get started.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {[
            {
              name: "Starter",
              price: "$799",
              desc: "Perfect for new businesses ready to get online.",
              features: ["5-page website", "Mobile-friendly design", "Contact form", "Basic SEO", "30 days support"],
              popular: false,
            },
            {
              name: "Business",
              price: "$1,499",
              desc: "Most popular — for growing companies.",
              features: ["10-page website", "Booking system", "Google Maps + reviews", "Advanced SEO", "Analytics setup", "60 days support"],
              popular: true,
            },
            {
              name: "Premium",
              price: "$2,499+",
              desc: "Full-service custom builds with ongoing support.",
              features: ["Unlimited pages", "Custom features", "E-commerce ready", "Logo design included", "Monthly maintenance", "Priority support"],
              popular: false,
            },
          ].map((p) => (
            <div
              key={p.name}
              className={`relative rounded-3xl p-8 ${
                p.popular ? "bg-ink-900 text-cream-100" : "card-minimal"
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-lime text-ink-900 text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>
              )}
              <h3 className="font-bold text-2xl mb-1">{p.name}</h3>
              <p className={`text-sm mb-6 ${p.popular ? "text-cream-300" : "text-ink-500"}`}>{p.desc}</p>
              <div className="text-5xl font-bold mb-1 tracking-tight">{p.price}</div>
              <div className={`text-sm mb-8 ${p.popular ? "text-cream-300" : "text-ink-500"}`}>one-time</div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={16} className={`shrink-0 mt-0.5 ${p.popular ? "text-lime" : "text-ink-900"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className={`block text-center py-3 rounded-full font-semibold transition ${
                  p.popular
                    ? "btn-lime"
                    : "btn-primary"
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-cream-50 border-y border-cream-300 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="tag mb-5 mx-auto">— Testimonials</div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Loved by USA <span className="italic-serif text-ink-500">small businesses</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              { name: "Sarah J.", role: "Owner, Bloom Bakery — Austin, TX", text: "Codewave Studio rebuilt our site in 6 days. Online orders doubled in the first month." },
              { name: "Mike R.", role: "Founder, Apex Plumbing — Phoenix, AZ", text: "We rank on the first page of Google now. Best money we've spent on marketing." },
              { name: "Dr. Lisa C.", role: "Smile Dental — Miami, FL", text: "Professional, fast, and patient. They explained every step. Highly recommend." },
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

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="bg-ink-900 text-cream-100 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-lime/10 rounded-full blur-3xl" />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-wider mb-6">
              <span className="dot-lime" /> Let's work together
            </div>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tight leading-tight mb-6 max-w-3xl mx-auto">
              Ready to grow your business <span className="italic-serif text-lime">online?</span>
            </h2>
            <p className="text-cream-300 text-lg mb-10 max-w-2xl mx-auto">
              Book a free 15-minute strategy call. No commitment. We'll show you exactly how a new website can bring you more customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="btn-lime inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
              >
                Book My Free Call <ArrowUpRight size={18} />
              </Link>
              <a
                href="https://wa.me/923176596072"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold bg-white/10 border border-white/20 hover:bg-white/15 transition"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
