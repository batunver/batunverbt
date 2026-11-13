// layout.js — Ortak Menü, Footer, Yayınlanan Dersler ve Sınıf Modalı

const yayinlananDersler = [
    "5-hafta-8",
    "5-hafta-9",
    "5-hafta-10",
    "6-hafta-6",
    "6-hafta-7",
    "6-hafta-8",
    "6-hafta-9"
];

document.addEventListener("DOMContentLoaded", () => {
    ortakHeaderBas();
    ortakFooterBas();
    ortakModalBas();
});

function aktifSayfaAdi() {
    const yol = window.location.pathname.split("/").pop();
    return yol === "" ? "index.html" : yol;
}

function ortakHeaderBas() {
    const hedef = document.getElementById("site-header");
    if (!hedef) return;

    const sayfa = aktifSayfaAdi();
    const aktifClass = "text-xs font-semibold px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 transition-all shadow-sm flex items-center gap-1.5";
    const normalClass = "text-xs font-semibold px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1.5 cursor-pointer";

    hedef.innerHTML = `
    <header class="bg-white/90 backdrop-blur border-b border-slate-200 shadow-sm sticky top-0 z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[5rem] md:h-24 py-2 md:py-0 flex flex-col md:flex-row items-center justify-between gap-2">
            <a href="index.html" class="flex items-center h-16 sm:h-20 shrink-0 overflow-hidden group">
                <img
                    src="images/logo3.jpg"
                    alt="Batunver - Bilişim Teknolojileri ve Yazılım Öğretmeni"
                    class="h-28 sm:h-36 w-auto object-contain group-hover:scale-105 transition-transform duration-300 mix-blend-multiply"
                >
            </a>

            <nav class="flex flex-wrap items-center justify-center md:justify-end gap-1.5 sm:gap-2">
                <a href="index.html" class="${sayfa === 'index.html' ? aktifClass : normalClass}">
                    <i class="fa-solid fa-house"></i>
                    <span>Ana Sayfa</span>
                </a>
                <button type="button" onclick="sinifModalAc('5')" class="${normalClass}">
                    <span>5. Sınıf</span>
                </button>
                <button type="button" onclick="sinifModalAc('6')" class="${normalClass}">
                    <span>6. Sınıf</span>
                </button>
                <a href="calismasorulari.html" class="${sayfa === 'calismasorulari.html' ? aktifClass : normalClass}">
                    <i class="fa-solid fa-file-pen"></i>
                    <span>Yazılı Çalışma Soruları</span>
                </a>
                <a href="evrakcantasi.html" class="${sayfa === 'evrakcantasi.html' ? aktifClass : normalClass}">
                    <i class="fa-solid fa-briefcase"></i>
                    <span>Evrak Çantası</span>
                </a>
                <a href="hakkimda.html" class="${sayfa === 'hakkimda.html' ? aktifClass : normalClass}">
                    <i class="fa-solid fa-id-badge"></i>
                    <span>Hakkımda</span>
                </a>
            </nav>
        </div>
    </header>`;
}

function ortakFooterBas() {
    const hedef = document.getElementById("site-footer");
    if (!hedef) return;

    hedef.innerHTML = `
    <footer class="bg-white border-t border-slate-200 mt-16 py-8 text-center text-xs text-slate-500">
        <p>&copy;2026 batunver Tüm hakları saklıdır. - Bilişim Teknolojileri ve Yazılım Dersi Portalı</p>
    </footer>`;
}

function ortakModalBas() {
    if (document.getElementById("sinifModal")) return;

    const modalHtml = `
    <div id="sinifModal" class="fixed inset-0 z-50 hidden bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
        <div class="bg-white border border-slate-200 w-full max-w-4xl max-h-[88vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden">
            <div class="px-6 py-5 border-b border-slate-200 flex items-center justify-between bg-white/90 sticky top-0 z-10">
                <h3 id="modalBaslik" class="text-xl font-bold text-slate-900">Sınıf Planı</h3>
                <button type="button" onclick="modalKapat()" aria-label="Kapat" class="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 flex items-center justify-center transition-all cursor-pointer">
                    <i class="fa-solid fa-xmark text-lg"></i>
                </button>
            </div>
            <div id="modalIcerikContainer" class="p-6 overflow-y-auto space-y-3 flex-grow"></div>
                <div class="px-6 py-3.5 border-t border-slate-200 bg-slate-50 flex items-center justify-end">
                    <a id="modalTumSayfaLink" href="sinif.html?sinif=5" class="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5">
                        <span>Sınıfın Tüm İçerik Sayfasını Aç</span>
                        <i class="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
                    </a>
                </div>
        </div>
    </div>`;

    document.body.insertAdjacentHTML("beforeend", modalHtml);
}

function sinifModalAc(sinif) {
    const modal = document.getElementById("sinifModal");
    const modalBaslik = document.getElementById("modalBaslik");
    const container = document.getElementById("modalIcerikContainer");
    if (!modal || !container) return;

    modalBaslik.innerText = `${sinif}. Sınıf Eklenen Ders İçerikleri`;
    container.innerHTML = "";

    let eklenenSayisi = 0;

    if (typeof dersIcerikleri !== "undefined") {
        yayinlananDersler.forEach(key => {
            const veri = dersIcerikleri[key];
            if (!veri) return;

            const sinifEslesiyor = String(veri.sinif) === String(sinif) || key.startsWith(sinif + "-");
            if (!sinifEslesiyor) return;

            eklenenSayisi++;
            const haftaNum = veri.hafta || key.split("-")[2] || "1";
            const renkKutu = sinif === "5"
                ? "bg-blue-100 text-blue-700 border-blue-200"
                : "bg-cyan-100 text-cyan-700 border-cyan-200";
            const renkHover = sinif === "5" ? "group-hover:text-blue-600" : "group-hover:text-cyan-600";

            const item = document.createElement("a");
            item.href = `icerik.html?id=${key}`;
            item.className = "flex items-center justify-between p-4 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm rounded-2xl transition-all group";
            item.innerHTML = `
                <div class="flex items-center space-x-4">
                    <div class="w-10 h-10 rounded-xl ${renkKutu} flex items-center justify-center font-bold text-sm border shrink-0">
                        ${haftaNum}
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 text-sm sm:text-base ${renkHover} transition-colors">${veri.baslik}</h4>
                        <p class="text-xs text-slate-500 line-clamp-1">${veri.kazanim || ""}</p>
                    </div>
                </div>
                <i class="fa-solid fa-chevron-right text-xs text-slate-400 group-hover:text-slate-700 transition-colors ml-2 shrink-0"></i>
            `;
            container.appendChild(item);
        });
    }

    if (eklenenSayisi === 0) {
        container.innerHTML = `<p class="text-center text-slate-500 py-8 text-sm">Bu sınıfa ait henüz içerik eklenmemiştir.</p>`;
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function modalKapat() {
    const modal = document.getElementById("sinifModal");
    if (modal) modal.classList.add("hidden");
    document.body.style.overflow = "auto";
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modalKapat();
});

document.addEventListener("click", (e) => {
    const modal = document.getElementById("sinifModal");
    if (modal && e.target === modal) modalKapat();
});
