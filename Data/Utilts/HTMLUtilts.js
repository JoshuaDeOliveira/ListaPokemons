export function BotoesRegionais(){
  const btn = document.querySelectorAll('.btn-região')

  btn.forEach(button => {
    button.addEventListener('click', () => {
      btn.forEach(b => b.classList.remove('RegiãoSelecionada'));

      const ID = button.dataset.testeid
      const BotaoSelecionado = document.querySelector(`[data-testeid="${ID}"]`)
      if (BotaoSelecionado) {
        BotaoSelecionado.classList.add('RegiãoSelecionada') 
      } else {
        console.log('Botão não foi encontrado')
      }
    })
})
}