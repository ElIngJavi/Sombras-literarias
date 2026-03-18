// app.js — Sombras Literarias

const categoryNames = {
    'Novela_de_terror':   'Novela de Terror',
    'Manga_de_terror':    'Manga de Terror',
    'Cómic_de_terror':    'Cómic de Terror',
    'Novela_de_misterio': 'Novela de Misterio',
    'Cuentos_de_terror':  'Cuentos de Terror',
};

const ratingLabels = ['', 'Pésimo', 'Regular', 'Bueno', 'Muy bueno', 'Obra maestra'];
const PAGE_SIZE = 12;

// ── STATE ─────────────────────────────────────────────────
let currentCategory = '';
let currentSort     = '';
let showFavOnly     = false;
let currentPage     = 1;
let isListView      = false;
let currentBook     = null;

let favorites = JSON.parse(localStorage.getItem('sl_favorites') || '[]');
let ratings   = JSON.parse(localStorage.getItem('sl_ratings')   || '{}');
let history   = JSON.parse(localStorage.getItem('sl_history')   || '[]'); // array of titles, max 12

function saveFavorites() { localStorage.setItem('sl_favorites', JSON.stringify(favorites)); }
function saveRatings()   { localStorage.setItem('sl_ratings',   JSON.stringify(ratings)); }
function saveHistory()   { localStorage.setItem('sl_history',   JSON.stringify(history)); }
function isFav(t)        { return favorites.includes(t); }
function toggleFav(t)    { isFav(t) ? favorites = favorites.filter(x => x !== t) : favorites.push(t); saveFavorites(); }
function getRating(t)    { return ratings[t] || 0; }
function setRating(t, v) { ratings[t] = v; saveRatings(); }

function addHistory(book) {
    history = [book.title, ...history.filter(t => t !== book.title)].slice(0, 12);
    saveHistory();
    renderHistory();
}

// ── EMBER CANVAS ──────────────────────────────────────────
(function () {
    const cv=document.getElementById('emberCanvas'),ctx=cv.getContext('2d');
    let W,H,pts=[];
    const cols=['rgba(139,0,0,','rgba(180,20,0,','rgba(210,50,10,','rgba(232,76,30,','rgba(200,100,20,','rgba(201,151,58,'];
    function resize(){W=cv.width=window.innerWidth;H=cv.height=window.innerHeight;}
    function mk(){const c=cols[Math.floor(Math.random()*cols.length)];return{x:Math.random()*W,y:H+Math.random()*60,r:0.8+Math.random()*2.5,s:0.4+Math.random()*1.2,d:(Math.random()-0.5)*0.5,a:0,f:0.006+Math.random()*0.008,up:true,c,w:Math.random()*Math.PI*2,ws:0.01+Math.random()*0.02,wa:0.3+Math.random()*0.8};}
    function seed(){for(let i=0;i<80;i++){const p=mk();p.y=Math.random()*H;p.a=Math.random()*0.6;pts.push(p);}}
    function draw(){
        ctx.clearRect(0,0,W,H);
        if(pts.length<120)for(let i=0;i<2;i++)pts.push(mk());
        for(let i=pts.length-1;i>=0;i--){
            const p=pts[i];p.w+=p.ws;p.x+=p.d+Math.sin(p.w)*p.wa;p.y-=p.s;
            if(p.up){p.a=Math.min(p.a+p.f*2,0.85);if(p.a>=0.85)p.up=false;}else p.a-=p.f;
            if(p.a<=0||p.y<-20){pts.splice(i,1);continue;}
            ctx.save();
            const g=ctx.createRadialGradient(p.x,p.y,0,p.x,p.y,p.r*4);
            g.addColorStop(0,p.c+(p.a*0.9)+')');g.addColorStop(0.4,p.c+(p.a*0.3)+')');g.addColorStop(1,p.c+'0)');
            ctx.beginPath();ctx.arc(p.x,p.y,p.r*4,0,Math.PI*2);ctx.fillStyle=g;ctx.fill();
            ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=p.c+p.a+')';ctx.fill();
            ctx.restore();
        }
        requestAnimationFrame(draw);
    }
    window.addEventListener('resize',resize,{passive:true});
    resize();seed();draw();
})();

