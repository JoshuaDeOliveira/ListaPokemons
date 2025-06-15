import {ProcurarData} from '../PokeAPI/PokeData.js'
import {CorrigirID} from "../Utilts/HTMLUtilts.js";

export async function RunIndex(){
  BotoesRegionais()
  PesquisarPokemons()
  const lista = await ProcurarData('National')
  CriaçãoPokemon(lista)
  RedirecionarInformações()
}

let InserirHTML = document.querySelector('.Grid-Pokemon')

function CriaçãoPokemon(Lista){
  InserirHTML.innerHTML = '';

  Lista.forEach(pokemon => {
    const div = document.createElement('div');
    div.classList.add('Div-Pokemon');
    div.dataset.pokemonId = pokemon.ID
    div.innerHTML += `
    <div class="Infos-Pokemon">
      <div class="Info-Visual">
        <span class="ID">#${CorrigirID(pokemon.ID)}</span>
        <span class="Name">${pokemon.Nome}</span>
      </div>
      <div class="Tipos">
        <span class="Type">
          <img src="CSS/Imgs/IconTypes/grass.png" alt="">
        </span>
        <span class="Type">
          <img src="CSS/Imgs/IconTypes/poison.png" alt="">
        </span>
      </div>
    </div>
    <div class="Sprites-Pokemons">
      <img class="Sprite" src="${pokemon.Imagem}" alt="">
      <img class="Pokeball" src="./CSS/Imgs/Pokeball.png" alt="">
    </div>
  `
  InserirHTML.appendChild(div)
  })
}

async function BotoesRegionais(){
  const btn = document.querySelectorAll('.btn-região')
  btn.forEach(async button => {
    button.addEventListener('click', async () => {
      btn.forEach(b => b.classList.remove('RegiãoSelecionada'));
      const ID = button.dataset.testeid
      const BotaoSelecionado = document.querySelector(`[data-testeid="${ID}"]`)
      const lista = await ProcurarData(ID)
      CriaçãoPokemon(lista)

      if (BotaoSelecionado) {
        BotaoSelecionado.classList.add('RegiãoSelecionada') 
      } else {
        console.log('Botão não foi encontrado')
      }
    })
})
}

async function PesquisarPokemons() {
  let Pesquisar = document.querySelector('.Pesquisa')
  document.querySelector('.btn-pesquisar').addEventListener('click', () => {
    const NomePesquisa = (Pesquisar.value).toLowerCase()
    console.log(NomePesquisa)
  })
}

function RedirecionarInformações(){
  const Pokemons = document.querySelectorAll('.Div-Pokemon')
  Pokemons.forEach(Pokemon => {
    Pokemon.addEventListener('click', () => {
      const ID = Pokemon.dataset.pokemonId
      window.location.href = `DetalhesCompletos.html?PokeId=${ID}`
    })
  })
}