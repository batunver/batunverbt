// Sayfa yüklendiğinde kartları bas
document.addEventListener("DOMContentLoaded", () => {
    baslat();
});

function baslat() {
    if (typeof dersData !== 'undefined' && Array.isArray(dersData)) {
        kartlariGoster(dersData);
    } else {
        setTimeout(baslat, 200); // Veri henüz yüklenmediyse 200ms sonra tekrar dene
    }
}

// Kartları ekrana basma fonksiyonu
function kartlariGoster(veriListesi) {
    const container = document.getElementById("kartlar-container");
    const baslikIcerik = document.getElementById("baslik-icerik");
    
    if (!container) return;

    container.innerHTML = "";

    if (!veriListesi || veriListesi.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <i class="fa-solid fa-folder-open text-4xl mb-3"></i>
                <p>Bu filtreye ait henüz içerik bulunmuyor.</p>
            </div>
        `;
        return;
    }

    veriListesi.forEach(ders => {
        const isBeş = ders.sinif === "5";
        const sinifRenk = isBeş ? "blue" : "cyan";
        
        const kartHTML = `
            <div class="bg-slate-800/70 border border-slate-700/60 rounded-2xl p-5 hover:border-slate-500 transition-all duration-300 flex flex-col justify-between shadow-lg group">
                <div>
                    <!-- Üst Bilgi (Sınıf & Hafta) -->
                    <div class="flex justify-between items-center mb-3">
                        <span class="${isBeş ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'} text-xs font-bold px-3 py-1 rounded-full border">
                            ${ders.sinif}. Sınıf • ${ders.hafta}. Hafta
                        </span>
                        <span class="text-xs text-slate-400 flex items-center">
                            <i class="fa-regular fa-calendar-days mr-1.5 ${isBeş ? 'text-blue-400' : 'text-cyan-400'}"></i> ${ders.tarih}
                        </span>
                    </div>

                    <!-- Ünite ve Konu -->
                    <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">${ders.unite}</h4>
                    <h3 class="text-lg font-bold text-white mb-2 ${isBeş ? 'group-hover:text-blue-400' : 'group-hover:text-cyan-400'} transition-colors">
                        ${ders.konu}
                    </h3>

                    <!-- Açıklama -->
                    <p class="text-slate-300 text-xs leading-relaxed mb-4">
                        ${ders.aciklama}
                    </p>
                </div>

                <!-- Alt Detay ve Buton -->
                <div class="pt-4 border-t border-slate-700/50 flex items-center justify-between">
                    <span class="text-[11px] text-slate-400 italic line-clamp-1 max-w-[70%]">
                        📌 Kazanım: ${ders.kazanim}
                    </span>
                    <a href="${ders.link}" target="_blank" class="${isBeş ? 'bg-blue-600/20 hover:bg-blue-600 text-blue-400 border-blue-500/30' : 'bg-cyan-600/20 hover:bg-cyan-600 text-cyan-400 border-cyan-500/30'} hover:text-white px-3.5 py-2 text-xs font-semibold rounded-xl transition-all border flex items-center space-x-1.5">
                        <span>İçerik</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                </div>
            </div>
        `;
        
        container.insertAdjacentHTML('beforeend', kartHTML);
    });
}

// Sınıf Filtreleme Fonksiyonu (5, 6 veya hepsi)
function filtreleSinif(sinifTuru) {
    const baslikIcerik = document.getElementById("baslik-icerik");
    if (typeof dersData === 'undefined') return;
    
    if (sinifTuru === 'hepsi') {
        kartlariGoster(dersData);
        if (baslikIcerik) baslikIcerik.innerText = "Tüm Ders İçerikleri (Yıllık Plan - 36 Hafta)";
    } else {
        const filtrelenmis = dersData.filter(d => String(d.sinif) === String(sinifTuru));
        kartlariGoster(filtrelenmis);
        if (baslikIcerik) baslikIcerik.innerText = `${sinifTuru}. Sınıf Bilişim Teknolojileri ve Yazılım (Tüm Yıl)`;
    }

    const icerikBolumu = document.getElementById("icerik-alani");
    if (icerikBolumu) {
        icerikBolumu.scrollIntoView({ behavior: 'smooth' });
    }
}
