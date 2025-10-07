import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Webluk Solutions | Digital Marketing Agency",
    template: "%s | Webluk Solutions",
  },
  description:
    "Webluk Solutions is a modern digital marketing agency offering SEO, SMM, PPC, content and web design.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b border-[var(--border)] sticky top-0 z-40 glass">
          <div className="container flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              {/* Replace span with <Image src="/logo.png" .../> once added to /public */}
              <span className="text-xl font-extrabold tracking-wide">
                <span className="text-[var(--text-primary)]">WEBLUK</span>
                <span className="text-[var(--accent)]">SOLUTIONS</span>
              </span>
            </Link>
            <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
              <Link className="hover:text-[var(--accent)]" href="/">Home</Link>
              <Link className="hover:text-[var(--accent)]" href="/about">About</Link>
              <Link className="hover:text-[var(--accent)]" href="/services">Services</Link>
              <Link className="hover:text-[var(--accent)]" href="/portfolio">Portfolio</Link>
            </nav>
            <div className="hidden sm:flex items-center gap-3">
              <ThemeToggle />
              <a className="btn btn-primary" href="/contact">Contact</a>
            </div>
            <details className="sm:hidden">
              <summary className="cursor-pointer px-3 py-2 rounded-md border border-[var(--border)]">Menu</summary>
              <div className="absolute right-4 mt-2 w-48 card p-3 flex flex-col gap-3 text-sm">
                <Link className="hover:text-[var(--accent)]" href="/">Home</Link>
                <Link className="hover:text-[var(--accent)]" href="/about">About</Link>
                <Link className="hover:text-[var(--accent)]" href="/services">Services</Link>
                <Link className="hover:text-[var(--accent)]" href="/portfolio">Portfolio</Link>
                <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                  <ThemeToggle />
                  <a className="btn btn-primary" href="/contact">Contact</a>
                </div>
              </div>
            </details>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-[var(--border)] mt-16">
          <div className="container py-12">
            <div className="grid gap-8 md:grid-cols-3">
              {/* About Us */}
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">About Us</h3>
                <p className="text-[var(--text-secondary)] text-sm mb-4">
                  Webluk Solutions is a development-first digital agency founded in 2023.
                  We build fast, secure and scalable digital products that help businesses grow.
                </p>
                <div className="text-[var(--text-muted)] text-sm">
                  <p>Green Village, Kolkata — 700150</p>
                  <p>+91 7292932411</p>
                  <p>info@webluksolutions.com</p>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Home</Link></li>
                  <li><Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">About</Link></li>
                  <li><Link href="/services" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Services</Link></li>
                  <li><Link href="/portfolio" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Portfolio</Link></li>
                  <li><Link href="/contact" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Contact</Link></li>
                  <li><Link href="/privacy" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="text-[var(--text-secondary)] hover:text-[var(--accent)]">Terms of Service</Link></li>
                </ul>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-4">Follow Us</h3>
                <div className="flex gap-4 mb-4">
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--accent)]" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                    </svg>
                  </a>
                </div>
                <p className="text-[var(--text-muted)] text-sm">Connect with us for updates and insights</p>
              </div>
            </div>
            <div className="border-t border-[var(--border)] mt-8 pt-6 text-center">
              <p className="text-[var(--text-muted)] text-sm">© {new Date().getFullYear()} Webluk Solutions. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
