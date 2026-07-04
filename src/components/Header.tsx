"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, siteConfig } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border-zinc bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4 md:px-16">
        <Link href="/" className="font-headline text-2xl font-bold uppercase tracking-tighter text-primary">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-label text-sm transition-colors ${
                  isActive
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-on-surface-variant hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className="glow-hover hidden rounded bg-primary px-6 py-2 font-label text-sm text-on-primary transition-transform hover:scale-95 md:inline-flex md:items-center md:justify-center"
        >
          KONUM &gt;&gt;
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          className="relative z-[60] flex h-10 w-10 items-center justify-center text-on-surface md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-[73px] right-0 left-0 z-40 flex h-[calc(100vh-73px)] flex-col bg-background md:hidden"
          >
            <div className="carbon-texture absolute inset-0" />

            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center gap-4 border-b border-border-zinc py-5 font-headline text-3xl transition-colors ${
                        isActive ? "text-primary" : "text-on-surface hover:text-primary"
                      }`}
                    >
                      <span className="font-label text-sm text-on-surface-variant/50">0{index + 1}</span>
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="relative border-t border-border-zinc p-6">
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="glow-hover block rounded bg-primary py-4 text-center font-label text-sm text-on-primary transition-all"
              >
                KONUM &gt;&gt;
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
