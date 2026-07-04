import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Sparkles, Shield, Wind } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { homeHighlights, homeServiceCards } from "@/lib/site-data";

// Not: Bu segment layout.tsx ile aynı seviyede olduğu için title.template
// burada uygulanmaz — bu yüzden layout'taki `default` başlığa güveniyoruz.
export const metadata: Metadata = {
  description:
    "1971'den beri ağır vasıtalar için kendi atölyemizde fiberglas rüzgarlık imal ediyor, tozluk ve aksesuarların temin/montaj hizmetini sunuyoruz.",
};

const highlightIcons = {
  wind: Wind,
  sparkles: Sparkles,
  shield: Shield,
} as const;

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[calc(100vh-73px)] w-full items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-1.jpg"
          alt="Gün batımında kıyı yolunda ilerleyen, özel tasarım rüzgarlıklı ağır vasıta"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-background/70" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-start px-4 text-left md:items-center md:px-16 md:text-center">
          <span className="mb-4 rounded-full border border-primary/20 bg-primary/10 px-4 py-1 font-label text-sm tracking-widest text-primary">
            DIŞ AKSESUAR &amp; FİBERGLAS RÜZGARLIK &amp; TOZLUK
          </span>
          <h1 className="mb-8 max-w-4xl font-headline text-4xl font-bold leading-[1.1] text-on-surface md:text-7xl">
            Yolların Gücüne Estetik Katıyoruz.
          </h1>
          <Link
            href="/hizmetler"
            className="glow-hover group flex items-center justify-center gap-3 rounded bg-primary px-8 py-4 font-label text-sm text-on-primary transition-all duration-300"
          >
            Hizmetlerimizi Keşfedin
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Highlights */}
      <section className="relative z-20 border-y border-border-zinc bg-surface-container-lowest">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-4 p-4 md:grid-cols-3">
          {homeHighlights.map((highlight, index) => {
            const Icon = highlightIcons[highlight.icon as keyof typeof highlightIcons];
            return (
              <Reveal key={highlight.text} delay={index * 0.1}>
                <div className="group flex h-full flex-col items-start rounded-lg border border-transparent bg-surface-container-low p-12 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-surface-container-high md:p-16">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary">
                    <Icon className="text-primary transition-colors duration-300 group-hover:text-on-primary" size={26} strokeWidth={2} />
                  </div>
                  <div className="mb-6 font-headline text-xl text-on-surface md:text-2xl">{highlight.text}</div>
                  <div className="mt-auto h-[3px] w-16 bg-primary transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_15px_rgba(227,30,36,0.8)] group-hover:brightness-125" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Service preview */}
      <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16 md:py-32">
        <Reveal className="mb-16 flex flex-col items-end justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <h2 className="mb-6 font-headline text-3xl text-on-surface md:text-5xl">
              Usta İşçilik ve Kalitenin Buluştuğu Nokta
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Esen Ticaret olarak ağır vasıta araçlar için fiberglas rüzgarlık imalatını kendi atölyemizde yapıyor,
              tozluk ve aksesuarlarda ise tedarik + montaj hizmeti sunuyoruz.
            </p>
          </div>
          <Link
            href="/hizmetler"
            className="group flex items-center gap-2 border-b border-primary pb-1 font-label text-sm text-primary"
          >
            TÜM HİZMETLERİMİZİ GÖR
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {homeServiceCards.map((card) => (
            <Reveal key={card.title}>
              <Link
                href={card.href}
                className="group relative block h-[400px] overflow-hidden rounded-lg border border-border-zinc bg-surface-container-high transition-all hover:border-primary/30"
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h3 className="mb-2 font-headline text-2xl text-on-surface">{card.title}</h3>
                  <p className="max-w-md font-body text-base text-on-surface-variant">{card.description}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-8 text-center">
          <Link
            href="/hizmetler"
            className="group inline-flex items-center gap-2 font-label text-sm text-on-surface-variant transition-colors hover:text-primary"
          >
            Hizmetler sayfamızda tüm detayları inceleyin
            <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </>
  );
}
