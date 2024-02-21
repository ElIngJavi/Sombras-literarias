const books = [
    
    { 
        title: 'El Resplandor', 
        author: 'Stephen King', 
        downloadLink: 'https://web.seducoahuila.gob.mx/biblioweb/upload/Stephen%20King%20-%20El%20resplandor.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51iLX8ac3GL.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'It', 
        author: 'Stephen King', 
        downloadLink: 'https://www.colonialtours.com/ebook/ebooks/It%20-%20Stephen%20King.pdf', 
        cover: 'https://http2.mlstatic.com/D_NQ_NP_2615-MLM2830378574_062012-O.webp', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Psycho', 
        author: 'Robert Bloch', 
        downloadLink: 'https://revistadeletras.net/wp-content/uploads/2010/02/psicosis.pdf', 
        cover: 'https://1.bp.blogspot.com/-i4MgwxbNQU8/U8WOMkR6auI/AAAAAAAAB9o/mkorsQW9qA0/s1600/Psycho-by-Robert-Bloch.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'La silla humana', 
        author: 'Junji ito', 
        downloadLink: 'file:///C:/Users/steve/Downloads/Silla%20humana.PDF', 
        cover: 'https://pm1.aminoapps.com/7846/34ac4993520f0167e666d3c62e6284dd198d78e4r1-1080-1581v2_uhq.jpg', 
        category: 'Manga_de_terror' 
    },
    { 
        title: 'Jeppers Creepers Vol1', 
        author: 'Marc Andreyko', 
        downloadLink: 'Jeepers_Creepers.pdf', 
        cover: 'https://4.bp.blogspot.com/-gikFqgua-us/W1Kd3BLfeXI/AAAAAAAAb-I/vRFt2Rn4nMA5sMItO4ajAGjr-kvNF5iPwCK4BGAYYCw/s1600/Jeepers01Cov01021BBaal.jpg', 
        category: 'Cómic_de_terror' 
    },
    { 
        title: 'Drácula', 
        author: 'Bram Stoker', 
        downloadLink: 'Dracula.pdf', 
        cover: 'https://i.pinimg.com/originals/d0/d7/f2/d0d7f288583cc2eaaaff5fb9f58648e5.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'En las montañas de la locura', 
        author: 'H.P. Lovecraft', 
        downloadLink: 'En_las_montañas_de_la_locura.pdf', 
        cover: 'https://www.catedra.com/imagenes/libros/grande/9788437628912-en-las-montanas-de-la-locura.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Frankenstein o el moderno Prometeo', 
        author: 'Mary Shelley', 
        downloadLink: 'Frankenstein_o_el_moderno_Prometeo.pdf', 
        cover: 'https://pendulo.com/imagenes_grandes/9788439/978843973080.GIF', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'El bazar de los malos sueños', 
        author: 'Stephen King', 
        downloadLink: 'El_bazar_de_los_malos_sueños.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51zH6+R41fL.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Doctor sueño', 
        author: 'Stephen King', 
        downloadLink: 'Doctor_sueño.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51xSKqGOL9L.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'La llamada de Cthulhu', 
        author: 'H.P. Lovecraft', 
        downloadLink: 'La_llamada_de_Cthulhu.pdf', 
        cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/10/88/1088a245c1b622bd0124a29f35bf2ce9.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Cementerio de animales', 
        author: 'Stephen King', 
        downloadLink: 'Cementerio_de_animales.pdf', 
        cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e8/95/e89595cad17376ecdb93d45b65ae4835.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'La cabaña', 
        author: 'Natasha Preston', 
        downloadLink: 'La_cabaña.pdf', 
        cover: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/268/original/portada_la-cabana_natasha-preston_201802201202.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Amigo imaginario', 
        author: 'Stephen Chbosky', 
        downloadLink: 'Amigo_imaginario.pdf', 
        cover: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/300/original/portada_amigo-imaginario_stephen-chbosky_201907021446.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Apartamento 16', 
        author: 'Adam L. G. Nevill', 
        downloadLink: 'Apartamento_16.pdf', 
        cover: 'https://m.media-amazon.com/images/I/910cDqzzyKL._AC_UF894,1000_QL80_.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'La semilla del diablo', 
        author: 'Ira Levin', 
        downloadLink: 'La semilla_del_diablo.pdf', 
        cover: 'https://www.elsotano.com/imagenes_grandes/9788466/978846664628.JPG', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'El ritual', 
        author: 'Adam L. G. Nevill', 
        downloadLink: 'El_ritual.pdf', 
        cover: 'https://www.planetadelibros.com.mx/usuaris/libros/fotos/68/m_libros/67877_portada_el-ritual-ne_adam-nevill_202301271317.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'El exorcista', 
        author: 'William Peter Blatty', 
        downloadLink: 'El_exorcista.pdf', 
        cover: 'https://m.media-amazon.com/images/I/71ohdO9yNPL._AC_UF1000,1000_QL80_.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'El fantasma de la opera', 
        author: 'Gaston Leroux', 
        downloadLink: 'El_fantasma_de_la_opera.pdf', 
        cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/30/68/3068d9397dd45654ca3538b60313a4e4.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Misery', 
        author: 'Stephen King', 
        downloadLink: 'Misery.pdf', 
        cover: 'https://m.media-amazon.com/images/I/412VqnpiJYL.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Carrie', 
        author: 'Stephen King', 
        downloadLink: 'Carrie.pdf', 
        cover: 'https://m.media-amazon.com/images/I/717CvYWISZL._AC_UF894,1000_QL80_.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'La niebla', 
        author: 'Stephen King', 
        downloadLink: 'La_niebla.pdf', 
        cover: 'https://i.pinimg.com/originals/34/73/91/34739162ae6208a28045cc5782400899.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Coraline', 
        author: 'Neil gaiman', 
        downloadLink: 'Coraline.pdf', 
        cover: 'https://m.media-amazon.com/images/I/41c+Tg5C6gS.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Ojos de fuego', 
        author: 'Stephen King', 
        downloadLink: 'Ojos_de_fuego.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51Eo+wSs5DL.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'Joyland', 
        author: 'Stephen King', 
        downloadLink: 'Joyland.pdf', 
        cover: 'https://m.media-amazon.com/images/I/81HUzDnkXzL._AC_UF894,1000_QL80_.jpg', 
        category: 'Novela_de_terror' 
    },
	{
	    title: 'La puerta secreta del museo prado', 
        author: 'José María Plaza', 
        downloadLink: 'La_puerta_secreta_del_museo_prado.pdf', 
        cover: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG00YRS.jpg', 
        category: 'Novela_de_misterio' 
    },
    { 
        title: 'El cuaderno de las pesadillas', 
        author: 'Ricardo Chávez Castañeda', 
        downloadLink: 'El_cuaderno_de_las_pesadillas.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51oJCfjtLIS._AC_UF894,1000_QL80_.jpg', 
        category: 'Cuentos_de_terror' 
    },
    { 
        title: 'El baile de los muertos', 
        author: 'Care Santos', 
        downloadLink: 'El_baile_de_los_muertos.pdf', 
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632926574i/59114788.jpg', 
        category: 'Novela_de_misterio' 
    },
    { 
        title: 'El anonimo', 
        author: 'Natasha Preston', 
        downloadLink: 'El_anonimo.pdf', 
        cover: 'https://imagessl3.casadellibro.com/a/l/t5/33/9788408246633.jpg', 
        category: 'Novela_de_misterio' 
    },
    { 
        title: 'Los sonámbulos', 
        author: 'Chuck Wendig', 
        downloadLink: 'Los_sonámbulos.pdf', 
        cover: 'https://m.media-amazon.com/images/I/81Fk+hNdE2L._AC_UF894,1000_QL80_.jpg', 
        category: 'Novela_de_terror' 
    },
    { 
        title: 'El hombre de tiza ', 
        author: 'C. J. Tudor', 
        downloadLink: 'El_hombre_de_tiza.pdf', 
        cover: 'https://m.media-amazon.com/images/I/51rH9YqNnxL.jpg', 
        category: 'Novela_de_misterio' 
    },
    { 
        title: 'Cuentos macabros', 
        author: 'Edgar Allan Poe', 
        downloadLink: 'Cuentos_macabros.pdf', 
        cover: 'https://cdn.edelvives.es/docs/catalogo/10345/imgs/original/100141_cuentosmacabros_EDV.jpg', 
        category: 'Cuentos_de_terror' 
    },
    { 
        title: 'Cuentos de terror de la boca del túnel', 
        author: 'Chris Priestley', 
        downloadLink: 'Cuentos_de_terror_de_la_boca_del_túnel.pdf', 
        cover: 'https://static.cegal.es/imagenes/marcadas/9788467/978846757414.gif', 
        category: 'Cuentos_de_terror' 
    },
    { 
        title: 'Creepypastas: historias de terror 2.0', 
        author: 'Manuel Jesús Palma Roldán', 
        downloadLink: 'Creepypastas:_historias_de_terror_2.0.pdf', 
        cover: 'https://m.media-amazon.com/images/I/71hmpLSjJKL._AC_UF894,1000_QL80_.jpg', 
        category: 'Cuentos_de_terror' 
    },
    { 
        title: 'El libro de los accidentes', 
        author: 'Chuck Wendig', 
        downloadLink: 'El_libro_de_los_accidentes.pdf', 
        cover: 'https://cdn.kobo.com/book-images/Images/bf78aec9-b371-4ecf-9569-c143162aff4c/300/300/False/image.jpg', 
        category: 'Novela_de_misterio' 
    },
    { 
        title: 'El gato negro', 
        author: 'Edgar Allan Poe', 
        downloadLink: 'El_gato_negro.pdf', 
        cover: 'https://libreriamorelos.mx/images/assets/portadas/9786071413123.jpg', 
        category: 'Cuentos_de_terror' 
    }
    // Agrega más libros aquí
];