// ── IMAGE OPTIMIZATION ────────────────────────────────────
// loading="lazy" on every <img> handles optimization natively
function optimizeImg(url) { return url || ''; }

// ── REFS ──────────────────────────────────────────────────
const navbar        = document.getElementById('navbar');
const hamburger     = document.getElementById('hamburger');
const drawer        = document.getElementById('mobileDrawer');
const searchDesk    = document.getElementById('searchInput');
const searchMob     = document.getElementById('searchMobile');
const suggestions   = document.getElementById('searchSuggestions');
const filterBar     = document.getElementById('filterBar');
const filterLabel   = document.getElementById('filterLabel');
const clearFilter   = document.getElementById('clearFilter');
const noResults     = document.getElementById('noResults');
const bookGrid      = document.getElementById('bookList');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalFavBtn   = document.getElementById('modalFavBtn');
const scrollTopBtn  = document.getElementById('scrollTop');
const themeToggle   = document.getElementById('themeToggle');
const favBtn        = document.getElementById('favBtn');
const sortSelect    = document.getElementById('sortSelect');
const bookCount     = document.getElementById('bookCount');
const pagination    = document.getElementById('pagination');
const viewGrid      = document.getElementById('viewGrid');
const viewList      = document.getElementById('viewList');
const historySection = document.getElementById('historySection');
const historyStrip  = document.getElementById('historyStrip');
const historyClear  = document.getElementById('historyClear');

// ── COUNTERS ──────────────────────────────────────────────
document.querySelectorAll('.nav-count[data-count]').forEach(el => {
    el.textContent = books.filter(b => b.category === el.dataset.count).length;
});

// ── THEME ─────────────────────────────────────────────────
const savedTheme = localStorage.getItem('sl_theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);
themeToggle.textContent = savedTheme === 'dark' ? '☀' : '☾';
themeToggle.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    themeToggle.textContent = next === 'dark' ? '☀' : '☾';
    localStorage.setItem('sl_theme', next);
});

// ── NAVBAR SCROLL ─────────────────────────────────────────
window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 20), {passive:true});

// ── HAMBURGER ─────────────────────────────────────────────
hamburger.addEventListener('click', () => { hamburger.classList.toggle('open'); drawer.classList.toggle('open'); });
document.addEventListener('click', e => {
    if (!navbar.contains(e.target)) { hamburger.classList.remove('open'); drawer.classList.remove('open'); }
    if (!e.target.closest('.nav-search-wrap')) hideSuggestions();
});

// ── CATEGORY LINKS ────────────────────────────────────────
function bindCat(sel) {
    document.querySelectorAll(sel).forEach(l => {
        l.addEventListener('click', e => {
            e.preventDefault();
            currentCategory = l.dataset.category; currentPage = 1;
            syncSearch(''); renderBooks();
            hamburger.classList.remove('open'); drawer.classList.remove('open');
            document.querySelectorAll('[data-category]').forEach(x => x.classList.remove('active'));
            document.querySelectorAll(`[data-category="${currentCategory}"]`).forEach(x => x.classList.add('active'));
        });
    });
}
bindCat('.nav-links a'); bindCat('.drawer-links a');

// ── SORT / FAV / VIEW ─────────────────────────────────────
sortSelect.addEventListener('change', () => { currentSort = sortSelect.value; currentPage = 1; renderBooks(); });
favBtn.addEventListener('click', () => {
    showFavOnly = !showFavOnly;
    favBtn.classList.toggle('active', showFavOnly);
    favBtn.textContent = showFavOnly ? '♥ Favoritos' : '♡ Favoritos';
    currentPage = 1; renderBooks();
});
viewGrid.addEventListener('click', () => {
    isListView = false;
    viewGrid.classList.add('active'); viewList.classList.remove('active');
    bookGrid.classList.remove('list-view');
    currentPage = 1; renderBooks();
});
viewList.addEventListener('click', () => {
    isListView = true;
    viewList.classList.add('active'); viewGrid.classList.remove('active');
    bookGrid.classList.add('list-view');
    currentPage = 1; renderBooks();
});

