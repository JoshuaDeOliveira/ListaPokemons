export function RunPokedex(){
  BotoesSelecao()
}

async function BotoesSelecao() {
  const Seleção = document.querySelectorAll('.btn-pokeinfo')
  Seleção.forEach(button => {
    button.addEventListener('click', () => {
      const ID = (button.dataset.testeid).toLowerCase()
      switch (ID) {
        case 'stat':
          console.log('stat')
          break;
        case 'info':
          console.log('info')
          break;
        case 'evol':
          console.log('evol')
          break;
        default:
          console.log('Socorro')
          break;
      }
    })
  })
}