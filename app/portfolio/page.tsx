import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { name: "Bloom Bakery", category: "Restaurant · Austin, TX", color: "bg-orange-100", accent: "text-orange-900", desc: "Online ordering + reservation system." },
  { name: "Apex Plumbing", category: "Home Services · Phoenix, AZ", color: "bg-blue-100", accent: "text-blue-900", desc: "Lead-gen site ranking #1 locally." },
  { name: "Smile Dental", category: "Healthcare · Miami, FL", color: "bg-emerald-100", accent: "text-emerald-900", desc: "Patient booking + intake forms." },
  { name: "Glow Beauty Bar", category: "Salon & Spa · Los Angeles, CA", color: "bg-pink-100", accent: "text-pink-900", desc: "Booking, gift cards, Instagram gallery." },
  { name: "Coastline Realty", category: "Real Estate · San Diego, CA", color: "bg-amber-100", accent: "text-amber-900", desc: "Property listings + lead capture." },
  { name: "Iron Forge Gym", category: "Fitness · Dallas, TX", color: "bg-rose-100", accent: "text-rose-900", desc: "Membership signup + class schedule." },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24">
        <div className="tag mb-6">Selected work</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
          Websites that <span className="italic-serif text-ink-500">deliver</span> results.
        </h1>
        <p className="text-lg text-ink-500 max-w-2xl leading-relaxed">
          A selection of recent projects we've built for small businesses across the United States.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div key={p.name} className="card-minimal rounded-3xl overflow-hidden group">
              <div className={`relative h-72 ${p.color} flex items-center justify-center overflow-hidden`}>
                <div className={`serif text-6xl md:text-7xl ${p.accent} px-6 text-center`}>{p.name}</div>
                <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:bg-ink-900 group-hover:text-white transition">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <div className="p-7">
                <div className="text-xs uppercase tracking-wider text-ink-500 mb-2">{p.category}</div>
                <h3 className="font-bold text-2xl mb-2">{p.name}</h3>
                <p className="text-ink-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-ink-900 text-cream-100 rounded-3xl p-10 md:p-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Want to see your business <span className="italic-serif text-lime">here?</span>
          </h3>
          <p className="text-cream-300 mb-8 max-w-xl mx-auto">
            Let's build something you're proud to share. Get a free quote in 24 hours.
          </p>
          <Link
            href="/contact"
            className="btn-lime inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
          >
            Let's Build Yours <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
