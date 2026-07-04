import type { Metadata } from "next";
import { Clock, MapPin, Phone } from "lucide-react";
import { contactInfo, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Fiberglas rüzgarlık ve aksesuar talepleriniz için Esen Ticaret ile iletişime geçin: telefon, adres ve konum.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1440px] px-4 py-20 md:px-16">
      <header className="mb-16">
        <h1 className="mb-4 font-headline text-4xl md:text-6xl">
          Hızlı <span className="text-primary">İletişim</span>
        </h1>
        <p className="max-w-2xl font-body text-lg text-on-surface-variant">
          Aracınız için en uygun rüzgarlık ya da aksesuar çözümünü öğrenmek için bizimle hemen iletişime geçin.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Contact info */}
        <div className="flex flex-col gap-4 lg:col-span-5">
          <div className="group rounded-xl border border-t-primary/30 border-border-zinc bg-surface-container-low p-6 transition-colors hover:border-primary/50">
            <MapPin className="mb-4 text-primary transition-transform group-hover:scale-110" size={28} />
            <h3 className="mb-1 font-headline text-xl">Konum</h3>
            <p className="font-body text-sm text-on-surface-variant">{contactInfo.addressLine}</p>
          </div>
          <div className="group rounded-xl border border-t-primary/30 border-border-zinc bg-surface-container-low p-6 transition-colors hover:border-primary/50">
            <Phone className="mb-4 text-primary transition-transform group-hover:scale-110" size={28} />
            <h3 className="mb-1 font-headline text-xl">Telefon</h3>
            <p className="font-body text-sm text-on-surface-variant">{contactInfo.phonePrimary}</p>
            <p className="font-body text-sm text-on-surface-variant">{contactInfo.phoneSecondary}</p>
          </div>
          <div className="group rounded-xl border border-t-primary/30 border-border-zinc bg-surface-container-low p-6 transition-colors hover:border-primary/50">
            <Clock className="mb-4 text-primary transition-transform group-hover:scale-110" size={28} />
            <h3 className="mb-1 font-headline text-xl">Çalışma Saatleri</h3>
            <p className="font-body text-sm text-on-surface-variant">{contactInfo.workingHours}</p>
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-7">
          <div className="relative min-h-[400px] w-full overflow-hidden rounded-xl border border-border-zinc lg:h-full lg:min-h-[520px]">
            {contactInfo.mapEmbedSrc ? (
              <iframe
                src={contactInfo.mapEmbedSrc}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0 h-full w-full grayscale contrast-125 invert-[0.9]"
              />
            ) : (
              <div className="carbon-texture absolute inset-0 flex flex-col items-center justify-center gap-3 bg-surface-container-high text-center">
                <MapPin className="text-primary/70" size={32} strokeWidth={1.5} />
                <p className="max-w-[70%] font-label text-xs uppercase tracking-widest text-on-surface-variant/70">
                  Google Maps konumu eklenecek
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <p className="mt-12 font-label text-xs text-on-surface-variant/60">
        {siteConfig.name} © {new Date().getFullYear()}
      </p>
    </div>
  );
}
