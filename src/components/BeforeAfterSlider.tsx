"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type BeforeAfterSliderProps = {
  beforeImage: string;
  beforeAlt: string;
  afterImage: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** İki fotoğrafın çekim açısı farklıysa, aracın kabinini aynı tarafa hizalamak için ek sınıf (ör. yatay ayna). */
  afterImageClassName?: string;
};

export function BeforeAfterSlider({
  beforeImage,
  beforeAlt,
  afterImage,
  afterAlt,
  beforeLabel = "STANDART",
  afterLabel = "AERODİNAMİK",
  afterImageClassName = "",
}: BeforeAfterSliderProps) {
  const [percentage, setPercentage] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  function updateFromClientX(clientX: number) {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const rawPercentage = ((clientX - rect.left) / rect.width) * 100;
    setPercentage(Math.min(100, Math.max(0, rawPercentage)));
  }

  return (
    <div>
      <div
        ref={containerRef}
        className="relative h-[400px] w-full touch-none overflow-hidden rounded-xl border border-border-zinc shadow-2xl select-none md:h-[500px]"
        onPointerDown={(e) => {
          isDragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!isDragging.current) return;
          updateFromClientX(e.clientX);
        }}
        onPointerUp={(e) => {
          isDragging.current = false;
          e.currentTarget.releasePointerCapture(e.pointerId);
        }}
      >
        <Image
          src={beforeImage}
          alt={beforeAlt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${percentage}%)` }}>
          <Image
            src={afterImage}
            alt={afterAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${afterImageClassName}`}
          />
        </div>
        <div
          className="absolute top-0 bottom-0 z-10 w-1 cursor-ew-resize bg-primary"
          style={{ left: `${percentage}%` }}
        >
          <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_0_15px_rgba(227,30,36,0.4)]">
            <MoveHorizontal size={16} className="text-white" />
          </div>
        </div>
        <div className="absolute top-4 left-4 rounded border border-border-zinc bg-background/80 px-3 py-1 font-label text-sm">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 rounded border border-primary bg-primary/80 px-3 py-1 font-label text-sm">
          {afterLabel}
        </div>
      </div>
      <p className="mt-6 text-center font-label text-sm text-on-surface-variant uppercase tracking-widest italic">
        Aerodinamiği karşılaştırmak için kaydırın
      </p>
    </div>
  );
}
