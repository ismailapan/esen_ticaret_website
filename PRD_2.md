# PRD — Esen Ticaret Kurumsal Web Sitesi (Claude Code Devir Dosyası)
 
**Doküman Versiyonu:** 2.0 (Claude Code için konsolide edilmiş sürüm)
**Tarih:** 04.07.2026
**Not:** Bu doküman, Google Stitch ile üretilen ilk prototipin incelenmesi ve
Next.js'e kısmi geçiş denemesinden çıkan öğrenmeleri içerir. Claude Code bu
dosyayı tek referans kaynağı olarak kullanıp projeyi sıfırdan/temiz bir
şekilde inşa edebilir.
 
---
 
## 1. Firma & İş Modeli
 
**Firma:** Esen Ticaret
**Sektör:** Ağır vasıta (kamyon/tır) aksesuar ve fiberglas rüzgarlık
**Kuruluş:** 1971
 
**KRİTİK AYRIM — bu ayrım tüm site metinlerinde tutarlı olmalı:**
 
| Ürün | İş Modeli |
|---|---|
| **Fiberglas Rüzgarlık** | Firma **kendi atölyesinde üretir/imal eder** |
| **Tozluk** | Firma **başka yerden temin eder**, sadece **montajını** yapar |
| **Diğer aksesuarlar** (krom parça, aydınlatma vb.) | Temin + montaj |
 
⚠️ Metinlerde asla "tozluk üretiyoruz" ya da genel olarak "üretim yapıyoruz" gibi
ayrım gözetmeyen ifadeler kullanılmamalı. Her zaman "rüzgarlık imalatı" ve
"tozluk/aksesuar montajı" ayrı ayrı belirtilmeli.
 
---
 
## 2. Bilgi Mimarisi (Sitemap) — 4 Sayfa
 
```
/               Ana Sayfa
/hakkimizda     Kurumsal (tarihçe, misyon-vizyon, değerler)
/hizmetler      Rüzgarlık imalatı + Tozluk/aksesuar montajı + süreç akışı
/iletisim       Form + harita + iletişim bilgileri
```
 
- Sertifika bölümü **yok** (firma talebiyle kaldırıldı).
- Kariyer/açık pozisyonlar **yok** (firma talebiyle kaldırıldı).
- WhatsApp CTA/floating button **eklenmeyecek** — bu konuda ayrı bir karar
  bekleniyor, siteye hiçbir yerde WhatsApp elementi koyulmamalı.
---
 
## 3. Tasarım Sistemi (Google Stitch'ten miras — DEĞİŞTİRİLMEDEN KULLANILACAK)
 
Stitch ile üretilen `DESIGN.md` dosyası (repo kök dizininde mevcut) tasarım
sisteminin tek doğru kaynağıdır. Özet:
 
- **Vibe:** "Industrial Power Meets Modern Aesthetics" — koyu tema (dark-mode-by-default),
  kırmızı vurgularla yüksek kontrast.
- **Renkler:** Primary Red `#E31E24`, Deep Burgundy `#4A0E17`/`#8B0000`, Accent Coral `#FF4D4D`,
  Anthracite `#1A1A1A`, Dark Slate `#121212`. Tam token listesi `DESIGN.md`'de.
- **Tipografi:** Başlıklar — Space Grotesk (geometrik, teknik); Gövde — Hanken Grotesk;
  Teknik etiketler/sayaçlar — JetBrains Mono.
- **Shape:** Butonlar/inputlar 4px (0.25rem) radius; kartlar 8px (0.5rem).
- **Motion:** Hızlı, "snapped" geçişler; hover'da glow efekti (elevation değil).
Bu tasarım sistemini olduğu gibi koru — yeniden tasarım yapmaya gerek yok,
sadece doğru teknik altyapıyla (bkz. Bölüm 4) uygula.
 
---
 
## 4. Teknoloji Yığını
 
| Katman | Teknoloji |
|---|---|
| Framework | Next.js 16 (App Router), TypeScript |
| Stil | Tailwind CSS v4 (`@theme` ile DESIGN.md tokenları) |
| Animasyon | Framer Motion (scroll-reveal, sayaç animasyonu) |
| İkon | lucide-react |
| Form | React state + `/api/contact` route (ileride Resend/Formspree entegre edilecek) |
 
**Kesinlikle kaçınılacaklar:**
- `cdn.tailwindcss.com` script'i (production için uygun değil)
- Sayfa içi `href="#"` linkler — her navigasyon gerçek Next.js route/`<Link>` olmalı
- `document.getElementById(...)` ile DOM'a doğrudan erişip null-check yapmadan
  event listener bağlamak (önceki prototipte formun tamamen çökmesine sebep oldu)
---
 
## 5. Önceki Prototipte (Stitch HTML export) Tespit Edilen Buglar — TEKRARLANMAMALI
 
1. **Navigasyon kırık:** Tüm menü linkleri `href="#"` idi, sayfalar arası geçiş
   yoktu. → Next.js'te gerçek route + `<Link>` ile çözülecek.
