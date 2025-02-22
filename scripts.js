$(document).ready(function() {
    // Manejo de clics en los enlaces
    $('.nav-link').click(function(e) {
        e.preventDefault(); // Evita el comportamiento por defecto del enlace (salto brusco)
        $('.nav-link').removeClass('active'); // Quita active de todos
        $(this).addClass('active'); // Añade active al clicado

        // Desplazamiento suave a la sección
        const target = $(this).attr('href'); // Obtiene el ID de la sección (ej. #sobre-mi)
        $('html, body').animate({
            scrollTop: $(target).offset().top - 50 // Ajusta 50px para margen superior
        }, 800); // Duración de la animación en milisegundos
    });

    // Manejo del scroll para actualizar el enlace activo
    $(window).scroll(function() {
        const scrollPosition = $(window).scrollTop() + 100; // Ajuste para activar un poco antes

        // Itera sobre cada enlace del navbar
        $('.nav-link').each(function() {
            const sectionId = $(this).attr('href'); // Ej. #sobre-mi
            const section = $(sectionId);

            if (section.length) { // Verifica que la sección exista
                const sectionTop = section.offset().top;
                const sectionBottom = sectionTop + section.outerHeight();

                // Si la posición del scroll está dentro de la sección
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    $('.nav-link').removeClass('active'); // Quita active de todos
                    $(this).addClass('active'); // Añade active al enlace correspondiente
                }
            }
        });
    });

    // Activa el enlace inicial al cargar la página
    const initialScroll = $(window).scrollTop() + 100;
    $('.nav-link').each(function() {
        const sectionId = $(this).attr('href');
        const section = $(sectionId);
        if (section.length) {
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();
            if (initialScroll >= sectionTop && initialScroll < sectionBottom) {
                $('.nav-link').removeClass('active');
                $(this).addClass('active');
            }
        }
    });
});