// --- BASE DE DATOS (Contenido Dinámico) ---
const contentData = {
    barber: {
        title: "BARBERÍA CLÁSICA",
        subtitle: "EL ARTE DEL CABALLERO",
        desc: "Donde la tradición de la vieja escuela se encuentra con el estilo moderno. Cortes precisos, afeitados con toalla caliente y un ambiente exclusivo.",
        bgImage: "barberia portada.jpg", // Coloca tu imagen aquí (ej: portada_barberia.jpg)
        // ENLACE ACTUALIZADO SEGÚN TU IMAGEN (Appointment Schedule)
        calendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2SCnHKWe95jpXhCcFq-S7ux-JSUgsBtGflfG-UJmyWYSxO4z7z7z2ACSYLxpJ8YT7nn9c07ujA",
        services: [
            { name: "Corte Tradicional", detail: "Estilo clásico con tijera y máquina.", price: "Desde $9.990" },
            { name: "Cortes Modernos", detail: "Tendencias actuales y urbanas.", price: "Desde $10.990" },
            { name: "Degradados", detail: "Fade perfecto con transiciones suaves.", price: "Desde $11.990" },
            { name: "Diseños", detail: "Arte capilar y figuras personalizadas.", price: "Desde $4.990" },
            { name: "Barbas", detail: "Perfilado y ritual con toalla caliente.", price: "Desde $4.990" },
            { name: "Perfilación de Cejas", detail: "Limpieza y definición con navaja.", price: "$3.990" },
            { name: "Colorimetría", detail: "Tintes y efectos de color para caballero.", price: "$15.990" }
        ],
        products: [
            { name: "Ceras", price: "$5.000", image: "cera hombre.jpg" },
            { name: "Aceite para Barba", price: "Consultar", image: "aceite para barba.jpg" },
            { name: "Minoxidil", price: "Consultar", image: "minoxidil.jpg" }
        ]
    },
    nails: {
        title: "SALÓN, SPA & UÑAS",
        subtitle: "BELLEZA INTEGRAL",
        desc: "Un espacio diseñado para tu relajación. Expertos en peluquería, nail art, cuidado de manos, pies y estética facial con los mejores productos.",
        bgImage: "uñas y spa.jpg", // Coloca tu imagen aquí (ej: portada_unas.jpg)
        // Usando el mismo enlace para que funcione la demo, recuerda crear uno diferente para Uñas si lo necesitas
        calendarUrl: "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2SCnHKWe95jpXhCcFq-S7ux-JSUgsBtGflfG-UJmyWYSxO4z7z7z2ACSYLxpJ8YT7nn9c07ujA",
        services: [
            { name: "Manicure", detail: "Limpieza y cuidado tradicional.", price: "Desde $8.990" },
            { name: "Pedicure", detail: "Limpieza y cuidado de pies.", price: "Desde $9.990" },
            { name: "Esmaltado Permanente Manos", detail: "Larga duración y brillo perfecto.", price: "Desde $11.990" },
            { name: "Esmaltado Permanente Pie", detail: "Durabilidad y belleza.", price: "Desde $14.990" },
            { name: "Uñas Poli Gel", detail: "Resistencia y naturalidad.", price: "Desde $19.990" },
            { name: "Soft Gel", detail: "Alargamiento con acabado natural.", price: "Desde $24.990" },
            { name: "Parafina", detail: "Tratamiento profundo para pies.", price: "Desde $3.990" },
            { name: "Combo Spa Pie", detail: "Hidratación profunda + Pedicure esmaltado permanente.", price: "Desde $24.990" },
            { name: "Alisado con Keratina Brasil", detail: "Liso extremo y nutrición.", price: "Desde $29.990" },
            { name: "Botox Capilar", detail: "Restauración profunda.", price: "Desde $29.990" },
            { name: "Tratamientos Capilares", detail: "Nutrición y reparación.", price: "Desde $15.990" },
            { name: "Planchado", detail: "Acabado liso y sedoso.", price: "Desde $14.990" },
            { name: "Brushing", detail: "Peinado con volumen y movimiento.", price: "Desde $11.990" },
            { name: "Corte de Cabello Dama", detail: "Cambio de look o mantenimiento.", price: "Desde $9.990" },
            { name: "Pestañas", detail: "Realza tu mirada.", price: "Desde $11.990" },
            { name: "Cejas", detail: "Diseño y perfilado.", price: "Desde $2.990" },
            { name: "Depilación de Rostro", detail: "Suavidad y cuidado de la piel.", price: "Desde $6.990" },
            { name: "Trenzas Africanas", detail: "Estilos trenzados únicos.", price: "Desde $39.990" },
            { name: "Trenzas Crochet", detail: "Técnica versátil y moderna.", price: "Desde $55.990" },
            { name: "Extensiones (Postura)", detail: "Instalación profesional.", price: "Desde $29.990" }
        ],
        products: [
            { name: "Alisadora Americana Afro", price: "Consultar", image: "alisadora pelo afro.jpg" }, // Cambio de imagen
            { name: "Pelo Sintético", price: "Consultar", image: "pelo sintetico.jpg" }, // Cambio de imagen
            { name: "Extensiones", price: "Consultar", image: "extensiones.jpg" },
            { name: "Pelucas", price: "Consultar", image: "pelucas.jpg" },
            { name: "Pelo Crochet", price: "Consultar", image: "pelo crochet.jpg" }
        ]
    }
};

