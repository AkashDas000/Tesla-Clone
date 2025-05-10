const vehicels = document.querySelector('.vehicles')
const final = document.querySelector('.final')

vehicels.addEventListener('mouseover', function(){
    final.style.display = 'block'
    setTimeout(() => final.style.opacity = '1', 0)
})


vehicels.addEventListener('mouseleave', function(){
    final.style.display = 'none'

})


// vehicels.addEventListener('mouseover', function(){
//     console.log('hello')
// })