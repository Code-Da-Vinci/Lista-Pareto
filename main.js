const navegar = document.querySelector('#btnActivar')
const menu = document.querySelector('#btnMenu')

const caja = document.querySelectorAll('.img_comest')
const btnDos = document.querySelector('.lightbox')
const imgGrande = document.querySelector('.grande')
const btnCerrar = document.querySelector('.cerrar')

navegar.addEventListener('click',()=>{
   btnMenu.classList.toggle('activo')
})

caja.forEach(( eachImg , index )=>{
   caja[index].addEventListener('click',()=>{

      btnDos.classList.add('isActive')
      imgGrande.src = caja[index].src
   })
   
})

btnCerrar.addEventListener('click',()=>{
   btnDos.classList.remove('isActive')
})