// --- FUNCIONES LÓGICAS ---

function selectService(type) {
    const data = contentData[type];
    if (!data) return;

    // 1. Ocultar pantalla de selección con transición
    const introScreen = document.getElementById('intro-screen');
    introScreen.style.opacity = '0';
    introScreen.style.pointerEvents = 'none';
    setTimeout(() => {
        introScreen.style.display = 'none';
    }, 500);

    // 2. Mostrar contenido principal
    const mainContent = document.getElementById('main-content');
    mainContent.classList.remove('hidden');
    mainContent.classList.add('fade-in');

    // 3. Inyectar Datos del Hero
    document.getElementById('hero-title').textContent = data.title;
    document.getElementById('hero-subtitle').textContent = data.subtitle;
    document.getElementById('hero-desc').textContent = data.desc;
    document.getElementById('hero-bg').style.backgroundImage = `url('${data.bgImage}')`;

    // 4. Inyectar Servicios (MODIFICADO para manejar "sin precio")
    const servicesContainer = document.getElementById('services-list');
    servicesContainer.innerHTML = ''; // Limpiar anterior
    data.services.forEach(service => {
        // Solo mostrar div de precio si existe el precio
        const priceHtml = service.price
            ? `<div class="text-xl md:text-2xl font-serif text-gold font-bold whitespace-nowrap">${service.price}</div>`
            : '';

        const serviceHtml = `
            <div class="flex justify-between items-end border-b border-gray-800 pb-3 md:pb-4 hover:border-gold/50 transition-colors group">
                <div class="pr-4">
                    <h4 class="text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors">${service.name}</h4>
                    <p class="text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1">${service.detail}</p>
                </div>
                ${priceHtml}
            </div>
        `;
        servicesContainer.innerHTML += serviceHtml;
    });

    // 5. Configurar Calendario
    document.getElementById('calendar-iframe').src = data.calendarUrl;

    // 6. Inyectar Productos
    const productsContainer = document.getElementById('products-grid');
    productsContainer.innerHTML = '';
    data.products.forEach(prod => {
        // Mensaje de WhatsApp pre-llenado
        const waMessage = `Hola Stilos Colombia, estoy interesado en comprar el producto: ${prod.name}`;
        const waLink = `https://wa.me/56968085355?text=${encodeURIComponent(waMessage)}`;

        const prodHtml = `
            <div class="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-gold/50 transition-all hover:shadow-lg hover:shadow-gold/5 flex flex-col h-full">
                <div class="h-48 md:h-64 overflow-hidden relative flex-shrink-0">
                    <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div class="p-4 md:p-6 flex flex-col flex-grow">
                    <h4 class="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">${prod.name}</h4>
                    
                    <!-- Ajuste Responsive para Precio y Botón -->
                    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-auto pt-4 gap-3 sm:gap-0">
                        <span class="text-lg sm:text-xl md:text-2xl text-gold font-serif font-bold whitespace-nowrap">${prod.price}</span>
                        <a href="${waLink}" target="_blank" class="w-full sm:w-auto text-center justify-center bg-white text-black px-3 py-2 md:px-4 md:py-2 rounded font-bold hover:bg-gold transition-colors flex items-center gap-2 text-xs md:text-sm uppercase tracking-wide">
                            <i class="ph ph-shopping-bag"></i> Comprar
                        </a>
                    </div>
                </div>
            </div>
        `;
        productsContainer.innerHTML += prodHtml;
    });
}

// --- MENU MOVIL ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.querySelector('.ph-list');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.remove('ph-list');
        icon.classList.add('ph-x');
    } else {
        menu.classList.add('hidden');
        icon.classList.remove('ph-x');
        icon.classList.add('ph-list');
    }
}

// --- EFECTO NAVBAR SCROLL ---
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-md', 'bg-black/95');
        navbar.classList.remove('bg-black/90');
    } else {
        navbar.classList.remove('shadow-md', 'bg-black/95');
        navbar.classList.add('bg-black/90');
    }
});
