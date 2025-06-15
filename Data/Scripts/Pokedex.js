import {DadosPokemons} from "../PokeAPI/PokeInfo.js";

export async function RunPokedex(){
  const Dados = await PegarDados()
  InicioHTML(Object.HTMLInicial)
  BotoesSelecao()
}

const InserirInfo = document.querySelector('.Informações')

async function BotoesSelecao() {
  const Seleção = document.querySelectorAll('.btn-pokeinfo')
  Seleção.forEach(button => {
    button.addEventListener('click', () => {
      const ID = (button.dataset.testeid).toLowerCase()
      switch (ID) {
        case 'stat':
          InicioHTML(Object.HTMLStatus)
          break;
        case 'info':
          InicioHTML(Object.HTMLInicial)
          break;
        case 'evol':
          InicioHTML(Object.HTMLEvolution)
          break;
        default:
          console.log('Socorro')
          break;
      }
    })
  })
}

function InicioHTML(HTML){
  const div = document.createElement('section');
  InserirInfo.innerHTML = ''
  div.classList.add('Pokedex');
  div.innerHTML = HTML
  InserirInfo.appendChild(div)
}

async function PegarDados(){
  const URL = new URLSearchParams(window.location.search)
  const PokeId = URL.get('PokeId')
  const Pokemon = await DadosPokemons(PokeId)
  return Pokemon
}

const Object = {
  HTMLInicial: `
        <div class="Descriçao">
          <h1></h1>
          <p></p>
        </div>
        <div class="Fisico">
          <span>Height - 0.6m</span>
          <span>Weight - 100kg</span>
        </div>
        <div class="Types">
          <img src="./CSS/Imgs/IconTypes/dark.png" alt="">
        </div>
        <div class="Info">
          <p>ID: </p>
          <p>Genero: </p>
          <p>Catch Rate: </p>
          <p>Habilidades: </p>
          <p>Base Friendship: </p>
          <p>Base Exp: </p>
          <p>Growth Rate: </p>
          <p>Egg Groups: </p>
        </div>
     `,
  HTMLStatus: `
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
        `,
  HTMLEvolution: `
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
}