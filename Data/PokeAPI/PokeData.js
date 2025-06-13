const FetchRegioesData = async (RegiãoEscolhida) => {
  try {
    const DataPokemons = await fetch(RegiãoEscolhida.url) 
    const PokemonsEscolhidos =  await DataPokemons.json()
    return PokemonsEscolhidos
  } catch (error) {
    console.log(`esse foi o erro encontrado ${error}`)
  }
}

const FetchRegioes = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokedex?offset=0&limit=32`)
    const Data = await response.json()
    const listRegioes = Data.results
    return listRegioes
  } catch (error) {
     console.log(`esse foi o erro encontrado ${error}`)
  }
}

const BuscarURL = async (url, name) => {
  try {
    const ID = url.split('/')[6]
    const dataPoke = await fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`);
    const resposta = await dataPoke.json();
    return {
      PokeName: name,
      Pokelist: resposta
    }
  } catch (error) {
    console.log(`Esse foi o erro encontrado ${error}`)
  }
}

const PokeData = async (Região) => { 
  try {
    const listRegioes = await FetchRegioes()
    const RegiãoEscolhida = listRegioes.find(item => item.name.toLowerCase() === Região.toLowerCase())
    
    if (!RegiãoEscolhida) {
      throw new Error(`Região "${Região}" não encontrada.`)
    }
    
    const PokemonsEscolhidos = await FetchRegioesData(RegiãoEscolhida)
    const ListaPokemons = PokemonsEscolhidos.pokemon_entries
    const Acesso = ListaPokemons.map(pokemon => pokemon.pokemon_species)
    const PokeUrl = Promise.all(
       Acesso.map(async (infos) => {
        try {
          const Lista = await BuscarURL(infos.url, infos.name)
          return Lista
        } catch (error) {
          console.log(`Esse foi o erro em achar os ids dos Pokemons ${error}`)
          return null
        }
      })
    )
  return PokeUrl  
  } catch (error) {
    console.log(`Essa foi o erro encontrado: ${error}`)
    return []
  }
}

let ListaPokemons = {}

export async function ProcurarData(Key) {
  const GeraçãoData = await PokeData(Key)
  ListaPokemons = GeraçãoData.map(pokemon => new Organizar(pokemon))
  return ListaPokemons
}

class Organizar{
  Nome;
  Imagem;
  ID;
  Tipos;

  constructor(Data){
    this.Nome = Data.PokeName
    this.Imagem = Data.Pokelist.sprites.other["official-artwork"].front_default
    this.ID = Data.Pokelist.id
    this.Tipos = Data.Pokelist.types
  }
}
