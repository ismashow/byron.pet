// 1. Base de Dados dos Pets
const petsData = [
    {
        id: 1,
        nome: "Nina",
        img: "img/nina.png",
        personalidade: ["Muito dócil e carinhosa", "Adora atenção e faz festa", "Companheira e apegada"],
        energia: "Moderado - gosta de passeios tranquilos",
        perfeitoPara: "Famílias, pessoas que querem uma cachorrinha calma"
    },
    {
        id: 2,
        nome: "Gatão",
        img: "img/gatao.png",
        personalidade: ["Observador e curioso", "Calmo, mas gosta de brincar", "Se adapta bem a ambientes tranquilos"],
        energia: "Médio - alterna descanso com brincadeiras",
        perfeitoPara: "Quem busca um gato independente, porém carinhoso"
    },
    {
        id: 3,
        nome: "Toby",
        img: "img/toby.png",
        personalidade: ["Muito leal e protetor", "Tímido no início, mas amoroso", "Inteligente e atento"],
        energia: "Baixo a moderado - ótimo para rotina tranquila",
        perfeitoPara: "Pessoas pacientes que querem um grande amigo fiel"
    }
];

// 2. Carregar Favoritos do LocalStorage
let favoritos = JSON.parse(localStorage.getItem('adotai_favoritos')) || [];

// Referências aos elementos HTML
const container = document.getElementById('petsContainer');
const searchInput = document.getElementById('searchInput');

// 3. Função para Desenhar (Renderizar) os Cards
function renderPets(listaPets) {
    container.innerHTML = ""; // Limpa o container

    if (listaPets.length === 0) {
        container.innerHTML = "<p class='text-center col-span-3 text-gray-500'>Nenhum pet encontrado com esse nome.</p>";
        return;
    }

    listaPets.forEach(pet => {
        const isFavorito = favoritos.includes(pet.id);
        const heartIconClass = isFavorito ? "fa-solid fa-heart text-red-500" : "fa-regular fa-heart text-gray-400";

        const cardHTML = `
            <div class="flex flex-col transform hover:-translate-y-1 transition duration-300">
                <h3 class="text-center font-bold text-lg mb-2 border-b-2 border-black pb-1 inline-block mx-auto px-4">${pet.nome}</h3>
                <div class="relative group">
                    <img src="${pet.img}" class="w-full h-auto rounded-t-lg shadow-md object-cover" alt="${pet.nome}">
                    <button onclick="toggleFavorito(${pet.id})" 
                            class="absolute bottom-2 left-2 bg-white/90 p-2 rounded-full shadow-sm hover:scale-110 transition cursor-pointer group-hover:bg-white">
                        <i class="${heartIconClass} text-2xl"></i>
                    </button>
                </div>
                <div class="bg-[#D9A5A3]/20 border border-[#D9A5A3] p-6 rounded-b-lg shadow-lg text-sm leading-relaxed flex-grow">
                    <p class="mb-2"><strong class="text-black">✨ Personalidade:</strong></p>
                    <ul class="list-disc list-inside mb-3 pl-2 text-gray-700 text-xs">
                        ${pet.personalidade.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                    <p class="mb-1"><strong class="text-black">🐾 Nível de energia:</strong></p>
                    <p class="text-xs text-gray-700 mb-3 pl-2">${pet.energia}</p>
                    <p class="mb-1"><strong class="text-black">💛 Perfeito para:</strong></p>
                    <p class="text-xs text-gray-700 pl-2">${pet.perfeitoPara}</p>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

// 4. Função de Favoritar (Precisa estar no escopo global window para o onclick funcionar)
window.toggleFavorito = function(id) {
    if (favoritos.includes(id)) {
        favoritos = favoritos.filter(favId => favId !== id);
    } else {
        favoritos.push(id);
    }
    localStorage.setItem('adotai_favoritos', JSON.stringify(favoritos));
    filtrarPets(); 
};

// 5. Função de Filtro
function filtrarPets() {
    const termo = searchInput.value.toLowerCase();
    const petsFiltrados = petsData.filter(pet => {
        return pet.nome.toLowerCase().includes(termo);
    });
    renderPets(petsFiltrados);
}

// 6. Event Listeners
if(searchInput) {
    searchInput.addEventListener('input', filtrarPets);
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderPets(petsData);
});