// 2026-2027 İhsan Aras Ortaokulu Bilişim Teknolojileri Yıllık Plan Verileri
const dersIcerikleri = [
    // ================= 5. SINIF YILLIK PLANI =================
    {
        "id": "5-1", "sinif": "5", "hafta": 1, "tarih": "14–18 Eylül 2026",
        "baslik": "Bilişim Teknolojilerinin Sınıflandırılması",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.1. Günlük yaşamda kullanılan bilişim teknolojilerini sınıflandırabilme.",
        "kategoriler": ["BT Sınıflandırılması", "Temel Kavramlar"], "ikon": "fa-desktop"
    },
    {
        "id": "5-2", "sinif": "5", "hafta": 2, "tarih": "21–25 Eylül 2026",
        "baslik": "BT Etkileri ve Dijital Sağlık",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.2. Bilişim teknolojilerinin birey ve toplum üzerindeki etkilerini özetleyebilme.",
        "kategoriler": ["Dijital Sağlık", "Toplumsal Etki"], "ikon": "fa-user-nurse"
    },
    {
        "id": "5-3", "sinif": "5", "hafta": 3, "tarih": "28 Eylül–2 Ekim 2026",
        "baslik": "Dijital Vatandaşlık Uygulamaları",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.3. Dijital vatandaşlık uygulamalarını sınıflandırabilme ve dijital ayak izi.",
        "kategoriler": ["Dijital Vatandaşlık", "e-Devlet"], "ikon": "fa-id-card"
    },
    {
        "id": "5-4", "sinif": "5", "hafta": 4, "tarih": "5–9 Ekim 2026",
        "baslik": "Yapay Zekâda Temel Kavram ve Özellikler",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.4. Yapay zekâ ile ilgili temel kavramları ve özellikleri sorgulayabilme.",
        "kategoriler": ["Yapay Zekâ", "Gelecek Teknolojileri"], "ikon": "fa-brain"
    },
    {
        "id": "5-5", "sinif": "5", "hafta": 5, "tarih": "12–16 Ekim 2026",
        "baslik": "Codeweek 2026 Etkinlikleri",
        "unite": "Okul Temelli Plan",
        "ozet": "Yerli ve millî teknolojiler temasıyla okul içi kodlama ve problem çözme etkinlikleri.",
        "kategoriler": ["Codeweek 2026", "Kodlama"], "ikon": "fa-code"
    },
    {
        "id": "5-6", "sinif": "5", "hafta": 6, "tarih": "19–23 Ekim 2026",
        "baslik": "Bilgisayar Sistemleri - Donanım",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme (Donanım bileşenleri).",
        "kategoriler": ["Donanım", "Sistem Bileşenleri"], "ikon": "fa-microchip"
    },
    {
        "id": "5-7", "sinif": "5", "hafta": 7, "tarih": "26–30 Ekim 2026",
        "baslik": "Bilgisayar Sistemleri - Yazılım",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.5. Bilgisayar sistemlerini çözümleyebilme (Yazılım türleri ve işletim sistemleri).",
        "kategoriler": ["Yazılım", "İşletim Sistemleri"], "ikon": "fa-compact-disc"
    },
    {
        "id": "5-8", "sinif": "5", "hafta": 8, "tarih": "2–6 Kasım 2026",
        "baslik": "Dosya ve Klasör Yönetimi",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.5.1.6. Dosya ve klasör yönetimi ile ilgili temel işlemlerle çalışabilme.",
        "kategoriler": ["Dosya Yönetimi", "Dosya Uzantıları"], "ikon": "fa-folder-open"
    },
    {
        "id": "5-9", "sinif": "5", "hafta": 9, "tarih": "9–13 Kasım 2026",
        "baslik": "Görsel Düzenleme Programlarına Giriş",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.5.2.1. Görsel düzenleme programlarından yararlanabilme.",
        "kategoriler": ["Görsel Tasarım", "Grafik"], "ikon": "fa-image"
    },
    {
        "id": "5-10", "sinif": "5", "hafta": 10, "tarih": "23–27 Kasım 2026",
        "baslik": "Görsel Tasarıma Yönelik Kurgu ve Ürün Geliştirme",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.5.2.2 - BTY.5.2.3. Görsel dosyası kurgulama ve dijital görsel ürün geliştirme.",
        "kategoriler": ["Tasarım", "Dijital Ürün"], "ikon": "fa-palette"
    },

    // ================= 6. SINIF YILLIK PLANI =================
    {
        "id": "6-1", "sinif": "6", "hafta": 1, "tarih": "14–18 Eylül 2026",
        "baslik": "Yenilikçi Bilişim Teknolojileri",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.6.1.1. Yenilikçi bilişim teknolojilerini sınıflandırabilme ve günlük hayata etkileri.",
        "kategoriler": ["Yenilikçi Teknolojiler", "Teknoloji Trendleri"], "ikon": "fa-rocket"
    },
    {
        "id": "6-2", "sinif": "6", "hafta": 2, "tarih": "21–25 Eylül 2026",
        "baslik": "Bilişim Teknolojilerinin Geleceği",
        "unite": "Bilişim Teknolojilerinin Hayatımızdaki Yeri",
        "ozet": "BTY.6.1.2. Bilişim teknolojisinin gelecekteki durumlarına yönelik çıkarım yapabilme.",
        "kategoriler": ["Gelecek Teknolojileri", "Toplumsal Etki"], "ikon": "fa-crystal-ball"
    },
    {
        "id": "6-3", "sinif": "6", "hafta": 3, "tarih": "28 Eylül–2 Ekim 2026",
        "baslik": "Tablolama Programlarına Giriş (Excel / Calc)",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.1. Tablolama programlarından yararlanabilme ve arayüzü tanıma.",
        "kategoriler": ["Tablolama", "LibreOffice Calc"], "ikon": "fa-table"
    },
    {
        "id": "6-4", "sinif": "6", "hafta": 4, "tarih": "5–9 Ekim 2026",
        "baslik": "Gerçek Yaşam Problemleri ile Tablolama ve Veri Analizi",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.2 - BTY.6.2.4. Veri toplama, tablo düzenleme, veri analizi ve grafik oluşturma.",
        "kategoriler": ["Veri Analizi", "Grafikler"], "ikon": "fa-chart-pie"
    },
    {
        "id": "6-5", "sinif": "6", "hafta": 5, "tarih": "12–16 Ekim 2026",
        "baslik": "Codeweek 2026 Etkinlikleri",
        "unite": "Okul Temelli Plan",
        "ozet": "Yerli ve millî teknolojiler temasıyla okul içi kodlama ve problem çözme etkinlikleri.",
        "kategoriler": ["Codeweek 2026", "Kodlama"], "ikon": "fa-code"
    },
    {
        "id": "6-6", "sinif": "6", "hafta": 6, "tarih": "19–23 Ekim 2026",
        "baslik": "Ses Düzenleme Programlarına Giriş ve Kurgu",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.5 - BTY.6.2.6. Ses düzenleme program arayüzü ve ses kurgusu oluşturma.",
        "kategoriler": ["Ses Düzenleme", "Kurgu"], "ikon": "fa-file-audio"
    },
    {
        "id": "6-7", "sinif": "6", "hafta": 7, "tarih": "26–30 Ekim 2026",
        "baslik": "Ses Dosyası Geliştirme Projesi",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.7. Tasarlanan senaryoya uygun ses dosyası oluşturma ve değerlendirme.",
        "kategoriler": ["Podcasting", "Ses Üretimi"], "ikon": "fa-microphone"
    },
    {
        "id": "6-8", "sinif": "6", "hafta": 8, "tarih": "2–6 Kasım 2026",
        "baslik": "Video Düzenleme Programları ve Video Kurgusu",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.8 - BTY.6.2.9. Video düzenleme yazılımları, senaryo ve kurgu hazırlama.",
        "kategoriler": ["Video Düzenleme", "Kurgu"], "ikon": "fa-video"
    },
    {
        "id": "6-9", "sinif": "6", "hafta": 9, "tarih": "9–13 Kasım 2026",
        "baslik": "Video Dosyası Geliştirme ve Montaj",
        "unite": "Dijital Ürün Tasarım ve Geliştirme",
        "ozet": "BTY.6.2.10. Video montajı, efekt ekleme ve dijital video ürünü çıktı alma.",
        "kategoriler": ["Video Montaj", "Dijital Ürün"], "ikon": "fa-film"
    },
    {
        "id": "6-10", "sinif": "6", "hafta": 10, "tarih": "23–27 Kasım 2026",
        "baslik": "İletişim Teknolojileri ve Bilgisayar Ağları",
        "unite": "Bilgisayar Ağları ve İletişim",
        "ozet": "BTY.6.3.1. Ağ türleri (LAN, WAN), modem ve ağ bileşenleri.",
        "kategoriler": ["Ağ Teknolojileri", "İnternet"], "ikon": "fa-network-wired"
    }
];
