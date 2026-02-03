// --- BASE DE DATOS (Contenido Dinámico) ---
const contentData = {
    barber: {
        title: "BARBERÍA CLÁSICA",
        subtitle: "EL ARTE DEL CABALLERO",
        desc: "Donde la tradición de la vieja escuela se encuentra con el estilo moderno. Cortes precisos, afeitados con toalla caliente y un ambiente exclusivo.",
        bgImage: "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=2070&auto=format&fit=crop", // Barbería oscura
        calendarUrl: "https://calendar.google.com/calendar/embed?src=es.co%23holiday%40group.v.calendar.google.com&ctz=America%2FBogota", // Ejemplo Calendar 1
        services: [
            { name: "Corte Clásico", price: "$25.000", detail: "Tijera y máquina, acabado natural." },
            { name: "Corte + Barba", price: "$40.000", detail: "Ritual completo con toalla caliente." },
            { name: "Perfilado de Cejas", price: "$10.000", detail: "Limpieza con navaja." },
            { name: "Mascarilla Black", price: "$15.000", detail: "Limpieza profunda de poros." },
            { name: "Diseño Tribal", price: "$15.000+", detail: "Arte capilar personalizado." },
            { name: "Corte Niño", price: "$20.000", detail: "Paciencia y estilo para los pequeños." }
        ],
        products: [
            { name: "Cera Mate Strong", price: "$35.000", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=500" },
            { name: "Aceite para Barba", price: "$28.000", image: "https://images.unsplash.com/photo-1626285861696-9f0bf5a49c6d?auto=format&fit=crop&q=80&w=500" },
            { name: "Gel de Afeitar", price: "$22.000", image: "https://images.unsplash.com/photo-1631729371254-42c2892f0e6e?auto=format&fit=crop&q=80&w=500" }
        ]
    },
    nails: {
        title: "NAILS SPA & BOUTIQUE",
        subtitle: "BELLEZA EN TUS MANOS",
        desc: "Un espacio diseñado para tu relajación. Expertos en nail art, cuidado de manos y pies con los mejores productos del mercado.",
        bgImage: "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2070&auto=format&fit=crop", // Nails elegante
        calendarUrl: "https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FBogota", // Ejemplo Calendar 2
        services: [
            { name: "Manicure Semi", price: "$45.000", detail: "Limpieza + Esmaltado larga duración." },
            { name: "Pedicure Spa", price: "$55.000", detail: "Hidratación, masaje y exfoliación." },
            { name: "Uñas Acrílicas", price: "$90.000", detail: "Esculpidas a tu gusto (Set completo)." },
            { name: "Retiro de Sistema", price: "$20.000", detail: "Cuidado de la uña natural." },
            { name: "Nail Art (x2 uñas)", price: "$12.000", detail: "Diseños a mano alzada." },
            { name: "Baño de Gel", price: "$60.000", detail: "Refuerzo sobre uña natural." }
        ],
        products: [
            { name: "Aceite de Cutícula", price: "$15.000", image: "https://images.unsplash.com/photo-1610992015732-2449b0c26670?auto=format&fit=crop&q=80&w=500" },
            { name: "Crema de Manos", price: "$30.000", image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=500" },
            { name: "Kit Esmaltes Mini", price: "$45.000", image: "https://images.unsplash.com/photo-1632973547304-460344878025?auto=format&fit=crop&q=80&w=500" }
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

    // 4. Inyectar Servicios
    const servicesContainer = document.getElementById('services-list');
    servicesContainer.innerHTML = ''; // Limpiar anterior
    data.services.forEach(service => {
        const serviceHtml = `
            <div class="flex justify-between items-end border-b border-gray-800 pb-3 md:pb-4 hover:border-gold/50 transition-colors group">
                <div class="pr-4">
                    <h4 class="text-lg md:text-xl font-bold text-white group-hover:text-gold transition-colors">${service.name}</h4>
                    <p class="text-gray-500 text-xs md:text-sm mt-0.5 md:mt-1">${service.detail}</p>
                </div>
                <div class="text-xl md:text-2xl font-serif text-gold font-bold whitespace-nowrap">${service.price}</div>
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
        const waLink = `https://wa.me/573001234567?text=${encodeURIComponent(waMessage)}`;

        const prodHtml = `
            <div class="bg-black border border-white/10 rounded-lg overflow-hidden group hover:border-gold/50 transition-all hover:shadow-lg hover:shadow-gold/5 flex flex-col h-full">
                <div class="h-48 md:h-64 overflow-hidden relative flex-shrink-0">
                    <img src="${prod.image}" alt="${prod.name}" class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500">
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div class="p-4 md:p-6 flex flex-col flex-grow">
                    <h4 class="text-lg md:text-xl font-bold text-white mb-2 line-clamp-2">${prod.name}</h4>
                    <div class="flex justify-between items-center mt-auto pt-4">
                        <span class="text-xl md:text-2xl text-gold font-serif font-bold">${prod.price}</span>
                        <a href="${waLink}" target="_blank" class="bg-white text-black px-3 py-2 md:px-4 md:py-2 rounded font-bold hover:bg-gold transition-colors flex items-center gap-2 text-xs md:text-sm uppercase tracking-wide">
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
