// data.js - batunverbt Bilişim Teknolojileri & Lab Portalı

const materialsData = [
    {
        id: 1,
        title: "Lab Görevi: Scratch ile Labirentten Kaçış",
        grade: "5",
        type: "lab",
        category: "Scratch & Kodlama",
        description: "Lab bilgisayarlarında uygulanacak görev: Ok tuşları ile karakteri labirentten çıkar, engellere değince başa dönsün.",
        link: "#",
        badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
    },
    {
        id: 2,
        title: "Pardus & LibreOffice Calc ile Haftalık Ders Programı",
        grade: "5",
        type: "lab",
        category: "Ofis Programları",
        description: "Öğrenci bilgisayarlarında Calc programını açarak tablo oluşturma, hücre renklendirme ve kenarlık ekleme uygulaması.",
        link: "#",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
        id: 3,
        title: "3D Baskı & Tasarım: Kendi Anahtarlığını Tasarla",
        grade: "6",
        type: "lab",
        category: "3D Tasarım",
        description: "Tinkercad üzerinde adınıza özel 3D anahtarlık modeli hazırlama ve 3D yazıcıya (Creality) gönderme adımları.",
        link: "#",
        badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20"
    },
    {
        id: 4,
        title: "Python'a Giriş: İlk Kodlarım ve print()",
        grade: "6",
        type: "lab",
        category: "Python",
        description: "Lab PC'lerinde Python ortamını açıp metinsel komutlarla ekrana çıktı verme ve basit değişken alıştırmaları.",
        link: "#",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    },
    {
        id: 5,
        title: "Akıllı Tahta: Kronometre & Ders Süre Sayacı",
        grade: "all",
        type: "arac",
        category: "Akıllı Tahta",
        description: "Lab içi bireysel görev ve uygulama sürelerini tahtadan geri sayımla takip etmek için zamanlayıcı.",
        action: "openTimer",
        badgeColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20"
    },
    {
        id: 6,
        title: "Akıllı Tahta: Rastgele Öğrenci & Masalar Kurası",
        grade: "all",
        type: "arac",
        category: "Akıllı Tahta",
        description: "Labdaki 19 bilgisayar masası veya öğrenciler arasından rastgele sunum/kontrol seçici çark.",
        action: "openWheel",
        badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20"
    },
    {
        id: 7,
        title: "Epoptes & Pardus Ağ Yönetimi Hızlı Komutlar",
        grade: "all",
        type: "lab",
        category: "Lab Altyapısı",
        description: "19 bilgisayarlık laboratuvarda Epoptes servisi başlatma, Wake-on-LAN (Açma) ve terminal ipuçları.",
        action: "openEpoptesGuide",
        badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20"
    },
    {
        id: 8,
        title: "Python Lab Notları & Temel Sözdizimi",
        grade: "6",
        type: "lab",
        category: "Python",
        description: "Pardus üzerinde Python IDLE veya terminal kullanımı, print(), input() ve değişken tanımlama örnekleri.",
        action: "openPythonGuide",
        badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20"
    }
];