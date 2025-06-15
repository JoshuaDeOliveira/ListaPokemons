export const PokeUtilts = {
  CorrigirMedidas(Medida) {
    return Medida / 10
  },
  MostrarGenero(Gender) {
    switch (Gender) {
      case -1:
        return 'Sem Genero'
      case  0:
        return '0% && 100%'
      case  1:
        return '12.5% && 87.5%'
      case  2:
        return '25% && 75%'
      case  3:
        return '37.5% && 62.5%'
      case  4:
        return '50% && 50%'
      case  5:
        return '62.5% && 37.5%'
      case  6:
        return '75% && 25%'
      case  7:
        return '87.5% && 12.5%'
      case  8:
        return '100% && 0%'
    }
  }
}