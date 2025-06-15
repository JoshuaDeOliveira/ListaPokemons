import {DadosPokemons} from "../PokeAPI/PokeInfo.js";
import {PokeUtilts} from "../Utilts/PokeUtilts.js";
import {CorrigirID, CorrigirFrase} from "../Utilts/HTMLUtilts.js";

export async function RunPokedex(){
  const Pokemon = await PegarDados()
  InicioHTML('Inicio', Pokemon)
  BotoesSelecao()
}

const InserirInfo = document.querySelector('.Informações')
const InserirInicio = document.querySelector('header')

async function BotoesSelecao() {
  const Seleção = document.querySelectorAll('.btn-pokeinfo')
  Seleção.forEach(button => {
    button.addEventListener('click', async () => {
      const Pokemon = await PegarDados()
      const ID = (button.dataset.testeid).toLowerCase()
      switch (ID) {
        case 'stat':
          Informações('Status', Pokemon)
          break;
        case 'info':
          Informações('Inicio', Pokemon)
          break;
        case 'evol':
          Informações('Evolution', Pokemon)
          break;
        default:
          console.log('Socorro')
          break;
      }
    })
  })
}

async function InicioHTML(Key, PokeDado){
  const Header = ` 
    <div class="Names">
      <h1>${PokeDado.Nomes.Japones}</h1>
      <h1>${PokeDado.Nomes.Ingles}</h1>
    </div>
    <div class="imgs-poke">
      <img class="Pokeball" src="./CSS/Imgs/Pokeball.png" alt="">
      <img class="Sprite-Poke" src="${PokeDado.Sprite}" alt="">
    </div>`
  InserirInicio.innerHTML = Header  
  Informações(Key, PokeDado)
}

async function PegarDados(){
  const URL = new URLSearchParams(window.location.search)
  const PokeId = URL.get('PokeId')
  const Pokemon = await DadosPokemons(PokeId)
  return Pokemon
}

async function Informações(Key, PokeDado) {
  const div = document.createElement('section');
  InserirInfo.innerHTML = ''
  div.classList.add('Pokedex');
  const HTML = await InserirDados(Key, PokeDado)
  div.innerHTML = HTML
  InserirInfo.appendChild(div)
}

async function InserirDados(Key, PokeDado){
  console.log(PokeDado)
  switch (Key) {
    case 'Inicio':
      const HTMLInicial = `
        <div class="Descriçao">
          <h1>${PokeDado.Descrições.Especie}</h1>
          <p>${CorrigirFrase(PokeDado.Descrições.Info)}</p>
        </div>
        <div class="Fisico">
          <span>Height - ${PokeUtilts.CorrigirMedidas(PokeDado.Fisicos.Altura)}m</span>
          <span>Weight - ${PokeUtilts.CorrigirMedidas(PokeDado.Fisicos.Peso)}kg</span>
        </div>
        <div class="Types">
          <img src="" alt="">
        </div>
        <div class="Info">
          <p>ID: #${CorrigirID(PokeDado.InfoBase.ID)}</p>
          <p>Genero: ${PokeUtilts.MostrarGenero(PokeDado.InfoBase.Genero)}</p>
          <p>Catch Rate: </p>
          <p>Habilidades: </p>
          <p>Base Friendship: ${PokeDado.InfoBase.FriendShip}</p>
          <p>Base Exp: ${PokeDado.InfoBase.Exp}</p>
          <p>Growth Rate: ${PokeDado.InfoBase.Growth}</p>
          <p>Egg Groups: </p>
        </div>
      `
    return HTMLInicial
    case 'Status':
      const HTMLStatus = `
        <div class="Barras">
          <div class="Stat-Info">
            <div class="Infos">
              <div>HP: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="252" low="50" high="150" optimum="90" value="50">34</meter>
          </div>
          <div class="Stat-Info">
            <div class="Infos">
              <div>Defense: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="252" low="50" high="150" optimum="90" value="50">34</meter>
          </div>
          <div class="Stat-Info">
            <div class="Infos">
              <div>Speed: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="252" low="50" high="150" optimum="90" value="50">34</meter>
          </div>
          <div class="Stat-Info">
            <div class="Infos">
              <div>S.ATK: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="252" low="50" high="150" optimum="90" value="50">34</meter>
          </div>
          <div class="Stat-Info">
            <div class="Infos">
              <div>S.Def: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="252" low="50" high="150" optimum="90" value="50">34</meter>
          </div>
          <div class="Stat-Info">
            <div class="Infos">
              <div>Total: </div>
              <div>45</div>
            </div>
            <meter class="Stat-Bar" min="0" max="1260" low="50" high="150" optimum="90" value="140">34</meter>
          </div>
        </div>
        <div class="Types-Fraquezas">
          <div class="Type">
            <h1 class="Titulo">Fraquezas</h1>
            <img src="./CSS/Imgs/IconTypes/dark.png" alt="">
          </div>
          <div class="Type">
            <h1 class="Titulo">Vantagens</h1>
            <img src="./CSS/Imgs/IconTypes/dark.png" alt="">
          </div>
        </div>
        `
      return HTMLStatus
    case 'Evolution':
      const HTMLEvolution = `
        <div class="Grid-Imgs">
          <div class="Evolução">
            <h1>Pichu</h1>
            <img src="./CSS/Imgs/2017987_bafa3.png" alt="">
          </div>
          <div class="Evolução">
            <h1>Pichu</h1>
            <img src="./CSS/Imgs/2017987_bafa3.png" alt="">
          </div>
          <div class="Evolução">
            <h1>Pichu</h1>
            <img src="./CSS/Imgs/2017987_bafa3.png" alt="">
          </div>
        </div>
        `
      return HTMLEvolution
    default:
      break;
  }
}
