// data.js — Catálogo de libros
const books = [
    {
        title: 'El Resplandor', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/51iLX8ac3GL.jpg',
        downloadLink: 'https://web.seducoahuila.gob.mx/biblioweb/upload/Stephen%20King%20-%20El%20resplandor.pdf',
        synopsis: 'Jack Torrance acepta un trabajo como guardián de invierno del hotel Overlook, llevando consigo a su esposa y a su hijo Danny, quien posee un don sobrenatural llamado el resplandor. Aislados por la nieve, las fuerzas malignas del hotel comienzan a corroer la mente de Jack, empujándolo hacia la locura.'
    },
    {
        title: 'It', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://http2.mlstatic.com/D_NQ_NP_2615-MLM2830378574_062012-O.webp',
        downloadLink: 'https://www.colonialtours.com/ebook/ebooks/It%20-%20Stephen%20King.pdf',
        synopsis: 'En el pueblo de Derry, Maine, un grupo de niños conocidos como el Club de los Perdedores se enfrenta a una entidad ancestral que se manifiesta como Pennywise, un payaso demoníaco. Años después, ya adultos, deberán regresar para cumplir una promesa y enfrentar su miedo más profundo.'
    },
    {
        title: 'Psycho', author: 'Robert Bloch', category: 'Novela_de_terror',
        cover: 'https://1.bp.blogspot.com/-i4MgwxbNQU8/U8WOMkR6auI/AAAAAAAAB9o/mkorsQW9qA0/s1600/Psycho-by-Robert-Bloch.jpg',
        downloadLink: 'https://revistadeletras.net/wp-content/uploads/2010/02/psicosis.pdf',
        synopsis: 'Mary Crane huye con dinero robado y se hospeda en el solitario Motel Bates, regentado por el tímido Norman Bates y su dominante madre. Lo que parece un refugio temporal se convierte en una trampa mortal, revelando los secretos más oscuros de la mente humana.'
    },
    {
        title: 'Drácula', author: 'Bram Stoker', category: 'Novela_de_terror',
        cover: 'https://i.pinimg.com/originals/d0/d7/f2/d0d7f288583cc2eaaaff5fb9f58648e5.jpg',
        downloadLink: 'Dracula.pdf',
        synopsis: 'El joven abogado Jonathan Harker viaja a Transilvania para cerrar un negocio con el misterioso Conde Drácula. Pronto descubre que su anfitrión es un vampiro inmortal que planea trasladarse a Londres para extender su dominio. Una épica lucha entre el bien y el mal en las nieblas de la Europa victoriana.'
    },
    {
        title: 'En las montañas de la locura', author: 'H.P. Lovecraft', category: 'Novela_de_terror',
        cover: 'https://www.catedra.com/imagenes/libros/grande/9788437628912-en-las-montanas-de-la-locura.jpg',
        downloadLink: 'En_las_montañas_de_la_locura.pdf',
        synopsis: 'Una expedición científica a la Antártida descubre ruinas de una civilización prehuman de edad inimaginable. El geólogo Dyer narra los horrores que encontraron más allá de las montañas prohibidas, donde los Primigenios dormitan en su ciudad muerta y quienes se acercan son arrastrados a la locura.'
    },
    {
        title: 'Frankenstein o el moderno Prometeo', author: 'Mary Shelley', category: 'Novela_de_terror',
        cover: 'https://pendulo.com/imagenes_grandes/9788439/978843973080.GIF',
        downloadLink: 'Frankenstein_o_el_moderno_Prometeo.pdf',
        synopsis: 'El joven científico Victor Frankenstein, obsesionado con el secreto de la vida, crea un ser a partir de cadáveres y lo anima. La criatura, rechazada por su creador y la humanidad, despierta con sed de afecto que nadie le brinda, convirtiéndose en una amenaza que perseguirá a Frankenstein hasta el fin.'
    },
    {
        title: 'El bazar de los malos sueños', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/51zH6+R41fL.jpg',
        downloadLink: 'El_bazar_de_los_malos_sueños.pdf',
        synopsis: 'Una colección de veinte relatos donde King explora los rincones más oscuros de la experiencia humana. Desde un hombre que puede predecir muertes hasta criaturas que acechan en lo cotidiano, cada historia es una ventana a lo inesperado y lo inquietantemente familiar.'
    },
    {
        title: 'Doctor Sueño', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/51xSKqGOL9L.jpg',
        downloadLink: 'Doctor_sueño.pdf',
        synopsis: 'Dan Torrance, el niño del Resplandor, es ahora un adulto que lucha contra el alcoholismo y los fantasmas de su pasado. Cuando conoce a Abra, una niña con poderes aún más poderosos, ambos deben enfrentarse a los Nudo Verdadero, seres que se alimentan del poder psíquico de los niños.'
    },
    {
        title: 'La llamada de Cthulhu', author: 'H.P. Lovecraft', category: 'Novela_de_terror',
        cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/10/88/1088a245c1b622bd0124a29f35bf2ce9.jpg',
        downloadLink: 'La_llamada_de_Cthulhu.pdf',
        synopsis: 'A través de documentos fragmentados, un hombre reconstruye la historia de Cthulhu, una deidad cósmica que duerme en la ciudad sumergida de R\'lyeh. Quienes se acercan demasiado a la verdad son arrastrados a la locura, pues los humanos no están preparados para la indiferencia absoluta del cosmos.'
    },
    {
        title: 'Cementerio de animales', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://images.cdn2.buscalibre.com/fit-in/360x360/e8/95/e89595cad17376ecdb93d45b65ae4835.jpg',
        downloadLink: 'Cementerio_de_animales.pdf',
        synopsis: 'La familia Creed descubre un antiguo cementerio en el bosque cercano. Cuando la tragedia golpea, el padre desesperado descubre que la tierra más allá del cementerio tiene el poder de devolver a los muertos, pero lo que regresa no es exactamente lo que se fue.'
    },
    {
        title: 'La cabaña', author: 'Natasha Preston', category: 'Novela_de_terror',
        cover: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/268/original/portada_la-cabana_natasha-preston_201802201202.jpg',
        downloadLink: 'La_cabaña.pdf',
        synopsis: 'Un grupo de amigos decide pasar el fin de semana en una cabaña en el bosque. La diversión se convierte en pesadilla cuando uno de ellos aparece muerto y los demás comprenden que el asesino sigue entre ellos. La desconfianza y el terror crecen con cada hora que pasa.'
    },
    {
        title: 'Amigo imaginario', author: 'Stephen Chbosky', category: 'Novela_de_terror',
        cover: 'https://proassetspdlcom.cdnstatics2.com/usuaris/libros/fotos/300/original/portada_amigo-imaginario_stephen-chbosky_201907021446.jpg',
        downloadLink: 'Amigo_imaginario.pdf',
        synopsis: 'Christopher, un niño de siete años, desaparece durante 43 días en el bosque y regresa con un amigo imaginario que solo él puede ver. A medida que construye una casa de ensueño siguiendo sus instrucciones, una oscuridad sobrenatural crece sin control sobre todo el pueblo.'
    },
    {
        title: 'Apartamento 16', author: 'Adam L. G. Nevill', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/910cDqzzyKL._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'Apartamento_16.pdf',
        synopsis: 'En el lujoso edificio Barrington House de Londres, el apartamento 16 lleva décadas sellado. El vigilante nocturno Seth comienza a ver cosas terribles durante su turno, mientras Apryl llega para reclamar la herencia de su tía y descubre que ese apartamento guarda algo que no debería existir.'
    },
    {
        title: 'La semilla del diablo', author: 'Ira Levin', category: 'Novela_de_terror',
        cover: 'https://www.elsotano.com/imagenes_grandes/9788466/978846664628.JPG',
        downloadLink: 'La_semilla_del_diablo.pdf',
        synopsis: 'Rosemary y Guy Woodhouse se mudan a un antiguo edificio en Nueva York donde sus excéntricos vecinos están inusualmente interesados en el embarazo de Rosemary. A medida que avanza la gestación, ella comienza a sospechar que algo profundamente maligno rodea al hijo que lleva en su vientre.'
    },
    {
        title: 'El ritual', author: 'Adam L. G. Nevill', category: 'Novela_de_terror',
        cover: 'https://www.planetadelibros.com.mx/usuaris/libros/fotos/68/m_libros/67877_portada_el-ritual-ne_adam-nevill_202301271317.jpg',
        downloadLink: 'El_ritual.pdf',
        synopsis: 'Cuatro amigos se internan en los bosques del norte de Escandinavia. Cuando deciden tomar un atajo, se pierden en una espesura antigua donde algo muy viejo y muy hambriento los está cazando. La naturaleza misma parece corrompida por una presencia primigenia e implacable.'
    },
    {
        title: 'El exorcista', author: 'William Peter Blatty', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/71ohdO9yNPL._AC_UF1000,1000_QL80_.jpg',
        downloadLink: 'El_exorcista.pdf',
        synopsis: 'La pequeña Regan MacNeil comienza a sufrir una transformación aterradora que la medicina no puede explicar. Su madre, desesperada, recurre a dos sacerdotes para realizar un exorcismo. Lo que sigue es un enfrentamiento brutal entre la fe y un mal absoluto por el alma de una niña inocente.'
    },
    {
        title: 'El fantasma de la ópera', author: 'Gaston Leroux', category: 'Novela_de_terror',
        cover: 'https://images.cdn1.buscalibre.com/fit-in/360x360/30/68/3068d9397dd45654ca3538b60313a4e4.jpg',
        downloadLink: 'El_fantasma_de_la_opera.pdf',
        synopsis: 'En las catacumbas de la Ópera de París vive Erik, un genio desfigurado que enseña en secreto a la soprano Christine Daaé. Obsesionado por ella, el Fantasma teje una red de terror, chantaje y amor imposible que pondrá en peligro a todos quienes la rodean.'
    },
    {
        title: 'Misery', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/412VqnpiJYL.jpg',
        downloadLink: 'Misery.pdf',
        synopsis: 'El escritor Paul Sheldon sufre un accidente de coche y es rescatado por Annie Wilkes, su mayor fan. Pero Annie está lejos de ser una admiradora normal: está obsesionada, es inestable y no piensa dejarlo ir, especialmente después de descubrir que mató a su personaje favorito.'
    },
    {
        title: 'Carrie', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/717CvYWISZL._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'Carrie.pdf',
        synopsis: 'Carrie White es una adolescente marginada que vive bajo el dominio de una madre fanática y sufre el acoso de sus compañeros. Cuando descubre que posee poderes telequinéticos y es víctima de una cruel broma en el baile de graduación, desata una venganza que nadie olvidará.'
    },
    {
        title: 'La niebla', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://i.pinimg.com/originals/34/73/91/34739162ae6208a28045cc5782400899.jpg',
        downloadLink: 'La_niebla.pdf',
        synopsis: 'Una niebla sobrenatural envuelve un pueblo de Maine, atrapando a un grupo de supervivientes en un supermercado mientras criaturas monstruosas acechan afuera. Pero el verdadero peligro está dentro, donde el miedo convierte a los humanos en algo peor que los monstruos.'
    },
    {
        title: 'Coraline', author: 'Neil Gaiman', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/41c+Tg5C6gS.jpg',
        downloadLink: 'Coraline.pdf',
        synopsis: 'Coraline descubre una pequeña puerta oculta en su nueva casa que conduce a un mundo paralelo con una "otra madre" encantadora. Pero este mundo idílico esconde una trampa terrible, y Coraline deberá ser más valiente que nunca para salvar su propia alma.'
    },
    {
        title: 'Ojos de fuego', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/51Eo+wSs5DL.jpg',
        downloadLink: 'Ojos_de_fuego.pdf',
        synopsis: 'Charlie McGee es una niña con la capacidad de provocar incendios con la mente. Perseguida por una agencia secreta llamada La Tienda, su padre lucha por protegerla mientras ella aprende a controlar el fuego que arde dentro de ella y que podría destruirlo todo.'
    },
    {
        title: 'Joyland', author: 'Stephen King', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/81HUzDnkXzL._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'Joyland.pdf',
        synopsis: 'En el verano de 1973, el universitario Devin Jones trabaja en Joyland, un parque de atracciones con un oscuro secreto: una joven fue asesinada en la Casa del Horror y su fantasma todavía vaga por allí. Mientras investiga el crimen sin resolver, descubre que la inocencia se pierde de formas inesperadas.'
    },
    {
        title: 'Los sonámbulos', author: 'Chuck Wendig', category: 'Novela_de_terror',
        cover: 'https://m.media-amazon.com/images/I/81Fk+hNdE2L._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'Los_sonámbulos.pdf',
        synopsis: 'De repente, personas de todo el país comienzan a caminar dormidas en la misma dirección sin poder ser despertadas. Nadie sabe adónde van ni qué los llama. Un periodista, un padre y un agente del CDC intentan descubrir la verdad detrás de esta epidemia sobrenatural.'
    },
    {
        title: 'La silla humana', author: 'Junji Ito', category: 'Manga_de_terror',
        cover: 'https://pm1.aminoapps.com/7846/34ac4993520f0167e666d3c62e6284dd198d78e4r1-1080-1581v2_uhq.jpg',
        downloadLink: 'Silla_humana.pdf',
        synopsis: 'Una escritora recibe un manuscrito de un desconocido que confiesa haber vivido escondido dentro del relleno de una silla, tocando a sus ocupantes sin ser visto. Lo que comienza como una historia inquietante pronto revela un horror más cercano de lo que la protagonista imagina.'
    },
    {
        title: 'Jeepers Creepers Vol.1', author: 'Marc Andreyko', category: 'Cómic_de_terror',
        cover: 'https://4.bp.blogspot.com/-gikFqgua-us/W1Kd3BLfeXI/AAAAAAAAb-I/vRFt2Rn4nMA5sMItO4ajAGjr-kvNF5iPwCK4BGAYYCw/s1600/Jeepers01Cov01021BBaal.jpg',
        downloadLink: 'Jeepers_Creepers.pdf',
        synopsis: 'Adaptación en cómic del aterrador Creeper, la criatura que despierta cada 23 años para alimentarse durante 23 días. Este volumen explora el origen de la bestia y los destinos de quienes tienen la desgracia de cruzarse en su camino cuando el hambre lo domina.'
    },
    {
        title: 'La puerta secreta del Museo del Prado', author: 'José María Plaza', category: 'Novela_de_misterio',
        cover: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG00YRS.jpg',
        downloadLink: 'La_puerta_secreta_del_museo_prado.pdf',
        synopsis: 'Un grupo de jóvenes descubre que los cuadros del Museo del Prado esconden mensajes y pasajes secretos que conectan con otra dimensión. Una aventura que mezcla arte, historia y misterio, donde las pinturas más famosas del mundo guardan secretos ocultos durante siglos.'
    },
    {
        title: 'El baile de los muertos', author: 'Care Santos', category: 'Novela_de_misterio',
        cover: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1632926574i/59114788.jpg',
        downloadLink: 'El_baile_de_los_muertos.pdf',
        synopsis: 'Una joven hereda una antigua mansión y descubre que sus paredes guardan el secreto de una serie de muertes ocurridas décadas atrás. Mientras investiga el pasado, los fantasmas del presente comienzan a amenazar su propia vida en esta oscura novela gótica ambientada en España.'
    },
    {
        title: 'El anónimo', author: 'Natasha Preston', category: 'Novela_de_misterio',
        cover: 'https://imagessl3.casadellibro.com/a/l/t5/33/9788408246633.jpg',
        downloadLink: 'El_anonimo.pdf',
        synopsis: 'Paige comienza a recibir mensajes amenazantes de un remitente anónimo que parece conocer cada detalle de su vida. A medida que el acoso se intensifica, quienes la rodean se convierten en sospechosos. Nadie es lo que parece en este thriller psicológico de suspense escalofriante.'
    },
    {
        title: 'El hombre de tiza', author: 'C. J. Tudor', category: 'Novela_de_misterio',
        cover: 'https://m.media-amazon.com/images/I/51rH9YqNnxL.jpg',
        downloadLink: 'El_hombre_de_tiza.pdf',
        synopsis: 'En 1986, un grupo de amigos inventa a El Hombre de Tiza como un juego inocente, pero ese verano termina con el descubrimiento de un cadáver. Treinta años después, uno de ellos recibe una figura de tiza en el correo, y los cuerpos vuelven a aparecer.'
    },
    {
        title: 'El libro de los accidentes', author: 'Chuck Wendig', category: 'Novela_de_misterio',
        cover: 'https://cdn.kobo.com/book-images/Images/bf78aec9-b371-4ecf-9569-c143162aff4c/300/300/False/image.jpg',
        downloadLink: 'El_libro_de_los_accidentes.pdf',
        synopsis: 'La familia Graves regresa al pueblo natal del padre huyendo del trauma. Su hijo adolescente comienza a ver versiones oscuras de sí mismo, y el padre descubre que el pasado violento del pueblo no ha terminado. Las realidades paralelas colisionan en un thriller sobrenatural.'
    },
    {
        title: 'El cuaderno de las pesadillas', author: 'Ricardo Chávez Castañeda', category: 'Cuentos_de_terror',
        cover: 'https://m.media-amazon.com/images/I/51oJCfjtLIS._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'El_cuaderno_de_las_pesadillas.pdf',
        synopsis: 'Una serie de relatos perturbadores donde los sueños se confunden con la realidad. Cada historia explora el lado más oscuro de la imaginación infantil, demostrando que los monstruos más aterradores no siempre viven debajo de la cama, sino dentro de nosotros mismos.'
    },
    {
        title: 'Cuentos macabros', author: 'Edgar Allan Poe', category: 'Cuentos_de_terror',
        cover: 'https://www.polifemo.com/static/img/portadas/_visd_0000JPG0166Z.jpg',
        downloadLink: 'Cuentos_macabros.pdf',
        synopsis: 'Una selección de los relatos más inquietantes del maestro del horror gótico. Desde el corazón que late bajo el suelo hasta el péndulo que desciende sin piedad, Poe construye atmósferas de terror y culpa que exploran los rincones más oscuros de la psique humana.'
    },
    {
        title: 'Cuentos de terror de la boca del túnel', author: 'Chris Priestley', category: 'Cuentos_de_terror',
        cover: 'https://static.cegal.es/imagenes/marcadas/9788467/978846757414.gif',
        downloadLink: 'Cuentos_de_terror_de_la_boca_del_túnel.pdf',
        synopsis: 'Un grupo de viajeros queda atrapado en un tren durante una tormenta y para pasar el tiempo cada pasajero cuenta una historia de terror. Las narraciones se entrelazan con una atmósfera victoriana opresiva, y pronto queda claro que algunas historias son más reales de lo que parecen.'
    },
    {
        title: 'Creepypastas: historias de terror 2.0', author: 'Manuel Jesús Palma Roldán', category: 'Cuentos_de_terror',
        cover: 'https://m.media-amazon.com/images/I/71hmpLSjJKL._AC_UF894,1000_QL80_.jpg',
        downloadLink: 'Creepypastas_historias_de_terror.pdf',
        synopsis: 'Una compilación de las leyendas urbanas digitales más perturbadoras de internet. Desde Slender Man hasta Jeff el Asesino, estas historias nacidas en los foros más oscuros de la red han aterrorizado a millones de lectores y demuestran que el horror del siglo XXI habita en las pantallas.'
    },
    {
        title: 'El gato negro', author: 'Edgar Allan Poe', category: 'Cuentos_de_terror',
        cover: 'https://libreriamorelos.mx/images/assets/portadas/9786071413123.jpg',
        downloadLink: 'El_gato_negro.pdf',
        synopsis: 'Un hombre narra desde su celda la espiral de violencia y locura que lo llevó a cometer un crimen terrible. Todo comenzó con su amor por los animales y un gato negro llamado Pluto. Una historia sobre la culpa, la perversidad humana y la inevitabilidad del castigo.'
    },
];
