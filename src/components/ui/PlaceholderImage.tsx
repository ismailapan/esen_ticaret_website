import { ImageOff } from "lucide-react";
import type { ReactNode } from "react";

type PlaceholderImageProps = {
  /** Ne tür bir görselin bu alana gelmesi gerektiğini açıklar (firma tarafından sağlanacak). */
  caption: string;
  className?: string;
  icon?: ReactNode;
};

/**
 * Gerçek firma fotoğrafları sağlanana kadar kullanılan yer tutucu.
 * PRD_2.md Bölüm 5.4 — Stitch'in geçici Google CDN görselleri yerine
 * /public altına konacak kalıcı görsellerle değiştirilecek.
 */
export function PlaceholderImage({ caption, className = "", icon }: PlaceholderImageProps) {
  return (
    <div
      className={`carbon-texture relative flex flex-col items-center justify-center gap-3 overflow-hidden border border-border-zinc bg-surface-container-highest text-center ${className}`}
    >
      <div className="text-primary">{icon ?? <ImageOff strokeWidth={1.5} size={32} />}</div>
      <p className="max-w-[80%] font-label text-[11px] uppercase tracking-widest text-on-surface-variant">
        {caption}
      </p>
    </div>
  );
}