// ── SEARCH + SUGGESTIONS ──────────────────────────────────
function syncSearch(v) { if(searchDesk) searchDesk.value=v; if(searchMob) searchMob.value=v; }
function hideSuggestions() { suggestions.classList.remove('visible'); suggestions.innerHTML=''; }
function showSuggestions(term) {
    if (!term || term.length < 2) { hideSuggestions(); return; }
    const matches = books.filter(b => b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term)).slice(0,6);
    if (!matches.length) { hideSuggestions(); return; }
    suggestions.innerHTML = matches.map(b => {
        const hl = s => s.replace(new RegExp(`(${term})`, 'gi'), '<mark>$1</mark>');
        return `<li data-title="${b.title}">
            <img class="sug-cover" src="${optimizeImg(b.cover, 60)}" alt="" loading="lazy" onerror="this.style.display='none'">
            <span>${hl(b.title)} <small style="opacity:0.6">— ${hl(b.author)}</small></span>
        </li>`;
    }).join('');
    suggestions.classList.add('visible');
    suggestions.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', () => {
            const book = books.find(b => b.title === li.dataset.title);
            hideSuggestions(); syncSearch(''); currentCategory = ''; renderBooks();
            if (book) setTimeout(() => openModal(book), 80);
        });
    });
}
function onSearch(e) {
    syncSearch(e.target.value); currentCategory = ''; currentPage = 1;
    document.querySelectorAll('[data-category]').forEach(l => l.classList.remove('active'));
    renderBooks(); showSuggestions(e.target.value.toLowerCase().trim());
}
if (searchDesk) searchDesk.addEventListener('input', onSearch);
if (searchMob)  searchMob.addEventListener('input', onSearch);
searchDesk?.addEventListener('keydown', e => { if(e.key==='Escape') hideSuggestions(); });
clearFilter.addEventListener('click', () => {
    currentCategory = ''; currentPage = 1; syncSearch('');
    document.querySelectorAll('[data-category]').forEach(l => l.classList.remove('active'));
    renderBooks();
});

// ── HISTORY ───────────────────────────────────────────────
function renderHistory() {
    const items = history.map(t => books.find(b => b.title === t)).filter(Boolean);
    if (!items.length) { historySection.style.display = 'none'; return; }
    historySection.style.display = 'block';
    historyStrip.innerHTML = items.map(b => `
        <div class="history-item" data-title="${b.title}">
            <img src="${optimizeImg(b.cover, 120)}" alt="${b.title}" loading="lazy"
                onerror="this.src='https://via.placeholder.com/60x90/130a0c/8b0000?text=?'">
            <p>${b.title}</p>
        </div>`).join('');
    historyStrip.querySelectorAll('.history-item').forEach(el => {
        el.addEventListener('click', () => {
            const book = books.find(b => b.title === el.dataset.title);
            if (book) openModal(book);
        });
    });
}
historyClear.addEventListener('click', () => { history = []; saveHistory(); renderHistory(); });

// ── OBSERVER ──────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = (parseInt(entry.target.dataset.idx) || 0) % 8 * 65;
            setTimeout(() => entry.target.classList.add('visible'), delay);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

// ── STAR RATING UI ────────────────────────────────────────
function initStars(book) {
    const stars = document.querySelectorAll('#starRating .star');
    const label = document.getElementById('ratingLabel');
    const current = getRating(book.title);

    function paint(v) {
        stars.forEach((s, i) => s.classList.toggle('on', i < v));
        label.textContent = v ? ratingLabels[v] : 'Sin calificar';
    }
    paint(current);

    stars.forEach(s => {
        s.onmouseenter = () => paint(+s.dataset.v);
        s.onmouseleave = () => paint(getRating(book.title));
        s.onclick = () => {
            const v = +s.dataset.v;
            setRating(book.title, v); paint(v);
            // update card stars if visible
            renderCardStars(book.title, v);
        };
    });
}

