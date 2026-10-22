/**
 * BATUNVER - Bilişim Teknolojileri ve Yazılım Dersi İçerik Veritabanı
 * İhsan Aras Ortaokulu (2026-2027 Yıllık Planına Uygundur)
 */

const dersIcerikleri = {
    // ==========================================
    // 5. SINIF İÇERİKLERİ (1 - 7. HAFTA)
    // ==========================================
    "5-hafta-1": {
        sinif: "5", hafta: 1,
        baslik: "Bilişim Teknolojilerinin Sınıflandırılması",
        kazanim: "BTY.5.1.1. Günlük yaşamda kullanılan bilişim teknolojilerini sınıflandırabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">1. Hafta: Bilişim Teknolojilerinin Sınıflandırılması</h3><p>Bilişim teknolojilerinin tanımı, temel kavramlar ve kullanım alanlarına göre sınıflandırılması.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: BT Sınıflandırma Oyunu", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "5-hafta-2": {
        sinif: "5", hafta: 2,
        baslik: "Bilişim Teknolojilerinin Etkileri ve Dijital Sağlık",
        kazanim: "BTY.5.1.2. Bilişim teknolojilerinin birey ve toplum üzerindeki etkilerini özetleyebilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">2. Hafta: Bilişim Teknolojilerinin Etkileri</h3><p>Teknolojinin olumlu/olumsuz yönleri, ergonoimi, fiziksel güvenlik ve beden/ruh sağlığına etkileri.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Dijital Sağlık ve Ergonomi", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "5-hafta-3": {
        sinif: "5", hafta: 3,
        baslik: "Dijital Vatandaşlık Uygulamaları",
        kazanim: "BTY.5.1.3. Dijital vatandaşlık uygulamalarını sınıflandırabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">3. Hafta: Dijital Vatandaşlık</h3><p>Dijital kimlik, dijital ayak izi ve e-Devlet gibi dijital vatandaşlık uygulamaları.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Dijital Ayak İzi Testi", tur: "LearningApps", url: "https://learningapps.org/watch?v=sample" }]
    },
    "5-hafta-4": {
        sinif: "5", hafta: 4,
        baslik: "Yapay Zekâda Temel Kavram ve Özellikler",
        kazanim: "BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">4. Hafta: Yapay Zekâ</h3><p>Yapay zekâ kavramı, günlük hayattaki örnekleri ve toplumsal etkileri.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Yapay Zekâ Soru-Cevap", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "5-hafta-5": {
        sinif: "5", hafta: 5,
        baslik: "Codeweek 2026 Kodlama Etkinlikleri",
        kazanim: "Yerli ve millî teknolojiler temasıyla okul içi kodlama ve problem çözme etkinlikleri.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">5. Hafta: Codeweek 2026</h3><p>Kodlama haftası kapsamında problem çözme ve algoritma alıştırmaları.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Blok Kodlama Oyunu", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "5-hafta-6": {
        sinif: "5", hafta: 6,
        baslik: "Bilgisayar Sistemlerinin Kullanımı (Donanım)",
        kazanim: "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme (Donanım Bileşenleri).",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">6. Hafta: Donanım Bileşenleri</h3><p>Bilgisayarın temel donanım parçaları, iç ve dış donanım birimleri arasındaki ilişki.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Donanım Birimleri Eşleştirme", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "5-hafta-7": {
        sinif: "5", hafta: 7,
        baslik: "Bilgisayar Sistemlerinin Kullanımı (Yazılım)",
        kazanim: "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme (Yazılım Bileşenleri).",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-blue-400 mb-2">7. Hafta: Yazılım Bileşenleri</h3><p>İşletim sistemleri, sistem yazılımları ve uygulama yazılımları arasındaki ilişkiler.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Yazılım Türleri Bulmacası", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },

    // ==========================================
    // 6. SINIF İÇERİKLERİ (1 - 7. HAFTA)
    // ==========================================
    "6-hafta-1": {
        sinif: "6", hafta: 1,
        baslik: "Yenilikçi Bilişim Teknolojileri",
        kazanim: "BTY.6.1.1. Yenilikçi bilişim teknolojilerini sınıflandırabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">1. Hafta: Yenilikçi Teknolojiler</h3><p>Gelişen teknolojiler, nesnelerin interneti, bulut teknolojileri ve günlük hayattaki rolleri.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Yenilikçi Teknolojiler Oyunu", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "6-hafta-2": {
        sinif: "6", hafta: 2,
        baslik: "Bilişim Teknolojilerinin Geleceği",
        kazanim: "BTY.6.1.2. Bilişim teknolojinin gelecekteki durumlarına yönelik çıkarım yapabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">2. Hafta: Teknolojinin Geleceği</h3><p>Teknolojinin tarihsel gelişimi, gelecekteki olası durumlar ve toplum üzerindeki etkileri.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Gelecek Teknolojileri Karşılaştırma", tur: "LearningApps", url: "https://learningapps.org/watch?v=sample" }]
    },
    "6-hafta-3": {
        sinif: "6", hafta: 3,
        baslik: "Tablolama Programlarına Giriş",
        kazanim: "BTY.6.2.1. Tablolama programlarından yararlanabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">3. Hafta: Tablolama Programları</h3><p>LibreOffice Calc / Excel temel özellikleri, arayüzü, hücre, satır ve sütun mantığı.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Tablolama Arayüzü Eşleştirme", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "6-hafta-4": {
        sinif: "6", hafta: 4,
        baslik: "Gerçek Yaşam Problemleri ile Tablolama ve Veri Analizi",
        kazanim: "BTY.6.2.2 - BTY.6.2.4. Tablolama programları kullanarak verileri toplama, düzenleme ve görselleştirme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">4. Hafta: Veri Düzenleme ve Grafikler</h3><p>Gerçek yaşam verilerinin tablolaştırılması, hesaplamalar ve verilerin grafiklerle gösterimi.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Grafik Türleri Bulmacası", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "6-hafta-5": {
        sinif: "6", hafta: 5,
        baslik: "Codeweek 2026 Kodlama Etkinlikleri",
        kazanim: "Yerli ve millî teknolojiler temasıyla okul içi kodlama ve problem çözme etkinlikleri.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">5. Hafta: Codeweek 2026</h3><p>Kodlama haftası kapsamında problem çözme ve algoritma alıştırmaları.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Algoritma ve Problem Çözme", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "6-hafta-6": {
        sinif: "6", hafta: 6,
        baslik: "Ses Düzenleme Programlarına Giriş ve Kurgu",
        kazanim: "BTY.6.2.5 - BTY.6.2.6. Ses düzenleme programlarından yararlanabilme ve kurgu oluşturabilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">6. Hafta: Ses Kurgusu Temelleri</h3><p>Ses düzenleme yazılımlarının arayüz kullanımı ve ses kurgusu için senaryo oluşturma.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Ses Düzenleme Araçları", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    },
    "6-hafta-7": {
        sinif: "6", hafta: 7,
        baslik: "Ses Dosyası Geliştirme",
        kazanim: "BTY.6.2.7. Ses dosyası geliştirebilme.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed",
        dersNotu: `<h3 class="text-base font-bold text-cyan-400 mb-2">7. Hafta: Ses Dosyası Oluşturma</h3><p>Tasarlanan senaryoya uygun ses kayıtlarının birleştirilmesi, düzenlenmesi ve ses dosyası üretimi.</p>`,
        etkinlikler: [{ baslik: "Etkinlik 1: Ses Efektleri ve Kurgu", tur: "Wordwall", url: "https://wordwall.net/embed/sample" }]
    }
};
