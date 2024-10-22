const pokeName = document.querySelector('.poke_name');
const pokeNum = document.querySelector('.poke_num');
const pokeImg = document.querySelector('.poke_img');

const form = document.querySelector('.form');
const input = document.querySelector('.input_search');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

//variavel buscar pokemon
let searchPoke = 1;

const fetchPokemon = async (pokemon) => {

    // await pq ela demora a responder, se não retona uma promisse
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    //se a api retornar algo válido ele executa, se não vai pro crl
    if (APIResponse.status == 200) {
    // transforma a resposta da API em json
    const data = await APIResponse.json();
    return data;
    }
}

// contante para renderizar o pokemon em tela
const renderPokemon = async (pokemon) => {

    pokeName.innerHTML = 'Carregando...';
    pokeNum.innerHTML = '';

    const data = await fetchPokemon(pokemon);

    //se tiver alguma coisa no data ele executa normal
    if (data) {
        // reseta o display para voltar a exibir gifs
        pokeImg.style.display = 'block';
        pokeName.innerHTML = data.name;
        pokeNum.innerHTML = data.id;
        pokeImg.src = data['sprites']['versions']['generation-v']['black-white']
        ['animated']['front_shiny'];

        //continua a navegação de onde foi feita a busca
        searchPoke = data.id

        // limpa o input
        input.value = '';
    } else {
        //tira o gif do ultimo pokemon da tela
        pokeImg.style.display = 'none';
        pokeName.innerHTML = 'Não existe :(';
        pokeNum.innerHTML = '';
        input.value = '';
    }
}

form.addEventListener('submit', (event) => {

    event.preventDefault();

    //renderiza o pokemon com base no que for inserido e coloca em letra minuscula
    renderPokemon(input.value.toLowerCase());
    
});

btnPrev.addEventListener('click', () => {
    if (searchPoke > 1){
        searchPoke--;
        renderPokemon(searchPoke)
    }
});

btnNext.addEventListener('click', () => {
    searchPoke++;
    renderPokemon(searchPoke);
});

renderPokemon(searchPoke);