function renderCardStars(title, v) {
    document.querySelectorAll('.book-card').forEach(card => {
        if (card.querySelector('.book-title')?.textContent === title) {
            const stars = card.querySelectorAll('.card-stars span');
            stars.forEach((s, i) => s.classList.toggle('on', i < v));
        }
    });
    // also list view
    document.querySelectorAll('.list-stars').forEach(row => {
        const meta = row.closest('.card-info')?.querySelector('.book-title');
        if (meta?.textContent === title) {
            row.querySelectorAll('span').forEach((s, i) => s.classList.toggle('on', i < v));
        }
    });
}

// ── MODAL ─────────────────────────────────────────────────
function openModal(book) {
    currentBook = book;
    addHistory(book);
    document.getElementById('modalImg').src            = optimizeImg(book.cover, 300);
    document.getElementById('modalImg').alt            = book.title;
    document.getElementById('modalTitle').textContent      = book.title;
    document.getElementById('modalAuthor').textContent     = book.author;
    document.getElementById('modalCategory').textContent   = categoryNames[book.category] || '';
    document.getElementById('modalSynopsis').textContent   = book.synopsis || '';
    document.getElementById('modalReadBtn').href           = book.downloadLink;
    const wa = encodeURIComponent(`📖 *${book.title}* — ${book.author}\n\n${(book.synopsis||'').slice(0,120)}…\n\nLeer: ${book.downloadLink}`);
    document.getElementById('modalShareWA').href = `https://wa.me/?text=${wa}`;

    // Show "Leer aquí" only for books with full URLs
    modalReaderBtn.style.display = isFullUrl(book.downloadLink) ? 'inline-block' : 'none';
    const loved = isFav(book.title);
    modalFavBtn.textContent = loved ? '♥' : '♡';
    modalFavBtn.classList.toggle('loved', loved);
    initStars(book);
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeModal() { modalBackdrop.classList.remove('open'); document.body.style.overflow = ''; currentBook = null; }
document.getElementById('modalClose').addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => { if(e.target===modalBackdrop) closeModal(); });
document.addEventListener('keydown', e => { if(e.key==='Escape') closeModal(); });

modalFavBtn.addEventListener('click', () => {
    if (!currentBook) return;
    toggleFav(currentBook.title);
    const loved = isFav(currentBook.title);
    modalFavBtn.textContent = loved ? '♥' : '♡';
    modalFavBtn.classList.toggle('loved', loved);
    document.querySelectorAll('.book-card').forEach(card => {
        if (card.querySelector('.book-title')?.textContent === currentBook.title) {
            const btn = card.querySelector('.card-fav, .list-fav');
            if (btn) { btn.textContent = loved ? '♥' : '♡'; btn.classList.toggle('loved', loved); }
        }
    });
    if (showFavOnly) renderBooks();
});

// ── PDF READER ────────────────────────────────────────────
const readerOverlay  = document.getElementById('readerOverlay');
const readerFrame    = document.getElementById('readerFrame');
const readerTitle    = document.getElementById('readerTitle');
const readerClose    = document.getElementById('readerClose');
const readerExtBtn   = document.getElementById('readerExtBtn');
const readerFallback = document.getElementById('readerFallback');
const readerFallbackLink = document.getElementById('readerFallbackLink');
const modalReaderBtn = document.getElementById('modalReaderBtn');

function isFullUrl(url) {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
}

// Google Docs PDF viewer — works for any public PDF URL
function pdfViewerUrl(url) {
    return `https://docs.google.com/viewer?url=${encodeURIComponent(url)}&embedded=true`;
}

