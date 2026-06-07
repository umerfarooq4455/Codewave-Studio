import Link from "next/link";
import { Check, ArrowUpRight } from "lucide-react";

const services = [
  { n: "01", title: "Business Websites", desc: "Professional sites for service-based businesses — contractors, salons, restaurants, clinics, agencies.", features: ["Custom design", "Mobile responsive", "Contact forms", "Google Maps integration", "Basic SEO setup"] },
  { n: "02", title: "E-Commerce Stores", desc: "Online stores that sell. Stripe / PayPal payments, inventory management, secure checkout.", features: ["Product catalog", "Stripe / PayPal", "Order management", "Discount codes", "Customer accounts"] },
  { n: "03", title: "Booking & Appointments", desc: "Let customers book appointments online. Calendar sync, reminders, payment on booking.", features: ["Calendar integration", "Email reminders", "Pay-on-book", "Staff scheduling", "Custom forms"] },
  { n: "04", title: "Landing Pages", desc: "High-converting single-page sites for ad campaigns, product launches, and lead generation.", features: ["Conversion-focused", "A/B test ready", "Lead capture", "Fast loading", "Analytics setup"] },
  { n: "05", title: "Website Redesign", desc: "Already have a site but it's slow, ugly, or outdated? We modernize without losing your SEO.", features: ["Speed optimization", "Modern design", "SEO migration", "Mobile fixes", "Content carryover"] },
  { n: "06", title: "Maintenance & Support", desc: "Monthly plans to keep your site fast, secure, and updated. No more worrying about your website.", features: ["Security updates", "Daily backups", "Content updates", "Performance monitoring", "Priority support"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24">
        <div className="tag mb-6">Our services</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
          What we can <span className="italic-serif text-ink-500">build</span> for you.
        </h1>
        <p className="text-lg text-ink-500 max-w-2xl leading-relaxed">
          Whatever your business needs to grow online, we've built it before and we can build it for you.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div key={s.title} className="card-minimal rounded-2xl p-7">
              <div className="flex justify-between items-start mb-5">
                <span className="serif text-3xl text-ink-400">{s.n}</span>
              </div>
              <h3 className="font-bold text-2xl mb-3">{s.title}</h3>
              <p className="text-ink-500 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2 pt-4 border-t border-cream-300">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <Check size={14} className="text-ink-900 shrink-0 mt-1" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
          >
            Start Your Project <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
