// Merkezi içerik/konfigürasyon dosyası.
// Aşağıda "TODO" ile işaretlenen alanlar PRD_2.md Bölüm 7'de listenen,
// firma tarafından sağlanması beklenen gerçek verilerdir (telefon, adres,
// fotoğraflar, sayısal veriler). Bunlar bilinçli olarak placeholder
// bırakılmıştır — gerçek veriler geldiğinde sadece bu dosya güncellenmelidir.

export const siteConfig = {
  name: "ESEN TİCARET",
  legalName: "Esen Ticaret",
  foundedYear: 1971,
  tagline: "Yolların Gücüne Estetik Katıyoruz.",
  description:
    "Esen Ticaret — 1971'den beri ağır vasıtalar için fiberglas rüzgarlık imalatı, tozluk ve aksesuar temini/montajı.",
  url: "https://www.esenticaret.com", // TODO: gerçek domain belirlenince güncellenecek
};

export const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/iletisim", label: "İletişim" },
] as const;

// TODO: Gerçek telefon numarası, e-posta ve adres bilgisi sağlandığında
// güncellenecek (bkz. PRD_2.md Bölüm 7).
export const contactInfo = {
  phonePrimary: "+90 (553) 579 78 66 -> Hamza ESER",
  phoneSecondary: "+90 (537) 428 25 80 -> Hacı Ali ESER",
  email: "info@esenticaret.com",
  addressLine: "Karatay Sanayi Oğuz Eli Caddesi, Başlamış Sk. No:1, 42000 Karatay/Konya",
  workingHours: "Pazartesi – Cumartesi: 08:00 – 19:00",
  mapEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.0935689772838!2d32.50205791747658!3d37.90741452257367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d08f57117c58ff%3A0x9198631a0608ed74!2sDikkat%20Reklam%20ve%20Ara%C3%A7%20Kaplama!5e1!3m2!1str!2str!4v1783170238251!5m2!1str!2str" as string | null,
};

export const homeHighlights = [
  {
    icon: "wind",
    text: "Özel İmalat Yüksek Dayanaklı Rüzgarlık Üretimi ve Montajı",
  },
  {
    icon: "sparkles",
    text: "Geniş Aksesuar ve Modifikasyon Yelpazesi",
  },
  {
    icon: "shield",
    text: "Sade ve Kişiye Özel Tasarım Tozluk Montajı",
  },
] as const;

export const homeServiceCards = [
  {
    title: "Rüzgarlık İmalatı",
    description:
      "Ağır vasıta araçlar için kendi atölyemizde imal ettiğimiz, yüksek dayanıklı fiberglas rüzgarlıkların üretimi ve montajı.",
    href: "/hizmetler#ruzgarlik-imalati",
    image: "/images/hero-2.png",
    imageAlt: "Atölyede elde cilalanan kırmızı fiberglas rüzgarlık",
  },
  {
    title: "Tozluk & Aksesuar Montajı",
    description:
      "Krom aksesuar, aydınlatma ve kişiye özel tasarım tozluklarda tedarik ve titiz usta işçiliğiyle montaj hizmeti.",
    href: "/hizmetler#tozluk-aksesuar-montaji",
    image: "/images/hero-3.png",
    imageAlt: "Parlak krom ağır vasıta jant kapağı",
  },
] as const;

export const aboutUsp = [
  {
    icon: "factory",
    title: "Kendi Bünyemizde İmalat",
    description:
      "Kalıp dökümünden son boya ve cila aşamasına kadar fiberglas rüzgarlık üretimimizin her adımı kendi atölyemizde gerçekleşir.",
  },
  {
    icon: "hammer",
    title: "Usta İşçiliği & Montaj",
    description:
      "Yılların getirdiği tecrübeyle hem kendi ürettiğimiz rüzgarlıkların hem de temin ettiğimiz tozluk ve aksesuarların montajını titizlikle yapıyoruz.",
  },
  {
    icon: "shield-check",
    title: "Dayanıklı Malzeme",
    description:
      "Ağır vasıtaların zorlu yol ve hava şartları düşünülerek üretilen fiberglas parçalarımız çatlamaya ve kırılmaya karşı ekstra dirençlidir.",
  },
] as const;

export const processSteps = [
  { title: "Talep", description: "Aracınız ve ihtiyacınıza dair talebinizi telefon ile veya ziyaret ederek iletin." },
  { title: "Değerlendirme", description: "Araç modeline ve talebe uygun rüzgarlık/aksesuar seçenekleri değerlendirilir." },
  { title: "Uygulama", description: "İmalat (rüzgarlık) ya da tedarik (tozluk/aksesuar) sonrası atölyemizde montaj yapılır." },
  { title: "Teslim", description: "Kalite kontrolü tamamlanan araç sahibine teslim edilir." },
] as const;

export const windshieldBrands = ["Scania", "Volvo", "Mercedes-Benz", "MAN", "DAF"] as const;

export const chromeAccessoryFeatures = [
  "Paslanmaz çelik krom kaplamalar (temin + montaj)",
  "Koruma barları ve tampon aksesuarları (temin + montaj)",
  "Jant kapakları ve süs modelleri (temin + montaj)",
] as const;

export const customDesignFeatures = [
  "Aracınıza özel yazılı/logolu tozluk tasarımı (temin + montaj)",
  "Kişiye özel aksesuar kombinasyonları (temin + montaj)",
] as const;

// TODO: Gerçek atölye/ürün fotoğrafları sağlandığında bu placeholder'ların
// yerine /public altındaki kalıcı görseller (next/image ile) kullanılacak.
export const aboutGalleryItems = [
  { caption: "Atölyede kalıp hazırlığı — fotoğraf eklenecek", aspect: "aspect-square" },
  { caption: "Rüzgarlık cila/parlatma süreci — fotoğraf eklenecek", aspect: "aspect-[3/4] md:row-span-2" },
  { caption: "Montaj öncesi ölçüm — fotoğraf eklenecek", aspect: "aspect-square" },
  { caption: "Tamamlanmış rüzgarlıklar — fotoğraf eklenecek", aspect: "aspect-square" },
  { caption: "Fiberglas döküm süreci — fotoğraf eklenecek", aspect: "aspect-square" },
  { caption: "Montaj sonrası teslim edilen araçlar — fotoğraf eklenecek", aspect: "aspect-video md:col-span-2" },
] as const;
