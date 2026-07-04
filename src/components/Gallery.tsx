"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

type GalleryItem = {
  caption: string;
  aspect: string;
};

export function Gallery({ items }: { items: readonly GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const next = useCallback(() => setActiveIndex((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? i : (i - 1 + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, next, prev]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item, index) => (
          <button
            key={item.caption}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded border border-border-zinc ${item.aspect}`}
          >
            <PlaceholderImage
              caption={item.caption}
              className="h-full w-full rounded-none border-0 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition-opacity group-hover:opacity-100">
              <ZoomIn className="text-white" size={28} />
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4"
          >
            <button type="button" onClick={close} aria-label="Kapat" className="absolute top-8 right-8 text-white">
              <X size={32} />
            </button>
            <div className="flex max-h-[70vh] w-full max-w-5xl items-center justify-center">
              <PlaceholderImage
                caption={items[activeIndex].caption}
                className="aspect-video w-full rounded border-border-zinc"
              />
            </div>
            <div className="mt-8 flex gap-4">
              <button
                type="button"
                onClick={prev}
                aria-label="Önceki görsel"
                className="rounded border border-border-zinc p-4 text-white hover:bg-white/10"
              >
                <ChevronLeft />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Sonraki görsel"
                className="rounded border border-border-zinc p-4 text-white hover:bg-white/10"
              >
                <ChevronRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
