// main.js - batunverbt Portalı Kontrol Kodları

// Aktif filtre durumlarını tutan değişkenler
let currentGrade = 'all';
let currentType = 'all';
let searchQuery = '';

// Sayfa yüklendiğinde kartları ilk kez listele
document.addEventListener('DOMContentLoaded', () => {
    renderCards(materialsData);
    setupSearchListener();
});

// 1. Kartları ekrana basma fonksiyonu
function renderCards(data) {
    const grid = document.getElementById('cardGrid');
    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full text-center py-12 text-slate-400">
                <i data-lucide="folder-search" class="w-12 h-12 mx-auto mb-3 opacity-50"></i>
                <p class="text-base font-medium">Aradığınız kriterlere uygun materyal bulunamadı.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = "bg-slate-800/60 border border-slate-700/60 rounded-2xl p-5 flex flex-col justify-between hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 group";
        
        card.innerHTML = `
            <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                    <span class="text-xs font-semibold px-2.5 py-1 rounded-lg border ${item.badgeColor}">
                        ${item.category}
                    </span>
                    <span class="text-xs text-slate-400 bg-slate-900/50 px-2 py-0.5 rounded-md">
                        ${item.grade === 'all' ? 'Tüm Sınıflar' : item.grade + '. Sınıf'}
                    </span>
                </div>
                <h3 class="font-bold text-slate-100 text-base mb-2 group-hover:text-indigo-400 transition-colors">
                    ${item.title}
                </h3>
                <p class="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                    ${item.description}
                </p>
            </div>
            <div class="pt-3 border-t border-slate-700/50 flex items-center justify-between">
                <span class="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">batunverbt</span>
                <button onclick="handleCardClick(${item.id})" class="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-md shadow-indigo-600/20 flex items-center gap-1.5">
                    <span>İncele</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    lucide.createIcons();
}

// 2. Sınıf Filtreleme (Tüm, 5, 6)
function filterGrade(grade) {
    currentGrade = grade;
    
    // Buton aktiflik stillerini güncelle
    const buttons = document.querySelectorAll('#gradeFilters button');
    buttons.forEach(btn => {
        btn.classList.remove('bg-indigo-600', 'text-white');
        btn.classList.add('bg-slate-800', 'text-slate-300');
    });
    event.target.classList.remove('bg-slate-800', 'text-slate-300');
    event.target.classList.add('bg-indigo-600', 'text-white');

    applyFilters();
}

// 3. Materyal Türü Filtreleme (Sunu, Oyun, Araç)
function filterType(type) {
    currentType = type;

    const buttons = document.querySelectorAll('#typeFilters button');
    buttons.forEach(btn => {
        btn.classList.remove('bg-slate-700/60', 'text-slate-200');
        btn.classList.add('bg-slate-800', 'text-slate-400');
    });
    event.target.classList.remove('bg-slate-800', 'text-slate-400');
    event.target.classList.add('bg-slate-700/60', 'text-slate-200');

    applyFilters();
}

// 4. Arama Çubuğu Dinleyicisi
function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase().trim();
        applyFilters();
    });
}

// 5. Filtreleri Birleştirme Mantığı
function applyFilters() {
    let filtered = materialsData.filter(item => {
        // Sınıf filtresi
        const matchGrade = (currentGrade === 'all') || (item.grade === currentGrade) || (item.grade === 'all');
        // Tür filtresi
        const matchType = (currentType === 'all') || (item.type === currentType);
        // Arama filtresi
        const matchSearch = item.title.toLowerCase().includes(searchQuery) || 
                            item.description.toLowerCase().includes(searchQuery) ||
                            item.category.toLowerCase().includes(searchQuery);

        return matchGrade && matchType && matchSearch;
    });

    renderCards(filtered);
}

// 6. Kart Tıklama Aksiyonu
// Kart Tıklama Aksiyonu (Güncellendi)
// Kart Tıklama Aksiyonu (Güncellendi)
function handleCardClick(id) {
    const item = materialsData.find(m => m.id === id);
    
    if (item.action === 'openTimer') {
        openTimerModal();
    } else if (item.action === 'openWheel') {
        openWheelModal();
    } else if (item.action === 'openEpoptesGuide') {
        openEpoptesModal();
    } else if (item.action === 'openPythonGuide') {
        openPythonModal();
    } else {
        alert(`"${item.title}" lab görevi açılıyor...`);
    }
}

// 3. ARAÇ: Epoptes & Pardus Hızlı Komut Rehberi
function openEpoptesModal() {
    const html = `
        <div class="space-y-4 text-left">
            <div class="flex items-center gap-2 text-cyan-400 border-b border-slate-700 pb-3">
                <i data-lucide="terminal" class="w-6 h-6"></i>
                <h2 class="text-lg font-bold">Pardus & Epoptes Lab Yönetim Notları</h2>
            </div>
            
            <div class="space-y-3 text-xs text-slate-300">
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-cyan-300 mb-1">1. Epoptes Servisini Yeniden Başlatma (Terminal)</p>
                    <code class="bg-slate-900 px-2 py-1 rounded text-emerald-400 block mt-1">sudo systemctl restart epoptes</code>
                </div>

                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-cyan-300 mb-1">2. Öğretmen Bilgisayarından İstemcileri Uyandırma (WoL)</p>
                    <p class="text-slate-400">19 bilgisayarın statik MAC adres listesi üzerinden toplu açılış komutu.</p>
                </div>

                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-cyan-300 mb-1">3. Lab Ekran Kilidi / Kilidi Kaldırma</p>
                    <p class="text-slate-400">Öğrenci dikkatini tahtaya toplamak için Epoptes arayüzünden "Ekranı Kilitle" komutu.</p>
                </div>
            </div>
        </div>
    `;
    showModal(html);
}

// 4. ARAÇ: Python Lab Notları ve Kısayolları
function openPythonModal() {
    const html = `
        <div class="space-y-4 text-left">
            <div class="flex items-center gap-2 text-amber-400 border-b border-slate-700 pb-3">
                <i data-lucide="code" class="w-6 h-6"></i>
                <h2 class="text-lg font-bold">Python Hızlı Sözdizimi & Lab İpuçları</h2>
            </div>
            
            <div class="space-y-3 text-xs text-slate-300">
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-amber-300 mb-1">Ekrana Yazdırma (print)</p>
                    <code class="bg-slate-900 px-2 py-1 rounded text-emerald-400 block mt-1">print("Merhaba batunverbt Lab!")</code>
                </div>

                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-amber-300 mb-1">Veri Alma ve Değişken (input)</p>
                    <code class="bg-slate-900 px-2 py-1 rounded text-emerald-400 block mt-1">isim = input("Adınız nedir? ")<br>print("Hoş geldin", isim)</code>
                </div>

                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700">
                    <p class="font-bold text-amber-300 mb-1">Temel Koşul (if / else)</p>
                    <code class="bg-slate-900 px-2 py-1 rounded text-emerald-400 block mt-1">notu = 85<br>if notu >= 50:<br>&nbsp;&nbsp;&nbsp;&nbsp;print("Geçti!")</code>
                </div>
            </div>
        </div>
    `;
    showModal(html);

}

// Modalı Açma / Kapatma Fonksiyonları
function showModal(htmlContent) {
    const modal = document.getElementById('toolModal');
    const content = document.getElementById('modalContent');
    content.innerHTML = htmlContent;
    modal.classList.remove('hidden');
    lucide.createIcons();
}

function closeToolModal() {
    const modal = document.getElementById('toolModal');
    modal.classList.add('hidden');
    // Eğer çalışan bir sayaç varsa durdurabiliriz
    if (window.timerInterval) clearInterval(window.timerInterval);
}

// 1. ARAÇ: Lab Geri Sayım Sayacı (Kronometre)
function openTimerModal() {
    const html = `
        <div class="text-center space-y-6">
            <div class="flex items-center justify-center gap-2 text-emerald-400">
                <i data-lucide="timer" class="w-6 h-6"></i>
                <h2 class="text-xl font-bold">Lab Uygulama Süresi</h2>
            </div>
            
            <div id="timerDisplay" class="text-6xl font-ext500 font-mono tracking-wider text-white bg-slate-800/80 py-8 rounded-2xl border border-slate-700">
                15:00
            </div>

            <div class="flex justify-center gap-3">
                <button onclick="startTimer(900)" class="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">15 Dakika</button>
                <button onclick="startTimer(600)" class="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">10 Dakika</button>
                <button onclick="startTimer(300)" class="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">5 Dakika</button>
                <button onclick="stopTimer()" class="bg-rose-600 hover:bg-rose-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition">Durdur</button>
            </div>
        </div>
    `;
    showModal(html);
}

let timerInterval;
function startTimer(seconds) {
    if (timerInterval) clearInterval(timerInterval);
    
    let remainingTime = seconds;
    const display = document.getElementById('timerDisplay');

    timerInterval = setInterval(() => {
        let mins = Math.floor(remainingTime / 60);
        let secs = remainingTime % 60;

        display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            display.textContent = "SÜRE BİTTİ!";
        }
        remainingTime--;
    }, 1000);
}

function stopTimer() {
    if (timerInterval) clearInterval(timerInterval);
}

// 2. ARAÇ: Lab Bilgisayar / Masa Kurası (1-19 PC)
function openWheelModal() {
    const html = `
        <div class="text-center space-y-6">
            <div class="flex items-center justify-center gap-2 text-rose-400">
                <i data-lucide="shuffle" class="w-6 h-6"></i>
                <h2 class="text-xl font-bold">Lab Masa / Bilgisayar Kurası</h2>
            </div>
            
            <div id="wheelResult" class="text-5xl font-extrabold text-white bg-slate-800/80 py-10 rounded-2xl border border-slate-700 tracking-wide">
                ?
            </div>
            <p class="text-xs text-slate-400">Labdaki 19 bilgisayar masasından rastgele seçim yapın.</p>

            <button onclick="spinWheel()" class="w-full bg-rose-600 hover:bg-rose-500 text-white py-3 rounded-xl font-bold transition shadow-lg shadow-rose-600/30">
                Kura Çek (Masa Seç)
            </button>
        </div>
    `;
    showModal(html);
}

function spinWheel() {
    const resultBox = document.getElementById('wheelResult');
    let counter = 0;
    
    const spinInterval = setInterval(() => {
        let randomPc = Math.floor(Math.random() * 19) + 1;
        resultBox.textContent = `Masa - ${randomPc}`;
        counter++;
        
        if (counter > 15) {
            clearInterval(spinInterval);
            // Son şanslı masa
            let finalPc = Math.floor(Math.random() * 19) + 1;
            resultBox.textContent = `🎉 Masa - ${finalPc}`;
        }
    }, 100);
}