const bookList = document.getElementById('bookList');
const searchInput = document.getElementById('searchInput');
const menuItems = document.querySelectorAll('.menu-list li');
const menuToggle = document.querySelector('.menu-toggle');

// Agregamos el evento de clic al botón hamburguesa
menuToggle.addEventListener('click', function() {
    this.classList.toggle('menu-open');
});

// Modificamos la función para manejar clics en elementos del menú
function handleMenuItemClick(event) {
    event.preventDefault();
    const category = this.querySelector('a').getAttribute('href').substring(1);
    filterBooksByCategory(category);
    menuToggle.classList.remove('menu-open'); // Cerramos el menú después de hacer clic
}

// Agregamos el evento de clic a cada elemento del menú
menuItems.forEach(item => {
    item.addEventListener('click', handleMenuItemClick);
});

// Filtrar libros por categoría
function filterBooksByCategory(category) {
    const filteredResults = books.filter(book => book.category === category);
    displayBooks(filteredResults);
}

// Función para actualizar la búsqueda
function updateSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredResults = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );
    displayBooks(filteredResults);
}

// Función para mostrar libros en la página
function displayBooks(booksToShow) {
    bookList.innerHTML = ''; // Limpiar la lista de libros

    booksToShow.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';

        const coverImage = document.createElement('img');
        coverImage.className = 'book-cover';
        coverImage.src = book.cover;
        coverImage.alt = `Portada de ${book.title}`;

        const title = document.createElement('h2');
        title.className = 'book-title';
        title.textContent = book.title;

        const author = document.createElement('p');
        author.className = 'book-author';
        author.textContent = `Autor: ${book.author}`;

		const readLink = document.createElement('a');
        readLink.className = 'read-link'; // Cambié el nombre de la clase para ser más descriptivo
        readLink.textContent = 'Leer';
        readLink.href = book.downloadLink;
        readLink.setAttribute('target', '_blank'); // Aquí está la modificación
        readLink.setAttribute('rel', 'noopener noreferrer'); // Para seguridad, agrega rel="noopener noreferrer" cuando se abre una nueva ventana o pestaña desde un enlace

		const embedPdf = document.createElement('embed');
        embedPdf.className = 'pdf-embed'; // Clase para aplicar estilos CSS si es necesario
        embedPdf.src = book.downloadLink;
        embedPdf.type = 'application/pdf';
        embedPdf.width = '100%';
        embedPdf.height = '500'; // Puedes ajustar la altura según tus necesidades

        bookCard.appendChild(coverImage);
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(readLink); // Cambié el nombre de la variable de "downloadLink" a "readLink"

        bookList.appendChild(bookCard);
    });
}

// Mostrar todos los libros al cargar la página
displayBooks(books);

// Agregar evento de escucha al campo de búsqueda
searchInput.addEventListener('input', updateSearch);