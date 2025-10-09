"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isOpen && !target.closest('.sliding-menu') && !target.closest('button[aria-label="Toggle menu"]')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Delay to avoid immediate close on button click
      setTimeout(() => {
        document.addEventListener('click', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      
      // Lock scroll on both html and body
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="sm:hidden mobile-menu-container">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer px-3 py-2 rounded-md border border-[var(--border)] hover:bg-[var(--card-bg)] transition-colors"
        aria-label="Toggle menu"
      >
        <div className="w-5 h-4 flex flex-col justify-between">
          <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-[998] ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      ></div>

      {/* Sliding Menu */}
      <div className={`sliding-menu ${isOpen ? 'open' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-[var(--border)]">
            <h2 className="text-xl font-bold">
              <span className="text-[var(--text-primary)]">WEBLUK</span>
              <span className="text-[var(--accent)]">SOLUTIONS</span>
            </h2>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-[var(--card-bg)] rounded-md transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col gap-4">
              <Link 
                className="flex items-center gap-3 py-3 px-4 hover:bg-[var(--card-bg)] rounded-lg transition-all duration-200 hover:translate-x-1 text-base font-medium" 
                href="/"
                onClick={closeMenu}
              >
                <span className="text-xl">🏠</span>
                <span>Home</span>
              </Link>
              <Link 
                className="flex items-center gap-3 py-3 px-4 hover:bg-[var(--card-bg)] rounded-lg transition-all duration-200 hover:translate-x-1 text-base font-medium" 
                href="/about"
                onClick={closeMenu}
              >
                <span className="text-xl">ℹ️</span>
                <span>About</span>
              </Link>
              <Link 
                className="flex items-center gap-3 py-3 px-4 hover:bg-[var(--card-bg)] rounded-lg transition-all duration-200 hover:translate-x-1 text-base font-medium" 
                href="/services"
                onClick={closeMenu}
              >
                <span className="text-xl">⚙️</span>
                <span>Services</span>
              </Link>
              <Link 
                className="flex items-center gap-3 py-3 px-4 hover:bg-[var(--card-bg)] rounded-lg transition-all duration-200 hover:translate-x-1 text-base font-medium" 
                href="/portfolio"
                onClick={closeMenu}
              >
                <span className="text-xl">💼</span>
                <span>Portfolio</span>
              </Link>
              <Link 
                className="flex items-center gap-3 py-3 px-4 hover:bg-[var(--card-bg)] rounded-lg transition-all duration-200 hover:translate-x-1 text-base font-medium" 
                href="/contact"
                onClick={closeMenu}
              >
                <span className="text-xl">📧</span>
                <span>Contact</span>
              </Link>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-[var(--text-muted)]">Theme:</span>
              <ThemeToggle />
            </div>
            <a 
              className="btn btn-primary w-full text-center block" 
              href="/contact"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

