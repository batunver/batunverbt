/**
 * BATUNVER - Bilişim Teknolojileri ve Yazılım Dersi İçerik Veritabanı
 * İhsan Aras Ortaokulu
 */

const dersIcerikleri = {
    // ==========================================
    // 5. SINIF İÇERİKLERİ
    // ==========================================
    "5-hafta-1": {
        sinif: "5",
        hafta: 1,
        baslik: "Bilişim Teknolojileri ve Günlük Hayat",
        kazanim: "Bilişim teknolojilerinin günlük hayattaki önemini ve kullanım alanlarını açıklar.",
        
        // Sitede doğrudan açılacak Google Slides / Canva / Embed Sunu Linki
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE/embed?start=false&loop=false&delayms=3000",
        
        // Sayfanın altındaki Ders Notu (HTML formatında)
        dersNotu: `
            <h3 class="text-base font-bold text-blue-400 mb-2">1. Bilişim Teknolojisi Nedir?</h3>
            <p class="mb-3">Bilginin toplanması, işlenmesi, depolanması ve ağlar aracılığıyla bir yerden bir yere iletilmesini sağlayan tüm teknolojilere <strong>Bilişim Teknolojileri (BT)</strong> denir.</p>

            <h3 class="text-base font-bold text-blue-400 mb-2">2. Bilişim Teknolojilerinin Kullanım Alanları</h3>
            <ul class="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Eğitim:</strong> Akıllı tahtalar, EBA, çevrim içi dersler ve kütüphaneler.</li>
                <li><strong>Sağlık:</strong> MHRS randevu sistemi, E-Nabız, röntgen ve MR cihazları.</li>
                <li><strong>Bankacılık:</strong> İnternet bankacılığı, ATM'ler ve temassız ödeme sistemleri.</li>
                <li><strong>Ulaşım:</strong> GPS, navigasyon cihazları, online bilet alma sistemleri.</li>
            </ul>
        `,
        
        // Tıklandığında sayfa içinde iframe olarak açılacak Etkinlikler
        etkinlikler: [
            {
                baslik: "Etkinlik 1: Donanım ve Yazılım Eşleştirme Oyunu",
                tur: "Wordwall",
                url: "https://wordwall.net/embed/40d39e2469a544b8a2455b8813739fa4"
            },
            {
                baslik: "Etkinlik 2: Bilişim Kavramları Bulmacası",
                tur: "LearningApps",
                url: "https://learningapps.org/watch?v=p23abc123"
            }
        ]
    },

    "5-hafta-2": {
        sinif: "5",
        hafta: 2,
        baslik: "Bilgisayar Sisteminin Çalışma Mantığı",
        kazanim: "Bilgisayar sistemini oluşturan temel bileşenleri ve aralarındaki ilişkiyi açıklar.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE2/embed",
        dersNotu: `
            <h3 class="text-base font-bold text-blue-400 mb-2">Donanım ve Yazılım İlişkisi</h3>
            <p>Bilgisayar sistemi iki ana bileşenden oluşur:</p>
            <p><strong>1. Donanım (Hardware):</strong> Bilgisayarın fiziksel ve elle tutulabilir parçalarıdır (Klavye, fare, ekran, işlemci).</p>
            <p><strong>2. Yazılım (Software):</strong> Donanımın çalışmasını sağlayan programlar ve kodlardır (İşletim sistemi, oyunlar, tarayıcılar).</p>
        `,
        etkinlikler: [
            {
                baslik: "Etkinlik 1: Dahili ve Harici Donanımlar",
                tur: "Wordwall",
                url: "https://wordwall.net/embed/samplelink"
            }
        ]
    },

    // ==========================================
    // 6. SINIF İÇERİKLERİ
    // ==========================================
    "6-hafta-1": {
        sinif: "6",
        hafta: 1,
        baslik: "İşletim Sistemini Tanıyorum",
        kazanim: "İşletim sistemlerinin görevlerini ve temel işlevlerini kavramsal düzeyde açıklar.",
        sunuUrl: "https://docs.google.com/presentation/d/e/2PACX-1vQ_EXAMPLE3/embed",
        dersNotu: `
            <h3 class="text-base font-bold text-purple-400 mb-2">İşletim Sistemi Nedir?</h3>
            <p class="mb-3">Bilgisayar ve akıllı cihazlardaki tüm donanım ve yazılımların yönetimini sağlayan en temel sistem yazılımıdır.</p>
            <h3 class="text-base font-bold text-purple-400 mb-2">Yaygın İşletim Sistemleri</h3>
            <p>Pardus (Milli İşletim Sistemimiz), Windows, Linux, macOS, Android, iOS.</p>
        `,
        etkinlikler: [
            {
                baslik: "Etkinlik 1: İşletim Sistemleri Eşleştirme",
                tur: "Wordwall",
                url: "https://wordwall.net/embed/samplelink6"
            }
        ]
    }
};
