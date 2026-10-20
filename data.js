const dersData = [
    // ==========================================
    // 5. SINIF MÜFREDATI (36 HAFTA)
    // ==========================================
    {
        id: "5-hafta-1",
        sinif: "5",
        hafta: 1,
        tarih: "07 - 11 Eylül 2026",
        unite: "Bilişim Teknolojileri ve Günlük Hayat",
        konu: "Bilişim Teknolojileri ve Okuryazarlığı",
        kazanim: "Bilişim teknolojilerinin temel kavramlarını ve günlük hayattaki önemini açıklar.",
        aciklama: "BT kavramı, donanım, yazılım, veri, bilgi kavramları ve günlük yaşamda kullanımı.",
        link: "#"
    },
    {
        id: "5-hafta-2",
        sinif: "5",
        hafta: 2,
        tarih: "14 - 18 Eylül 2026",
        unite: "Bilişim Teknolojileri ve Günlük Hayat",
        konu: "Bilgisayar Sistemleri",
        kazanim: "Bilgisayar sisteminin temel bileşenlerini ve işlevlerini tanır.",
        aciklama: "Giriş ve çıkış birimleri, harici ve dahili donanım elemanları.",
        link: "#"
    },
    {
        id: "5-hafta-3",
        sinif: "5",
        hafta: 3,
        tarih: "21 - 25 Eylül 2026",
        unite: "Bilişim Teknolojileri ve Günlük Hayat",
        konu: "İşletim Sistemleri ve Dosya Yönetimi",
        kazanim: "İşletim sistemlerinin görevlerini ve dosya/klasör yönetimini kavrar.",
        aciklama: "Pardus Linux, Windows, dosya uzantıları ve klasör hiyerarşisi organizasyonu.",
        link: "#"
    },
    {
        id: "5-hafta-4",
        sinif: "5",
        hafta: 4,
        tarih: "28 Eylül - 02 Ekim 2026",
        unite: "Etik ve Güvenlik",
        konu: "Dijital Yurttaşlık ve İnternet Etiği",
        kazanim: "Dijital yurttaşlık boyutlarını ve dijital ortamda etik kuralları uygular.",
        aciklama: "e-Devlet, EBA, siber zorbalık, dijital ayak izi ve telif hakları.",
        link: "#"
    },
    {
        id: "5-hafta-5",
        sinif: "5",
        hafta: 5,
        tarih: "05 - 09 Ekim 2026",
        unite: "Etik ve Güvenlik",
        konu: "Siber Güvenlik ve Güvenli İnternet",
        kazanim: "Kişisel verilerin güvenliğini sağlar ve güçlü şifre oluşturur.",
        aciklama: "Zararlı yazılımlar (virüs, trojan), kimlik avı, güçlü parola oluşturma teknikleri.",
        link: "#"
    },
    {
        id: "5-hafta-6",
        sinif: "5",
        hafta: 6,
        tarih: "12 - 16 Ekim 2026",
        unite: "İletişim, Araştırma ve İş Birliği",
        konu: "İnternet Arama Motorları ve Bilgi Arama",
        kazanim: "İnternette doğru ve güvenilir bilgiye ulaşma stratejilerini kullanır.",
        aciklama: "Arama motorları, anahtar kelime seçimi, arama operatörleri ve bilginin doğruluğu.",
        link: "#"
    },
    {
        id: "5-hafta-7",
        sinif: "5",
        hafta: 7,
        tarih: "19 - 23 Ekim 2026",
        unite: "İletişim, Araştırma ve İş Birliği",
        konu: "İletişim Araçları ve E-Posta",
        kazanim: "E-posta servisini ve iletişim araçlarını etik kurallara uygun kullanır.",
        aciklama: "E-posta hesabı yönetimi, konu başlığı, dosya ekleme ve görgü kuralları (Netiket).",
        link: "#"
    },
    {
        id: "5-hafta-8",
        sinif: "5",
        hafta: 8,
        tarih: "26 - 30 Ekim 2026",
        unite: "Ürün Oluşturma",
        konu: "Kelime İşlemci Programları - 1",
        kazanim: "Kelime işlemci programında temel metin düzenleme işlemlerini yapar.",
        aciklama: "LibreOffice Writer / MS Word kullanımı, metin biçimlendirme, yazı tipi ve hizalama.",
        link: "#"
    },
    {
        id: "5-hafta-9",
        sinif: "5",
        hafta: 9,
        tarih: "02 - 06 Kasım 2026",
        unite: "Ürün Oluşturma",
        konu: "Kelime İşlemci Programları - 2",
        kazanim: "Görsel, tablo ve sayfa düzeni ögelerini dokümana ekler.",
        aciklama: "Tablo oluşturma, resim ve şekil ekleme, kenarlıklar ve sayfa yapısı.",
        link: "#"
    },
    {
        id: "5-hafta-10",
        sinif: "5",
        hafta: 10,
        tarih: "09 - 13 Kasım 2026",
        unite: "1. Dönem Ara Tatili",
        konu: "Ara Tatil Etkinlikleri ve Tekrar",
        kazanim: "Öğrenilen konuların genel değerlendirmesi ve serbest uygulama.",
        aciklama: "1. Dönem Ara Tatili (10 - 14 Kasım 2026)",
        link: "#"
    },
    {
        id: "5-hafta-11",
        sinif: "5",
        hafta: 11,
        tarih: "16 - 20 Kasım 2026",
        unite: "Ürün Oluşturma",
        konu: "Sunum Programları - 1",
        kazanim: "Etkili bir sunum hazırlamak için temel ilkeleri kavrar.",
        aciklama: "LibreOffice Impress / PowerPoint arayüzü, slayt düzenleri ve metin ekleme.",
        link: "#"
    },
    {
        id: "5-hafta-12",
        sinif: "5",
        hafta: 12,
        tarih: "23 - 27 Kasım 2026",
        unite: "Ürün Oluşturma",
        konu: "Sunum Programları - 2",
        kazanim: "Sunumlarına animasyon, geçiş ve görsel ögeler ekler.",
        aciklama: "Slayt geçişleri, nesne animasyonları, görsel ve video ekleme teknikleri.",
        link: "#"
    },
    {
        id: "5-hafta-13",
        sinif: "5",
        hafta: 13,
        tarih: "30 Kasım - 04 Aralık 2026",
        unite: "Problem Çözme ve Programlama",
        konu: "Problem Çözme Kavramları ve Günlük Hayat",
        kazanim: "Problem çözme sürecindeki temel adımları açıklar.",
        aciklama: "Problem nedir, problemi anlama, çözüm yolları geliştirme ve sabit/değişkenler.",
        link: "#"
    },
    {
        id: "5-hafta-14",
        sinif: "5",
        hafta: 14,
        tarih: "07 - 11 Aralık 2026",
        unite: "Problem Çözme ve Programlama",
        konu: "Algoritma ve Akış Şeması",
        kazanim: "Basit problemler için algoritma ve akış şeması oluşturur.",
        aciklama: "Algoritma adımları, başlangıç-bitiş, karar yapıları ve akış şeması sembolleri.",
        link: "#"
    },
    {
        id: "5-hafta-15",
        sinif: "5",
        hafta: 15,
        tarih: "14 - 18 Aralık 2026",
        unite: "Problem Çözme ve Programlama",
        konu: "Scratch ile Görsel Kodlamaya Giriş",
        kazanim: "Görsel programlama ortamının arayüzünü ve bileşenlerini tanır.",
        aciklama: "Scratch arayüzü, sahne, kukla, kod blokları kategorileri ve ilk hareket kodları.",
        link: "#"
    },
    {
        id: "5-hafta-16",
        sinif: "5",
        hafta: 16,
        tarih: "21 - 25 Aralık 2026",
        unite: "Problem Çözme ve Programlama",
        konu: "Scratch - Hareket ve Görünüm Blokları",
        kazanim: "Kuklaların hareketlerini ve kostüm değişimlerini kodlar.",
        aciklama: "Adım git, dön, derece, kostüm değiştir ve konuşma balonları blokları.",
        link: "#"
    },
    {
        id: "5-hafta-17",
        sinif: "5",
        hafta: 17,
        tarih: "28 Aralık 2026 - 01 Ocak 2027",
        unite: "Problem Çözme ve Programlama",
        konu: "Scratch - Ses ve Olay Blokları",
        kazanim: "Program çalıştırma tetikleyicilerini ve ses ögelerini kullanır.",
        aciklama: "Yeşil bayrağa tıklandığında, tuşa basıldığında, ses çal ve nota blokları.",
        link: "#"
    },
    {
        id: "5-hafta-18",
        sinif: "5",
        hafta: 18,
        tarih: "04 - 08 Ocak 2027",
        unite: "Problem Çözme ve Programlama",
        konu: "Scratch - Kontrol ve Döngü Blokları",
        kazanim: "Döngü (sürekli/defa) ve şart (eğer) yapılarını blok kodlarla uygular.",
        aciklama: "Sürekli tekrarla, X defa tekrarla, eğer... ise kontrol blokları uygulamaları.",
        link: "#"
    },
    {
        id: "5-hafta-19",
        sin