2. **İletişim formu çöküyordu:** `getElementById('inquiryForm')` var olmayan bir
   elementi arıyordu, `null.addEventListener` hatası tüm script'i durduruyordu.
   → React controlled form + state ile yeniden yazılmalı.
3. **WhatsApp/floating CTA'lar boştu:** Sadece yorum satırı vardı, gerçek buton
   yoktu. → Şimdilik hiç eklenmeyecek (bkz. Bölüm 2).
4. **Görseller Google'ın geçici AI-önizleme CDN'indeydi**
   (`lh3.googleusercontent.com/aida-public/...`) — kalıcı/production için
   güvenilir değil. → Gerçek firma fotoğrafları temin edilip `/public` altında
   veya bir CDN'de kalıcı olarak barındırılmalı.
5. **Marka adı/metin tutarsızlıkları:** Header'da "esEN TİCARET" yazım hatası,
   bir görsel alt-metninde yanlışlıkla "Fibercore Industrial" adı geçiyordu
   (Stitch'in genel şablonundan kalma). → Tüm metinler "ESEN TİCARET" ve
   gerçek iş tanımına göre kontrol edilmeli.
6. **SEO meta etiketleri eksikti:** Hiçbir sayfada `<meta name="description">`
   yoktu. → Next.js `Metadata` API ile her sayfaya özel title/description eklenmeli.
7. **Tozluk/rüzgarlık ayrımı yoktu:** Metinler ikisini de "üretiyoruz" diye
   tek cümlede karıştırıyordu (bkz. Bölüm 1).
---
 
## 6. Sayfa Bazlı İçerik Notları
 
### Ana Sayfa
- Hero: gerçek fotoğraf (kamyon + rüzgarlık) + güçlü başlık ("Yolların Gücüne
  Estetik Katıyoruz" mevcut sloganı korunabilir).
- Sayaç bloğu: üretilen rüzgarlık adedi, yıllık tecrübe, aksesuar kategorisi
  sayısı (gerçek rakamlarla güncellenmeli, şu an placeholder).
- Hizmet önizleme: Rüzgarlık İmalatı / Tozluk-Aksesuar Montajı olarak 2 ayrı kart.
### Hakkımızda
- Tarihçe (1971'den bugüne), misyon-vizyon, değerler (kendi atölyesinde imalat,
  usta işçiliği, dayanıklı malzeme). Sertifika/kariyer YOK.
### Hizmetler
- İki net bölüm: (1) Rüzgarlık İmalatı — marka uyumluluğu (Scania, Volvo,
  Mercedes vb.), (2) Tozluk & Aksesuar Montajı — tedarik + montaj vurgusu.
- Süreç akışı: Talep → Değerlendirme → Uygulama → Teslim.
- Öncesi/Sonrası karşılaştırma bileşeni (before/after slider) — sadece rüzgarlık
  montajı için, gerçek fotoğraflarla.
### İletişim
- Form (Ad, Telefon, Araç Modeli, Talep) + gerçek adres/harita + gerçek telefon/e-posta.
- ⚠️ Önceki denemede harita rastgele bir örnek adrese ("Dikkat Reklam ve Araç
  Kaplama") işaret ediyordu — gerçek firma adresiyle değiştirilmeli.
---
 
## 7. Eksik/Netleştirilmesi Gereken Girdiler (Claude Code'a başlamadan önce sağlanmalı)
 
- [ ] Gerçek firma fotoğrafları (atölye, ürünler, öncesi/sonrası örnekler)
- [ ] Gerçek telefon numarası, e-posta adresi
- [ ] Gerçek işyeri adresi / Google Maps konumu
- [ ] Gerçek sayısal veriler (kaç yıllık tecrübe, kaç rüzgarlık üretildi vb.)
- [ ] Logo (varsa) — yoksa mevcut metin-tabanlı "ESEN TİCARET" logosu kullanılabilir
---
 
## 8. Kabul Kriterleri
 
- [ ] 4 sayfa da gerçek route'larla birbirine bağlı, tüm nav linkleri çalışıyor
- [ ] İletişim formu hatasız çalışıyor, gönderim sonrası geri bildirim gösteriyor
- [ ] Rüzgarlık = imalat, Tozluk = temin+montaj ayrımı tüm sayfalarda tutarlı
- [ ] WhatsApp/floating CTA hiçbir yerde yok
- [ ] Sertifika ve Kariyer bölümleri yok
- [ ] Her sayfada meta title + description mevcut
- [ ] `npm run build` hatasız tamamlanıyor
- [ ] Mobil, tablet, masaüstü responsive
- [ ] `prefers-reduced-motion` destekleniyor
---
 
*Bu doküman, önceki `PRD.md` (Stitch tarafından üretilen) ve `DESIGN.md`
dosyalarıyla birlikte okunmalıdır — DESIGN.md'deki tasarım tokenları hâlâ
geçerlidir ve değiştirilmemiştir.*
 