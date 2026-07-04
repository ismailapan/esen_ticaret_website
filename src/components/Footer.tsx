import Link from "next/link";
import { navItems, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-zinc bg-surface-container-lowest">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-6 px-4 py-20 md:grid-cols-4 md:px-16">
        <div className="md:col-span-2">
          <div className="mb-6 font-headline text-2xl font-bold text-primary">{siteConfig.name}</div>
          <p className="max-w-sm font-body text-sm text-on-surface-variant">
            {siteConfig.foundedYear}&apos;den beri ağır vasıtalar için fiberglas rüzgarlık imalatı yapıyor, tozluk ve
            aksesuarların temin/montaj hizmetini sunuyoruz.
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-label text-sm uppercase tracking-widest text-on-surface">Navigasyon</h4>
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-label text-sm text-on-surface-variant transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-border-zinc px-4 py-8 md:flex-row md:px-16">
        <span className="font-label text-xs text-on-surface-variant">
          © {year} {siteConfig.name}
        </span>
        <span className="font-label text-xs text-on-surface-variant/50">TÜRKİYE&apos;DE ÜRETİLMİŞTİR</span>
      </div>
    </footer>
  );
}
