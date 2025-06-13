import {ProcurarData} from '../PokeAPI/PokeData.js'
import {CorrigirID} from "../Utilts/HTMLUtilts.js";

export async function RunIndex(){
  BotoesRegionais()
  const lista = await ProcurarData('National')
  CriaçãoPokemon(lista)
}

let InserirHTML = document.querySelector('.Grid-Pokemon')

function CriaçãoPokemon(Lista){
  let HTML = ''
  Lista.forEach(pokemon => {
     HTML += `<div class="Div-Pokemon">
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
      </div>
  `
  })
  InserirHTML.innerHTML = HTML
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