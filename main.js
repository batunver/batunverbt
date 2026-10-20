// Sayfa yüklendiğinde aktif hafta konularını getir
document.addEventListener("DOMContentLoaded", () => {
    aktifHaftayiGoster();
});

// Bu haftanın konularını ana sayfada sergile (7. Hafta: 19 - 23 Ekim 2026)
function aktifHaftayiGoster() {
    const container = document.getElementById("aktif-hafta-container");
    if (!container || typeof dersData === 'undefined') return;

    // Her iki sınıf için 7. hafta verisini buluyoruz
    const aktifHafta5 = dersData.find(d => d.sinif === "5" && d.hafta === 7);
    const aktifHafta6 = dersData.find(d => d.sinif === "6" && d.hafta === 7);

    container.innerHTML = `
        <!-- 5. Sınıf Aktif Hafta -->
        ${aktifHafta5 ? kartOlusturKucuk(aktifHafta5, "blue") : ''}
        <!-- 6. Sınıf Aktif Hafta -->
        ${aktifHafta6 ? kartOlusturKucuk(aktifHafta6, "cyan") : ''}
    `;
}

// Küçük aktif hafta kart şablonu
function kartOlusturKucuk(ders, renk) {
    return `
        <div class="bg-slate-900/60 border border-slate-700/60 rounded-2xl p-5 hover:border-${renk}-500/50 transition-all flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-center mb-2">
                    <span class="bg-${renk}-500/10 text-${renk}-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-${renk}-500/20">
                        ${ders.sinif}. Sınıf • ${ders.hafta}. Hafta
                    </span>
                    <span class="text-xs text-slate-400">${ders.tarih}</span>
                </div>
                <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">${ders.unite}</h4>
                <h3 class="text-base font-bold text-white mb-2">${ders.konu}</h3>
                <p class="text-slate-300 text-xs leading-relaxed">${ders.aciklama}</p>
            </div>
            <div class="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 italic">
                📌 Kazanım: ${ders.kazanim}
            </div>
        </div>
    `;
}

// Sınıf Modalını Aç (5 veya 6)
function sinifModalAc(sinifTuru) {
    const modal = document.getElementById("sinifModal");
    const baslik = document.getElementById("modalBaslik");
    const container = document.getElementById("modalIcerikContainer");
    
    if (!modal || !container || typeof dersData === 'undefined') return;

    baslik.innerText = `${sinifTuru}. Sınıf Bilişim Teknolojileri ve Yazılım - Tüm Yıllık Plan (36 Hafta)`;
    container.innerHTML = "";

    const filtrelenmis = dersData.filter(d => String(d.sinif) === String(sinifTuru));
    const renk = sinifTuru === "5" ? "blue" : "cyan";

    filtrelenmis.forEach(ders => {
        const haftaHTML = `
            <div class="bg-slate-800/60 border border-slate-700/50 rounded-xl p-4 hover:border-${renk}-500/40 transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div class="space-y-1">
                    <div class="flex items-center space-x-2">
                        <span class="bg-${renk}-500/10 text-${renk}-400 text-xs font-bold px-2.5 py-0.5 rounded-full border border-${renk}-500/20">
                            Hafta ${ders.hafta}
                        </span>
                        <span class="text-xs text-slate-400"><i class="fa-regular fa-calendar mr-1"></i>${ders.tarih}</span>
                    </div>
                    <h4 class="text-xs font-semibold text-slate-400 uppercase tracking-wider">${ders.unite}</h4>
                    <h3 class="text-base font-bold text-white">${ders.konu}</h3>
                    <p class="text-slate-300 text-xs leading-relaxed">${ders.aciklama}</p>
                    <p class="text-[11px] text-slate-400 italic">📌 ${ders.kazanim}</p>
                </div>
                <a href="${ders.link}" target="_blank" class="w-full sm:w-auto px-4 py-2 bg-${renk}-600/20 hover:bg-${renk}-600 text-${renk}-400 hover:text-white text-xs font-semibold rounded-xl transition-all border border-${renk}-500/30 flex items-center justify-center space-x-1.5 shrink-0">
                    <span>Materyal</span>
                    <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                </a>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', haftaHTML);
    });

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Arka planın kaydırılmasını engelle
}

// Modalı Kapat
function modalKapat() {
    const modal = document.getElementById("sinifModal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.style.overflow = "auto";
    }
}

// ESC tuşuna basınca modalı kapatma
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalKapat();
});
