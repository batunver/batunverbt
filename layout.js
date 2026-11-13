// layout.js — Ortak Menü, Footer ve Yayınlanan Dersler

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
});

function aktifSayfaAdi() {
    const yol = window.location.pathname.split("/").pop();
    return yol === "" ? "index.html" : yol;
}

function ortakHeaderBas() {
    const hedef = document.getElementById("site-header");
    if (!hedef) return;

    const sayfa = aktifSayfaAdi();
    const params = new URLSearchParams(window.location.search);
    const aktifSinif = sayfa === "sinif.html" ? (params.get("sinif") === "6" ? "6" : "5") : "";

    const aktifClass = "text-xs font-semibold px-3.5 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 transition-all shadow-sm flex items-center gap-1.5";
    const normalClass = "text-xs font-semibold px-3.5 py-2 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all flex items-center gap-1.5";

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
                <a href="sinif.html?sinif=5" class="${aktifSinif === '5' ? aktifClass : normalClass}">
                    <span>5. Sınıf</span>
                </a>
                <a href="sinif.html?sinif=6" class="${aktifSinif === '6' ? aktifClass : normalClass}">
                    <span>6. Sınıf</span>
                </a>
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