function openReader(book) {
    closeModal();
    readerTitle.textContent = book.title;
    readerExtBtn.href = book.downloadLink;
    readerFallbackLink.href = book.downloadLink;
    readerFallback.style.display = 'none';
    readerFrame.style.display = 'block';
    readerFrame.src = pdfViewerUrl(book.downloadLink);
    readerOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';

    // If iframe fails to load after 8s, show fallback
    const timeout = setTimeout(() => {
        readerFallback.style.display = 'flex';
        readerFrame.style.display = 'none';
    }, 8000);
    readerFrame.onload = () => clearTimeout(timeout);
}

function closeReader() {
    readerOverlay.classList.remove('open');
    document.body.style.overflow = '';
    readerFrame.src = '';
}

readerClose.addEventListener('click', closeReader);
document.addEventListener('keydown', e => { if (e.key === 'Escape' && readerOverlay.classList.contains('open')) closeReader(); });

modalReaderBtn.addEventListener('click', () => { if (currentBook) openReader(currentBook); });

// ── SCROLL TOP ────────────────────────────────────────────
window.addEventListener('scroll', () => scrollTopBtn.classList.toggle('visible', window.scrollY > 400), {passive:true});
scrollTopBtn.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

// ── PAGINATION ────────────────────────────────────────────
function renderPagination(total, page) {
    const pages = Math.ceil(total / PAGE_SIZE);
    pagination.innerHTML = '';
    if (pages <= 1) return;
    const prev = document.createElement('button');
    prev.className='page-btn'; prev.textContent='←'; prev.disabled=page===1;
    prev.addEventListener('click', () => { currentPage--; renderBooks(); window.scrollTo({top:0,behavior:'smooth'}); });
    pagination.appendChild(prev);
    const range = [];
    for (let i=1;i<=pages;i++) {
        if(i===1||i===pages||(i>=page-1&&i<=page+1)) range.push(i);
        else if(range[range.length-1]!=='…') range.push('…');
    }
    range.forEach(p => {
        if (p==='…') { const el=document.createElement('span');el.className='page-ellipsis';el.textContent='…';pagination.appendChild(el); }
        else {
            const btn=document.createElement('button');
            btn.className='page-btn'+(p===page?' active':'');btn.textContent=p;
            btn.addEventListener('click',()=>{currentPage=p;renderBooks();window.scrollTo({top:0,behavior:'smooth'});});
            pagination.appendChild(btn);
        }
    });
    const next=document.createElement('button');
    next.className='page-btn';next.textContent='→';next.disabled=page===pages;
    next.addEventListener('click',()=>{currentPage++;renderBooks();window.scrollTo({top:0,behavior:'smooth'});});
    pagination.appendChild(next);
}

// ── RENDER ────────────────────────────────────────────────
function getFiltered() {
    const term = (searchDesk?.value||'').toLowerCase().trim();
    let filtered = books.filter(b => {
        const mc = !currentCategory || b.category === currentCategory;
        const ms = !term || b.title.toLowerCase().includes(term) || b.author.toLowerCase().includes(term);
        const mf = !showFavOnly || isFav(b.title);
        return mc && ms && mf;
    });
    if (currentSort) {
        const [field, dir] = currentSort.split('-');
        filtered = [...filtered].sort((a, b) => {
            if (field === 'rating') {
                return dir==='desc' ? getRating(b.title)-getRating(a.title) : getRating(a.title)-getRating(b.title);
            }
            const va=a[field].toLowerCase(),vb=b[field].toLowerCase();
            return dir==='asc' ? va.localeCompare(vb) : vb.localeCompare(va);
        });
    }
    return filtered;
}

function starsHTML(title, cls='card-stars') {
    const v = getRating(title);
    return `<div class="${cls}">${[1,2,3,4,5].map(i=>`<span class="${i<=v?'on':''}"}>★</span>`).join('')}</div>`;
}

