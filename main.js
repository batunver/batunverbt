// Sayfa yüklendiğinde tüm yıllık plan içeriklerini bas
document.addEventListener("DOMContentLoaded", () => {
    tumIcerikleriYukle(dersIcerikleri);
});

function tumIcerikleriYukle(veriListesi) {
    const container = document.getElementById("kartlar-container");
    if (!container) return;

    if (veriListesi.length === 0) {
        container.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <i class="fa-solid fa-folder-open text-4xl mb-3 block"></i>
                Bu sınıfa ait ders içeriği bulunamadı.
            </div>
        `;
        return;
    }

    container.innerHTML = veriListesi.map(item => `
        <div class="bg-slate-800/80 border border-slate-700/70 rounded-2xl p-5 hover:border-slate-500 transition shadow-lg flex flex-col justify-between">
            <div>
                <div class="flex justify-between items-center mb-3">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-md ${item.sinif === '5' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'}">
                        ${item.sinif}. Sınıf • ${item.hafta}. Hafta (${item.tarih})
                    </span>
                    <i class="fa-solid ${item.ikon} text-slate-400 text-lg"></i>
                </div>
                <h4 class="text-lg font-bold text-white mb-1">${item.baslik}</h4>
                <p class="text-[11px] text-blue-300 font-medium mb-2">${item.unite}</p>
                <p class="text-xs text-slate-400 mb-4 line-clamp-2">${item.ozet}</p>
            </div>
            
            <div>
                <div class="flex flex-wrap gap-1.5 mb-4">
                    ${item.kategoriler.map(kat => `<span class="text-[10px] bg-slate-900/80 text-slate-300 px-2 py-0.5 rounded border border-slate-700">${kat}</span>`).join('')}
                </div>
                <a href="${item.link}" class="w-full py-2 bg-slate-700/60 hover:bg-slate-700 text-slate-200 text-xs font-medium rounded-lg transition flex items-center justify-center space-x-1.5">
                    <span>Ders Notları ve Etkinlikler</span>
                    <i class="fa-solid fa-chevron-right text-[10px]"></i>
                </a>
            </div>
        </div>
    `).join('');
}

function filtreleSinif(sinif) {
    const baslik = document.getElementById("baslik-icerik");
    const icerikAlani = document.getElementById("icerik-alani");

    if (sinif === 'hepsi') {
        if (baslik) baslik.textContent = "Tüm Ders İçerikleri (Yıllık Plan)";
        tumIcerikleriYukle(dersIcerikleri);
    } else {
        if (baslik) baslik.textContent = `${sinif}. Sınıf Yıllık Plan Konuları`;
        const filtrelenmis = dersIcerikleri.filter(item => item.sinif === sinif);
        tumIcerikleriYukle(filtrelenmis);
    }

    if (icerikAlani) {
        icerikAlani.scrollIntoView({ behavior: 'smooth' });
    }
}
