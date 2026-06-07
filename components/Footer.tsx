import Link from "next/link";
import { Mail, Linkedin, MessageCircle, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 rounded-lg bg-lime flex items-center justify-center font-black text-ink-900">
                C
              </div>
              <span className="font-bold text-xl">
                Codewave<span className="italic-serif text-cream-300 ml-1">Studio</span>
              </span>
            </div>
            <p className="text-cream-300 max-w-md leading-relaxed">
              We build modern websites and custom software for small businesses across the United States.
              Fast delivery. Fixed pricing. Real results.
            </p>

            <div className="mt-6 flex gap-3">
              <a href="https://linkedin.com/in/umerfarooq44" target="_blank" rel="noopener" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 hover:bg-lime hover:text-ink-900 flex items-center justify-center transition">
                <Linkedin size={16} />
              </a>
              <a href="https://portfolio-z42w.vercel.app/" target="_blank" rel="noopener" aria-label="Portfolio" className="w-10 h-10 rounded-full bg-white/5 hover:bg-lime hover:text-ink-900 flex items-center justify-center transition">
                <Globe size={16} />
              </a>
              <a href="https://wa.me/923176596072" target="_blank" rel="noopener" aria-label="WhatsApp" className="w-10 h-10 rounded-full bg-white/5 hover:bg-lime hover:text-ink-900 flex items-center justify-center transition">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-semibold mb-4 text-cream-100 text-sm uppercase tracking-wider">Navigate</h4>
            <ul className="space-y-3 text-cream-300">
              <li><Link href="/services" className="hover:text-lime transition">Services</Link></li>
              <li><Link href="/software-development" className="hover:text-lime transition">Software Development</Link></li>
              <li><Link href="/portfolio" className="hover:text-lime transition">Our Work</Link></li>
              <li><Link href="/about" className="hover:text-lime transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-lime transition">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-semibold mb-4 text-cream-100 text-sm uppercase tracking-wider">Get in Touch</h4>
            <ul className="space-y-3 text-cream-300">
              <li>
                <a href="mailto:umerfarooq445642@gmail.com" className="flex items-center gap-2 hover:text-lime transition">
                  <Mail size={14} /> umerfarooq445642@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/923176596072" target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-lime transition">
                  <MessageCircle size={14} /> WhatsApp Chat
                </a>
              </li>
            </ul>

            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 btn-lime px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              Start a Project <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-cream-300">
          <div>© {new Date().getFullYear()} Codewave Studio. All rights reserved.</div>
          <div className="mt-2 sm:mt-0">Crafted by Umer Farooq · Built for USA businesses</div>
        </div>
      </div>
    </footer>
  );
}
