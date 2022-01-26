let sections = document.querySelectorAll(".js-scroll")
let metadeDaTela = window.innerHeight * 0.7

let ativarScroll = () => 
{
    sections.forEach(section => {
        let distanciaDoTopo = section.getBoundingClientRect().top - metadeDaTela
        
        if(distanciaDoTopo < 0){
            section.classList.add('ativo')
            return true
        }
    })
}
ativarScroll()

window.addEventListener('scroll', ativarScroll)

let ativarScrollLeft = () => 
{
    let itens = document.querySelectorAll('.p-item')
    itens.forEach( item => {
        if(item.parentElement.parentElement.className.includes('ativo')){
                item.classList.add('ativoLeft')
                item.nextElementSibling.classList.remove('item')  
        }
    })  
}
ativarScrollLeft()

window.addEventListener('scroll', ativarScrollLeft)

let ativarScrollRight = () => 
{
    let itens = document.querySelectorAll('.s-item')
    itens.forEach( item => {
        if(item.parentElement.parentElement.className.includes('ativo')){
                item.classList.add('ativoRight') 
        }
    })  
}
ativarScrollRight()
window.addEventListener('scroll', ativarScrollRight)