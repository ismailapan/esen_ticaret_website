import type { Metadata } from "next";
import Image from "next/image";
import { Factory, Hammer, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/Gallery";
import { aboutGalleryItems, aboutUsp, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: `${siteConfig.foundedYear}'den bugüne Esen Ticaret'in hikayesi: kendi atölyemizde fiberglas rüzgarlık imalatı, usta işçiliği ve dayanıklı malzeme anlayışımız.`,
};

const uspIcons = {
  factory: Factory,
  hammer: Hammer,
  "shield-check": ShieldCheck,
} as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <header className="relative overflow-hidden">
        <Image
          src="/images/about-1.png"
          alt="Kırmızı ışıklarla aydınlanan ağır vasıta kabini ve ön camı"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />

        <div className="relative mx-auto max-w-[1440px] px-4 pt-20 pb-20 md:px-16 md:pt-32 md:pb-32">
          <div className="max-w-3xl">
            <h1 className="mb-6 font-headline text-4xl uppercase leading-none md:text-7xl">
              Yılların Birikimi, Geleceğin Estetiği
            </h1>
            <p className="max-w-2xl font-body text-lg text-on-surface-variant">
              Tır, kamyon ve kamyonetler için kendi atölyemizde yüksek dayanımlı fiberglas rüzgarlık imalatı yapıyoruz.
              Bunun yanında, ihtiyacınız olan her türlü aksesuarı temin edip montajını üstleniyor, tamamen size özel
              tasarladığımız baskılı tozlukları aracınıza uyguluyoruz.
            </p>
          </div>
        </div>
      </header>

      {/* Workshop story */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-16 md:py-32">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border-zinc">
              <Image
                src="/images/about-2.png"
                alt="Atölyede fiberglas kalıba elle kırmızı gelcoat uygulanması"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full border-t border-primary/30 bg-anthracite/80 p-8 backdrop-blur-md">
                <h3 className="font-headline text-2xl">RÜZGARLIK &amp; AKSESUAR</h3>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="space-y-8 md:pl-12">
            <div>
              <h2 className="mb-4 font-label text-sm uppercase tracking-[0.2em] text-primary">Hikayemiz</h2>
              <h3 className="mb-6 font-headline text-3xl leading-tight md:text-5xl">İMALAT &amp; MONTAJ</h3>
              <div className="space-y-4 font-body text-base text-on-surface-variant">
                <p>
                  {siteConfig.name}&apos;te ürettiğimiz her fiberglas rüzgarlığın yolculuğu, atölyemizde hazırlanan
                  özel kalıplarla başlar. Ağır vasıtaların rüzgar direncini azaltarak yakıt tasarrufu sağlayan
                  tasarımlarımızı, yılların getirdiği el yatırması ustalığı ve titizlikle şekillendiriyoruz.
                </p>
                <p>
                  Fiberglas imalatının yanı sıra, tır, kamyon ve kamyonetleriniz için temin ettiğimiz en kaliteli
                  aksesuarların montajını da gerçekleştiriyoruz. Sürüş tarzınızı yansıtacak kişiye özel yazılı ve
                  logolu tozluk tasarımlarını, sizin isteklerinize göre hazırlayıp aracınıza uyguluyoruz.
                </p>
              </div>
            </div>
            <div className="border-t border-border-zinc pt-8">
              <div className="font-headline text-3xl font-bold text-primary">100%</div>
              <div className="font-label text-sm uppercase text-on-surface-variant">Yerli Üretim</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* USP grid */}
      <section className="border-y border-border-zinc bg-surface-container-lowest py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {aboutUsp.map((item, index) => {
              const Icon = uspIcons[item.icon as keyof typeof uspIcons];
              return (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="group relative h-full overflow-hidden border border-border-zinc bg-surface p-10 transition-all duration-300 hover:border-primary/50">
                    <div className="absolute top-0 left-0 h-full w-1 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0" />
                    <Icon className="mb-6 text-primary" size={36} strokeWidth={2} />
                    <h4 className="mb-4 font-headline text-2xl">{item.title}</h4>
                    <p className="font-body text-base text-on-surface-variant">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-16 md:py-32">
        <Reveal className="mb-12">
          <h2 className="mb-4 font-label text-sm uppercase tracking-[0.2em] text-primary">Teknik Gösterim</h2>
          <h3 className="font-headline text-3xl md:text-5xl">Mükemmellik Galerisi</h3>
        </Reveal>
        <Gallery items={aboutGalleryItems} />
      </section>
    </>
  );
}
