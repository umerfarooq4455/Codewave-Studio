"use client";

import { useState } from "react";
import { Mail, MessageCircle, Linkedin, Globe, ArrowUpRight, Check, Loader2 } from "lucide-react";

const WEB3FORMS_ACCESS_KEY = "04ca5169-9300-45c5-b395-3751a82f3f9a";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", business: "", budget: "", message: "" });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New Lead from Codewave Studio — ${form.business || form.name}`,
          from_name: "Codewave Studio Website",
          name: form.name,
          email: form.email,
          business: form.business,
          budget: form.budget,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        if (typeof window !== "undefined" && (window as any).fbq) {
          (window as any).fbq("track", "Lead");
        }
      } else {
        setError(data.message || "Something went wrong. Email umerfarooq445642@gmail.com directly.");
      }
    } catch {
      setError("Network error. Email umerfarooq445642@gmail.com directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-12 md:pt-24">
        <div className="tag mb-6">— Get in touch</div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6 max-w-4xl">
          Let's build something <span className="italic-serif text-ink-500">great</span> together.
        </h1>
        <p className="text-lg text-ink-500 max-w-2xl leading-relaxed">
          Tell us about your business. We'll get back to you within 24 hours with a custom quote.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <a href="mailto:umerfarooq445642@gmail.com" className="card-minimal block rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center mb-3">
                <Mail size={18} />
              </div>
              <h3 className="font-bold mb-1">Email</h3>
              <p className="text-ink-500 text-sm break-all">umerfarooq445642@gmail.com</p>
            </a>
            <a href="https://wa.me/923176596072" target="_blank" rel="noopener" className="card-minimal block rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center mb-3">
                <MessageCircle size={18} />
              </div>
              <h3 className="font-bold mb-1">WhatsApp</h3>
              <p className="text-ink-500 text-sm">Chat with us instantly</p>
            </a>
            <a href="https://linkedin.com/in/umerfarooq44" target="_blank" rel="noopener" className="card-minimal block rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center mb-3">
                <Linkedin size={18} />
              </div>
              <h3 className="font-bold mb-1">LinkedIn</h3>
              <p className="text-ink-500 text-sm">Connect with Umer</p>
            </a>
            <a href="https://portfolio-z42w.vercel.app/" target="_blank" rel="noopener" className="card-minimal block rounded-2xl p-6">
              <div className="w-10 h-10 rounded-lg bg-cream-100 flex items-center justify-center mb-3">
                <Globe size={18} />
              </div>
              <h3 className="font-bold mb-1">Personal Portfolio</h3>
              <p className="text-ink-500 text-sm">See individual work</p>
            </a>
          </div>

          <div className="md:col-span-2 bg-ink-900 text-cream-100 rounded-3xl p-8 md:p-12">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16">
                <div className="w-16 h-16 rounded-full bg-lime flex items-center justify-center mb-4 text-ink-900">
                  <Check size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-2">Thanks! We got it.</h3>
                <p className="text-cream-300 mb-8">Umer will reply within 24 hours.</p>
                <a
                  href="https://wa.me/923176596072"
                  target="_blank"
                  rel="noopener"
                  className="btn-lime inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
                >
                  <MessageCircle size={18} /> Message on WhatsApp Now
                </a>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <div className="serif text-3xl text-lime mb-6">Send us a message</div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cream-300">Your Name</label>
                    <input
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-lime focus:outline-none placeholder-cream-300/40"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cream-300">Email</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-lime focus:outline-none placeholder-cream-300/40"
                      placeholder="john@yourbusiness.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-cream-300">Business Name</label>
                  <input
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-lime focus:outline-none placeholder-cream-300/40"
                    placeholder="Smith's Bakery"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-cream-300">Project Budget (USD)</label>
                  <select
                    value={form.budget}
                    onChange={(e) => setForm({ ...form, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-lime focus:outline-none"
                  >
                    <option value="" className="bg-ink-800">Select a range</option>
                    <option value="under-1k" className="bg-ink-800">Under $1,000</option>
                    <option value="1k-2k" className="bg-ink-800">$1,000 – $2,000</option>
                    <option value="2k-5k" className="bg-ink-800">$2,000 – $5,000</option>
                    <option value="5k+" className="bg-ink-800">$5,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-cream-300">Tell us about your project</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-lime focus:outline-none placeholder-cream-300/40"
                    placeholder="What kind of website or software do you need? What are your goals?"
                  />
                </div>

                {error && (
                  <div className="px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-lime w-full py-4 rounded-full font-semibold flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" size={18} /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowUpRight size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
