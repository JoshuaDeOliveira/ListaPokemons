export function getStat(name){
  const getStat = (name) => Poke.Dados.stats.find(u => u.stat.name === name)?.base_stat ?? 0;
  return getStat
}