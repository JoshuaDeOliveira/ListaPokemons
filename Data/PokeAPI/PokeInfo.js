const FullData = async (ID) => {
  try {
    const [Poke, PokeAdicional] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${ID}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${ID}`)
    ]);
    return {
      Dados: await Poke.json(),
      DadosAdicionais: await PokeAdicional.json()
    }
  } catch (error) {
    console.log(`Essa foi o erro encontrado ${error}`)
  }
}

class Pokemon{
  Nomes; /*Insira aqui os nomes do Pokemon em ambos idiomas*/
  Sprite;
  Descrições; 
  Fisicos; /*Insira aqui os dados sobre as partes fisicas*/
  Tipos;
  InfoBase; /*Insira aqui as informações base*/
  InfoStatus; /*Insira aqui as informações sobre os status*/
  InfoEvo;
  constructor(Poke){
    const getStat = (name) => Poke.Dados.stats.find(u => u.stat.name === name)?.base_stat ?? 0;
    this.Nomes = {
      Ingles: Poke.DadosAdicionais.name,
      Japones: Poke.DadosAdicionais.names[0].name
    },
    this.Sprite = Poke.Dados.sprites.front_default,
    this.Descrições = {
      Especie: Poke.DadosAdicionais.genera.find(u => u.language.name == 'en').genus,
      Info: Poke.DadosAdicionais.
      flavor_text_entries.find(u => u.language.name == 'en').flavor_text
    },
    this.Fisicos = {
      Altura: Poke.Dados.height,
      Peso: Poke.Dados.weight
    },
    this.Tipos = Poke.Dados.types,
    this.InfoBase = {
      ID: Poke.Dados.id,
      Genero: Poke.DadosAdicionais.gender_rate,
      Catch: Poke.DadosAdicionais.capture_rate,
      Habilidades: Poke.Dados.abilities,
      FriendShip: Poke.DadosAdicionais.base_happiness,
      Exp: Poke.Dados.base_experience,
      Growth: Poke.DadosAdicionais.growth_rate.name,
      Eggs: Poke.DadosAdicionais.egg_groups
    },
    this.InfoStatus = {
      HP: getStat('hp'),
      Ataque: getStat('attack'),
      Defense: getStat('defense'),
      Speed: getStat('speed'),
      SpecialAttack: getStat('special-attack'),
      SpecialDefense: getStat('special-defense')
    },
    this.InfoEvo = Poke.DadosAdicionais.evolution_chain
  }
}

export async function DadosPokemons(ID){
  const Poke = await FullData(ID)
  const PokeInfo = new Pokemon(Poke)
  return PokeInfo
}