function renderBooks() {
    const filtered = getFiltered();
    const total = filtered.length;
    const pages = Math.ceil(total / PAGE_SIZE);
    if (currentPage > pages) currentPage = 1;
    const pageBooks = filtered.slice((currentPage-1)*PAGE_SIZE, currentPage*PAGE_SIZE);

    filterBar.style.display = currentCategory ? 'flex' : 'none';
    if (currentCategory) filterLabel.textContent = categoryNames[currentCategory] || currentCategory;
    bookCount.textContent = total > 0 ? `${total} libro${total!==1?'s':''}` : '';

    bookGrid.innerHTML = '';
    noResults.style.display = total===0 ? 'block' : 'none';

    pageBooks.forEach((book, i) => {
        const card = document.createElement('article');
        card.className = 'book-card';
        card.dataset.idx = i;
        const loved = isFav(book.title);
        const rating = getRating(book.title);
        const cat = categoryNames[book.category] || '';
        const imgSrc = optimizeImg(book.cover, isListView ? 100 : 300);

        if (isListView) {
            card.innerHTML = `
                <div class="card-info">
                    <img class="list-thumb" src="${imgSrc}" alt="${book.title}" loading="lazy"
                        onerror="this.src='https://via.placeholder.com/48x72/130a0c/8b0000?text=?'">
                    <div class="list-meta">
                        <h2 class="book-title">${book.title}</h2>
                        <p class="book-author">${book.author}</p>
                        <p class="list-category">${cat}</p>
                        <div class="list-stars">${[1,2,3,4,5].map(v=>`<span class="${v<=rating?'on':''}"}>★</span>`).join('')}</div>
                    </div>
                    <div class="list-actions">
                        <button class="list-fav ${loved?'loved':''}">${loved?'♥':'♡'}</button>
                        <a class="list-btn" href="${book.downloadLink}" target="_blank" rel="noopener noreferrer">Leer</a>
                        <button class="list-btn list-detail-btn">Detalle</button>
                    </div>
                </div>`;
            card.querySelector('.list-fav').addEventListener('click', e => {
                e.stopPropagation();
                toggleFav(book.title);
                const btn = card.querySelector('.list-fav');
                const now = isFav(book.title);
                btn.textContent = now?'♥':'♡'; btn.classList.toggle('loved',now);
                if(showFavOnly) renderBooks();
            });
            card.querySelector('.list-detail-btn').addEventListener('click', () => openModal(book));
            card.querySelector('.book-title').addEventListener('click', () => openModal(book));
        } else {
            card.innerHTML = `
                <div class="card-cover">
                    <img src="${imgSrc}" alt="Portada de ${book.title}" loading="lazy"
                        onerror="this.src='https://via.placeholder.com/200x300/130a0c/8b0000?text=Sin+portada'">
                    <span class="card-badge">${cat}</span>
                    <button class="card-fav ${loved?'loved':''}">${loved?'♥':'♡'}</button>
                    <div class="card-overlay">
                        <a class="btn-read" href="${book.downloadLink}" target="_blank" rel="noopener noreferrer">Leer ahora</a>
                    </div>
                </div>
                <div class="card-stars">${[1,2,3,4,5].map(v=>`<span class="${v<=rating?'on':''}"}>★</span>`).join('')}</div>
                <div class="card-info">
                    <h2 class="book-title">${book.title}</h2>
                    <p class="book-author">${book.author}</p>
                </div>`;
            card.querySelector('.card-fav').addEventListener('click', e => {
                e.stopPropagation();
                toggleFav(book.title);
                const btn = card.querySelector('.card-fav');
                const now = isFav(book.title);
                btn.textContent = now?'♥':'♡'; btn.classList.toggle('loved',now);
                if(showFavOnly) renderBooks();
            });
            card.querySelector('.card-cover').addEventListener('click', e => { if(!e.target.closest('.btn-read,.card-fav')) openModal(book); });
            card.querySelector('.book-title').addEventListener('click', () => openModal(book));
        }

        bookGrid.appendChild(card);
        observer.observe(card);
    });

    renderPagination(total, currentPage);
}

// ── INIT ──────────────────────────────────────────────────
renderHistory();
renderBooks();
