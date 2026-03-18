# 📚 Sombras Literarias

> Biblioteca digital de terror, misterio y lo macabro — donde la oscuridad cobra vida entre páginas.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)

---

## 📖 Descripción

**Sombras Literarias** es una biblioteca digital estática con catálogo de libros de terror y misterio. Diseñada con una estética gótica oscura, permite explorar, filtrar, calificar y leer libros directamente desde el navegador, sin necesidad de backend ni base de datos.

---

## ✨ Funcionalidades

| Funcionalidad | Descripción |
|---|---|
| 🔍 **Buscador con sugerencias** | Búsqueda en tiempo real con dropdown de resultados y portadas |
| 🗂️ **Filtro por categoría** | Terror, Manga, Cómic, Misterio, Cuentos |
| ↕️ **Ordenamiento** | Por título, autor o mejor valorados |
| ♡ **Favoritos** | Guarda libros favoritos con persistencia en `localStorage` |
| ⊞ **Vista cuadrícula / lista** | Alterna entre dos modos de visualización |
| ★ **Calificación por estrellas** | Sistema de 5 estrellas guardado en `localStorage` |
| 📖 **Visor de PDF integrado** | Lee libros con URL pública directamente en el sitio |
| 🕐 **Historial de vistos** | Muestra los últimos 12 libros visitados |
| 📱 **Responsive** | Adaptado para móvil, tablet y escritorio |
| 🌙 **Modo claro / oscuro** | Toggle con preferencia guardada en `localStorage` |
| 📲 **Compartir por WhatsApp** | Comparte título, sinopsis y enlace en un clic |
| 🔢 **Paginación** | 12 libros por página con navegación |
| 🔢 **Contadores** | Número de libros por categoría en el menú |

---

## 🗂️ Estructura del proyecto

```
sombras-literarias/
│
├── index.html      # Estructura HTML — navbar, hero, grid, modal, visor
├── styles.css      # Todos los estilos — tema oscuro/claro, responsive
├── app.js          # Lógica completa — filtros, modal, visor, favoritos, etc.
├── data.js         # Catálogo de libros con sinopsis
└── README.md       # Documentación
```

### Responsabilidad de cada archivo

**`index.html`** — Solo estructura, sin lógica ni estilos inline. Define el esqueleto de la navbar, hero, grid de libros, modal de detalle y el visor de PDF.

**`styles.css`** — Variables CSS para temas claro/oscuro, estilos de todos los componentes: navbar, hero, cards en modo cuadrícula y lista, modal, visor PDF, paginación, historial y responsive.

**`app.js`** — Toda la lógica: partículas de brasa animadas, búsqueda con sugerencias, filtros por categoría, ordenamiento, favoritos, historial, calificaciones, modal, visor de PDF, paginación y toggle de tema.

**`data.js`** — Array de objetos con los datos de cada libro: título, autor, categoría, portada, enlace de descarga y sinopsis.

---

## 📦 Catálogo

35 libros distribuidos en 5 categorías:

| Categoría | Libros |
|---|---|
| 📕 Novela de Terror | 23 |
| 🎌 Manga de Terror | 1 |
| 💥 Cómic de Terror | 1 |
| 🔎 Novela de Misterio | 5 |
| 👻 Cuentos de Terror | 5 |

**Autores incluidos:** Stephen King, H.P. Lovecraft, Edgar Allan Poe, Bram Stoker, Mary Shelley, Neil Gaiman, Junji Ito, Natasha Preston, Adam Nevill, Chuck Wendig, entre otros.

---

## 🚀 Cómo usar en local

Este proyecto requiere un servidor local para cargar los archivos JS externos. La forma más fácil:

### Opción A — VS Code + Live Server
1. Instala la extensión **Live Server** en VS Code
2. Clic derecho en `index.html` → **Open with Live Server**
3. El sitio abre en `http://127.0.0.1:5500`

### Opción B — Node.js
```bash
npx serve .
```

### Opción C — Python
```bash
python -m http.server 8000
```

> ⚠️ **No abrir con doble clic** — el navegador bloquea la carga de archivos JS locales por seguridad (política CORS).

---

## ➕ Agregar un libro nuevo

Solo edita `data.js` y agrega un objeto al array `books`:

```javascript
{
    title: 'Título del libro',
    author: 'Nombre del autor',
    category: 'Novela_de_terror', // Ver categorías disponibles abajo
    cover: 'https://url-de-la-portada.jpg',
    downloadLink: 'https://url-del-pdf.pdf',
    synopsis: 'Breve descripción del libro...'
}
```

**Categorías disponibles:**
- `Novela_de_terror`
- `Manga_de_terror`
- `Cómic_de_terror`
- `Novela_de_misterio`
- `Cuentos_de_terror`

---

## 🎨 Diseño

- **Tipografías:** UnifrakturMaguntia (títulos góticos), Cinzel (navbar), IM Fell English (textos), Raleway (UI)
- **Paleta oscura:** Negro profundo `#0c0608`, carmesí `#8b0000`, dorado `#c9973a`
- **Paleta clara:** Pergamino `#f5f0eb`, sepia, dorado envejecido
- **Efectos:** Partículas de brasa animadas con Canvas, glow rojo en títulos, sombra de lomo en las cards

---

## 🔧 Tecnologías

- **HTML5** — estructura semántica
- **CSS3** — variables, grid, flexbox, animaciones, backdrop-filter
- **JavaScript ES6+** — módulos, localStorage, IntersectionObserver, Canvas API
- **Google Fonts** — tipografías góticas
- **Google Docs Viewer** — visor de PDF integrado sin dependencias

---

## 📄 Licencia

Los libros enlazados son propiedad de sus respectivos autores y editoriales. Este proyecto es solo una interfaz de consulta sin fines de lucro.

---

*Desarrollado con 🩸 y JavaScript*
