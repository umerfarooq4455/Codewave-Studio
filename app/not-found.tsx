import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="serif text-9xl text-ink-400 mb-4">404</div>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
        Page <span className="italic-serif text-ink-500">not found</span>.
      </h1>
      <p className="text-ink-500 mb-8 max-w-md">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        href="/"
        className="btn-primary inline-flex items-center gap-2 px-7 py-4 rounded-full font-semibold"
      >
        Back to Home <ArrowUpRight size={18} />
      </Link>
    </div>
  );
}
