let sections = document.querySelectorAll(".js-scroll")
let metadeDaTela = window.innerHeight * 0.8

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


function initMenuAccordeon() {

    const accordionList = document.querySelectorAll('.js-accordion dt')
    const activeClass = 'ativo'
    if(accordionList.length){
    accordionList[0].nextElementSibling.classList.add(activeClass)
    accordionList[0].classList.add(activeClass)
    accordionList.forEach((item) => {
        item.addEventListener('click', activeAccordion)
    })
    function activeAccordion() {
        this.nextElementSibling.classList.toggle(activeClass)
        this.classList.toggle(activeClass)
    }
    }
    
    }
    initMenuAccordeon()

    const btnMenu = document.querySelector('.btn-menu')
    const activeMenu = () => {
        btnMenu.classList.toggle('active')
        
        if(btnMenu.className.includes('active')){
            btnMenu.childNodes[1].classList.add('active')
            btnMenu.previousElementSibling.classList.add('active')
        }else{
            btnMenu.childNodes[1].classList.remove('active')
            btnMenu.previousElementSibling.classList.remove('active')
        }
    }
    btnMenu.addEventListener('click', activeMenu)