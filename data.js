const dersIcerikleri = {
    // =================================================================
    // 5. SINIF DERS İÇERİKLERİ
    // =================================================================
    "5-hafta-8": {
        sinif: 5,
        hafta: 8,
        baslik: "Dosya ve Klasör Yönetimi",
        kazanim: "BT.5.2.2.1. Dosya ve klasör yönetimi ile ilgili temel kavramları açıklar. • BT.5.2.2.2. Dosya ve klasörler üzerinde temel işlemleri yapar.",
        aciklama: "Bilgisayarınızdaki bilgileri düzenli tutmak için dosya ve klasör yapısını tanıyacak, temel düzenleme işlemlerini pratik bir şekilde uygulayacaksınız.",
        sunuUrl: "folder/5/Sunu/DosyaveKlasoryonetimi.pdf",
        dersNotuPdf: "folder/5/DersNotu/DosyaveKlasoryonetimi.pdf",
        dersNotu: "",
        etkinlikler: [
            { baslik: "Etkinlik 1: Klasör Ağacı ve Düzenleme", tur: "Uygulama", url: "5.sinif/8-1.html" },
            { baslik: "Etkinlik 2: Dosya Uzantıları Oyunu", tur: "Wordwall", url: "5.sinif/8-2.html" },
            { baslik: "Etkinlik 3: Görsel Değerlendirme Testi", tur: "Test", url: "5.sinif/8-3.html" }
        ]
    },

    // =================================================================
    // 6. SINIF DERS İÇERİKLERİ
    // =================================================================
    "6-hafta-6": {
        sinif: 6,
        hafta: 6,
        baslik: "Ses Düzenleme Programlarına Giriş ve Ses Kurgusu",
        kazanim: "BTY.6.2.5. Ses düzenleme programlarından yararlanabilme • BTY.6.2.6. Ses dosyası için kurgu oluşturabilme",
        aciklama: "Seslerin bilgisayarda nasıl işlendiğini keşfedecek, kendi ses projelerinizi oluşturup düzenleme adımlarını öğreneceksiniz. Bu sayede dijital içeriklerinize profesyonel dokunuşlar katabileceksiniz.",
        sunuUrl: "folder/6/Sunu/SesKurgusu.pdf",
        dersNotuPdf: "folder/6/DersNotu/SesKurguDersNotu.pdf",
        dersNotu: "",
        etkinlikler: [
            { 
                baslik: "6. Hafta: Ses Kurgusu ve Düzenleme Etkinliği", 
                tur: "İnteraktif Uygulama", 
                url: "6.sinif/6-1.html" 
            }
        ]
    }

    "6-hafta-7": {
        sinif: 6,
        hafta: 7,
        baslik: "Ses Dosyası Geliştirme: Dedemin Tahta Radyosu",
        kazanim: "BTY.6.2.6. Kurgu oluşturma • BTY.6.2.7. Ses dosyası geliştirebilme",
        aciklama: "Bu hafta sesle bir Millî Mücadele ve Cumhuriyet hikâyesi anlatıyoruz. Konuşmalar, ses efektleri ve fon müziği hazır. Göreviniz bu parçaları ses düzenleme programında doğru sırayla birleştirip kusursuz bir radyo tiyatrosu kaydı ortaya çıkarmak.",
        sunuUrl: "",
        dersNotuPdf: "",
        etkinlikler: [],
        ozelIcerikHtml: `
            <!-- 1. Hikâye ve Dosyalar Kartı -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Hikâye -->
                <div class="bg-slate-800/70 border border-slate-700/70 rounded-3xl p-6 shadow-xl space-y-3">
                    <div class="flex items-center space-x-3 border-b border-slate-700/60 pb-3">
                        <div class="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                            <i class="fa-solid fa-radio"></i>
                        </div>
                        <h2 class="text-lg font-bold text-white">Hikâye: Dedemin Tahta Radyosu</h2>
                    </div>
                    <p class="text-slate-300 text-sm leading-relaxed">
                        29 Ekim arifesinde Kerem, dedesinin çatı katındaki eski atölyesinde tozlu, tahta kasalı bir radyo ve 1923 yılına ait bir telgraf metni bulur. Dedesi ona, kendi babasının Ankara'da Cumhuriyet'in ilan edildiği gün telgraf başında ve sokaklarda yaşanan o büyük coşkuyu nasıl kaydettiğini anlatır.
                    </p>
                </div>

                <!-- İndirilecek Dosyalar -->
                <div class="bg-slate-800/70 border border-slate-700/70 rounded-3xl p-6 shadow-xl space-y-4">
                    <div class="flex items-center space-x-3 border-b border-slate-700/60 pb-3">
                        <div class="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                            <i class="fa-solid fa-download"></i>
                        </div>
                        <h2 class="text-lg font-bold text-white">Etkinlik Dosyaları</h2>
                    </div>
                    <div class="space-y-2.5">
                        <a href="dosyalar/sesler.zip" download class="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-blue-600/20 border border-slate-700/80 hover:border-blue-500/40 transition-all group">
                            <div class="flex items-center space-x-3">
                                <i class="fa-solid fa-file-zipper text-blue-400 text-lg"></i>
                                <div>
                                    <div class="text-sm font-bold text-white group-hover:text-blue-300">Ses Paketini İndir (sesler.zip)</div>
                                    <div class="text-[11px] text-slate-400">Konuşmalar, efektler ve fon müziği</div>
                                </div>
                            </div>
                            <i class="fa-solid fa-download text-slate-400 group-hover:text-blue-400"></i>
                        </a>

                        <a href="dosyalar/Gorev_Karti.pdf" target="_blank" class="flex items-center justify-between p-3 rounded-2xl bg-slate-900/80 hover:bg-purple-600/20 border border-slate-700/80 hover:border-purple-500/40 transition-all group">
                            <div class="flex items-center space-x-3">
                                <i class="fa-solid fa-file-pdf text-purple-400 text-lg"></i>
                                <div>
                                    <div class="text-sm font-bold text-white group-hover:text-purple-300">Görev Kartı (Gorev_Karti.pdf)</div>
                                    <div class="text-[11px] text-slate-400">Hikâye metni ve efekt yerleştirme rehberi</div>
                                </div>
                            </div>
                            <i class="fa-solid fa-arrow-up-right-from-square text-slate-400 group-hover:text-purple-400"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- 2. Başlamadan Önce ve Klasör İçeriği -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Başlamadan Önce -->
                <div class="bg-slate-800/70 border border-slate-700/70 rounded-3xl p-6 shadow-xl space-y-4">
                    <div class="flex items-center space-x-3 border-b border-slate-700/60 pb-3">
                        <div class="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                            <i class="fa-solid fa-folder-open"></i>
                        </div>
                        <h2 class="text-lg font-bold text-white">Başlamadan Önce</h2>
                    </div>
                    <ol class="space-y-2.5 text-sm text-slate-300">
                        <li class="flex items-center space-x-2.5">
                            <span class="px-2 py-0.5 text-xs font-black bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30">1. ADIM</span>
                            <span><code class="text-emerald-300 font-mono">sesler.zip</code> dosyasını bilgisayarınıza indirin.</span>
                        </li>
                        <li class="flex items-center space-x-2.5">
                            <span class="px-2 py-0.5 text-xs font-black bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30">2. ADIM</span>
                            <span>İnen dosyaya sağ tıklayın, <strong>Buraya Ayıkla / Tümünü Ayıkla</strong> seçin.</span>
                        </li>
                        <li class="flex items-center space-x-2.5">
                            <span class="px-2 py-0.5 text-xs font-black bg-emerald-500/20 text-emerald-300 rounded-lg border border-emerald-500/30">3. ADIM</span>
                            <span>Açılan <code class="text-emerald-300 font-mono">Dedemin_Radyosu</code> klasörünü kullanın.</span>
                        </li>
                    </ol>
                    <div class="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-start space-x-2.5">
                        <i class="fa-solid fa-triangle-exclamation mt-0.5"></i>
                        <span><strong>Dikkat:</strong> Zip dosyasını klasöre çıkartmadan içinden doğrudan ses sürüklemeyin. Projeniz bozulabilir.</span>
                    </div>
                </div>

                <!-- Klasörde Neler Var? -->
                <div class="bg-slate-800/70 border border-slate-700/70 rounded-3xl p-6 shadow-xl space-y-4">
                    <div class="flex items-center space-x-3 border-b border-slate-700/60 pb-3">
                        <div class="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
                            <i class="fa-solid fa-sliders"></i>
                        </div>
                        <h2 class="text-lg font-bold text-white">Klasörde Neler Var?</h2>
                    </div>
                    <div class="space-y-3 text-sm">
                        <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex justify-between items-center">
                            <div>
                                <div class="font-bold text-white">📁 1_Konusmalar <span class="text-xs text-blue-400 font-normal">(6 konuşma)</span></div>
                                <div class="text-xs text-slate-400">Dosya adları karışık (K1–K6). Doğru sırayı dinleyerek siz bulacaksınız.</div>
                            </div>
                        </div>
                        <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex justify-between items-center">
                            <div>
                                <div class="font-bold text-white">📁 2_Efektler <span class="text-xs text-amber-400 font-normal">(9 efekt)</span></div>
                                <div class="text-xs text-slate-400">Dikkat! İçlerinden <strong>3 tanesi</strong> 1923'te duyulamayacak tuzak seslerdir.</div>
                            </div>
                        </div>
                        <div class="p-3 rounded-2xl bg-slate-900/60 border border-slate-700/60 flex justify-between items-center">
                            <div>
                                <div class="font-bold text-white">📁 3_Muzik <span class="text-xs text-emerald-400 font-normal">(1 müzik)</span></div>
                                <div class="text-xs text-slate-400">En alt kanala, kısık sesle konur. Konuşmaları bastırmaz.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Görevler Listesi -->
            <div class="bg-slate-800/70 border border-slate-700/70 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
                <div class="flex items-center space-x-3 border-b border-slate-700/60 pb-4">
                    <div class="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                        <i class="fa-solid fa-list-check"></i>
                    </div>
                    <div>
                        <h2 class="text-lg font-bold text-white">Uygulama Görevleri</h2>
                        <p class="text-xs text-slate-400">Adımları sırasıyla ses düzenleme programında uygulayın.</p>
                    </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">1. İçe Aktar</div>
                        <p class="text-slate-300 text-xs">Dosyaları programa aktarın: <code class="text-slate-200">Dosya › İçe Aktar › Ses</code> (Ctrl+Shift+I)</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">2. Sırala</div>
                        <p class="text-slate-300 text-xs">Konuşmaları dinleyin, hikâye sırasına göre zaman çizgisine (timeline) dizin.</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">3. Hatayı Kes</div>
                        <p class="text-slate-300 text-xs">Dedenin konuşurken hapşırdığı/duraksadığı bölümü bulun, seçin ve <code class="text-slate-200">Delete</code> ile silin.</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">4. Efektleri Yerleştir</div>
                        <p class="text-slate-300 text-xs">Görev kartındaki EFEKT kutularına uygun sesi koyun. Tuzak sesleri kullanmayın!</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">5. Müziği Ayarla</div>
                        <p class="text-slate-300 text-xs">Müzik kanalının ses seviyesini (Kazanç / Gain) yaklaşık <strong>−12 dB</strong> değerine indirin.</p>
                    </div>
                    <div class="p-4 rounded-2xl bg-slate-900/70 border border-slate-700/60 space-y-1">
                        <div class="font-bold text-blue-400">6. Giriş ve Çıkış</div>
                        <p class="text-slate-300 text-xs">Müziğin başına <strong>Fade In (Yavaşça Artır)</strong>, sonuna <strong>Fade Out (Yavaşça Azalt)</strong> uygulayın.</p>
                    </div>
                </div>

                <!-- 7. Kaydetme Kutusu -->
                <div class="p-4 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div class="space-y-1">
                        <div class="font-bold text-blue-300 text-sm">7. Kaydet ve Karşılaştır</div>
                        <p class="text-xs text-slate-300"><code class="text-white">Dosya › Dışa Aktar</code> ile önce <strong>MP3</strong>, sonra <strong>WAV</strong> olarak kaydedin ve iki dosyanın boyutunu karşılaştırın.</p>
                    </div>
                    <div class="px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs font-mono text-emerald-400 shrink-0">
                        adsoyad_sinif_dedemin_radyosu.mp3
                    </div>
                </div>
            </div>

            <!-- 4. Bonus Görev -->
            <div class="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/40 rounded-3xl p-6 shadow-xl flex items-start space-x-4">
                <div class="w-10 h-10 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-500/40 mt-0.5">
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="space-y-1">
                    <h3 class="text-sm font-bold text-white">Erken Bitirene Bonus Görev</h3>
                    <p class="text-xs text-slate-300 leading-relaxed">
                        Kerem'in sesini <code class="text-purple-300">Efekt › Perdeyi Değiştir</code> ile biraz inceltin ya da eski radyo frekans arama (cızırtı) sesini hikâyenin başına fon olarak ekleyin.
                    </p>
                </div>
            </div>
        `
    },
};
