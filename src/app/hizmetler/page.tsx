import type { Metadata } from "next";
import Link from "next/link";
import { Bolt, CheckCircle2, Factory } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import {
  chromeAccessoryFeatures,
  customDesignFeatures,
  processSteps,
  siteConfig,
  windshieldBrands,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Fiberglas rüzgarlık imalatı ve montajı, tozluk & aksesuar temin/montaj hizmetleri ile talep-değerlendirme-uygulama-teslim süreç akışımız.",
};

const accessoryCards = [
  {
    title: "Fiberglas Rüzgarlıklar",
    features: [
      "Çatlamaya karşı dirençli birinci sınıf fiberglas yapı (kendi imalatımız)",
      "Rüzgar direncini azaltarak uzun yolda yakıt maliyetlerini düşürür",
    ],
  },
  {
    title: "Krom & Dış Aksesuarlar",
    features: chromeAccessoryFeatures,
  },
  {
    title: "Kişiye Özel Tasarımlar",
    features: customDesignFeatures,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 md:px-16">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
          <div>
            <span className="mb-4 block font-label text-sm tracking-widest text-primary uppercase">
              HİZMETLERİMİZ &amp; ÇÖZÜMLERİMİZ
            </span>
            <h1 className="mb-6 font-headline text-4xl leading-tight uppercase md:text-6xl">
              Aracınıza Değer Katan Çözümler
            </h1>
            <p className="max-w-xl font-body text-lg text-on-surface-variant">
              Esen Ticaret olarak tır, kamyon ve kamyonetleriniz için kendi atölyemizde yüksek dayanımlı fiberglas
              rüzgarlıklar imal ediyoruz. Bunun yanında, zengin ürün yelpazemizle her türlü aksesuarın temin +
              montajını gerçekleştiriyor, tamamen sizin tarzınıza özel yazılı/logolu tozluk tasarımları
              uyguluyoruz.
            </p>
          </div>
          <Reveal className="relative">
            <div className="absolute -inset-4 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative flex aspect-square items-center justify-center rounded-xl border border-border-zinc bg-surface-container p-8">
              <h2 className="text-center font-headline text-4xl leading-none font-bold tracking-tighter text-primary uppercase opacity-90 md:text-6xl">
                ESEN
                <br />
                TİCARET
              </h2>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Windshield manufacturing */}
      <section id="ruzgarlik-imalati" className="relative overflow-hidden border-t border-border-zinc bg-surface-container-low py-24 md:py-32">
        <div className="carbon-texture absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-[1440px] px-4 md:px-16">
          <div className="flex flex-col gap-16 md:flex-row">
            <Reveal className="w-full md:w-1/2">
              <h2 className="mb-8 font-headline text-3xl md:text-5xl">
                Fiberglas <span className="text-primary">Rüzgarlık</span> Üretimi ve Montajı
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary">
                    <Bolt className="text-white" size={22} />
                  </div>
                  <div>
                    <h4 className="mb-2 font-headline text-xl">Yakıt Optimizasyonu</h4>
                    <p className="text-on-surface-variant">
                      Kendi atölyemizde ürettiğimiz aerodinamik rüzgarlıklar, aracınızın rüzgar direncini
                      azaltarak özellikle uzun yolda yakıt tasarrufuna katkı sağlar.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg border border-border-zinc bg-surface-container-highest">
                    <Factory className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="mb-2 font-headline text-xl">Çoklu Marka Uyumluluğu</h4>
                    <p className="text-on-surface-variant">
                      {windshieldBrands.join(", ")} gibi lider markalar için hassas kalıplar; kendi imalatımız
                      rüzgarlıkların titiz montajı.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="w-full md:w-1/2">
              <BeforeAfterSlider
                beforeImage="/images/services-1.png"
                beforeAlt="Fiberglas rüzgarlık takılmamış standart ağır vasıta kabini"
                afterImage="/images/services-2.png"
                afterAlt="Kırmızı-siyah aerodinamik fiberglas rüzgarlık takılmış ağır vasıta kabini"
                afterImageClassName="-scale-x-100"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Accessories */}
      <section id="tozluk-aksesuar-montaji" className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-4 md:px-16">
          <Reveal className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-6 font-headline text-3xl uppercase md:text-5xl">
              Premium Aksesuarlar ve <span className="text-primary">Kişiselleştirme</span>
            </h2>
            <p className="font-body text-lg text-on-surface-variant">
              Kendi imalatımız fiberglas rüzgarlıkların yanı sıra, aracınızı yollarda benzersiz kılacak en kaliteli
              tozluk ve aksesuar çeşitlerini temin edip montajını üstleniyoruz.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {accessoryCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.1}>
                <div className="group h-full overflow-hidden rounded-lg border border-border-zinc bg-surface-container transition-all duration-300 hover:border-primary">
                  <div className="p-8">
                    <div className="mb-6 h-1 w-12 bg-primary transition-all duration-300 group-hover:w-full" />
                    <h3 className="mb-3 font-headline text-2xl">{card.title}</h3>
                    <ul className="space-y-2 font-body text-sm text-on-surface-variant">
                      {card.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 flex-shrink-0 text-primary" size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process flow */}
      <section className="border-t border-border-zinc bg-surface-container-lowest py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-4 md:px-16">
          <Reveal className="mb-16 text-center">
            <h2 className="font-headline text-3xl md:text-5xl">Süreç Akışımız</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.1}>
                <div className="h-full rounded-lg border border-border-zinc bg-surface p-8">
                  <div className="mb-4 font-label text-sm text-primary">0{index + 1}</div>
                  <h3 className="mb-2 font-headline text-xl">{step.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1440px] px-4 py-24 md:px-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-xl bg-surface-container p-12 text-center">
            <div className="absolute top-0 left-0 h-full w-1 bg-primary" />
            <h2 className="mb-4 font-headline text-3xl uppercase md:text-5xl">
              Yol Arkadaşınızı Yollara Hazırlayın
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-on-surface-variant">
              {siteConfig.name} güvencesiyle, kendi imalatımız fiberglas rüzgarlıkları ve titiz usta işçiliğini bir
              araya getiriyoruz. Aracınız için bizimle iletişime geçin.
            </p>
            <Link
              href="/iletisim"
              className="glow-hover inline-flex items-center justify-center rounded bg-primary px-8 py-4 font-label text-sm text-on-primary transition-all"
            >
              İletişime Geçin
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
