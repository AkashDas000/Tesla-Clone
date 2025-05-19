const vehicels = document.querySelector('.vehicles')
const final = document.querySelector('.final')

const energy = document.querySelector('.energy')
const energybar = document.querySelector('.energy-bar')

const charging = document.querySelector('.charging')
const chargingbar = document.querySelector('.charging-bar')

const discover = document.querySelector('.discover')
const discoverbar = document.querySelector('.discover-bar')

const shop = document.querySelector('.shop')
const shopbar = document.querySelector('.shop-bar')

const loading = document.querySelector('.loading');

document.addEventListener('DOMContentLoaded', function(){
    setTimeout(()=>{
        loading.style.display = "none";
    }, 3000);
})

vehicels.addEventListener('mouseover', function(){
    final.style.display = 'block'
    energybar.style.display = 'none'
    chargingbar.style.display = 'none';
    discoverbar.style.display = 'none';
    shopbar.style.display = 'none';
    setTimeout(() => final.style.opacity = '1', 0)
})


final.addEventListener('mouseleave', function(){
    final.style.display = 'none'
})

energy.addEventListener('mouseover', function(){
    energybar.style.display = 'block';
    final.style.display = 'none';
    chargingbar.style.display = 'none';
    discoverbar.style.display = 'none';
    shopbar.style.display = 'none';
})

energybar.addEventListener('mouseleave', function(){
    energybar.style.display = 'none';
})

charging.addEventListener('mouseover', function(){
    chargingbar.style.display = 'block';
    final.style.display = 'none';
    energybar.style.display = 'none';
    discoverbar.style.display = 'none';
    shopbar.style.display = 'none';
})

chargingbar.addEventListener('mouseleave', function(){
    chargingbar.style.display = 'none';
})

discover.addEventListener('mouseover', function(){
    discoverbar.style.display = 'block';
    final.style.display = 'none';
    energybar.style.display = 'none';
    chargingbar.style.display = 'none';
    shopbar.style.display = 'none';
})
discoverbar.addEventListener('mouseleave', function(){
    discoverbar.style.display = 'none';
})


shop.addEventListener('mouseover', function(){
    shopbar.style.display = 'block';
    final.style.display = 'none';
    energybar.style.display = 'none';
    chargingbar.style.display = 'none';
    discoverbar.style.display = 'none';
})
shopbar.addEventListener('mouseleave', function(){
    shopbar.style.display = 'none';
})


// vehicels.addEventListener('mouseover', function(){
//     console.log('hello')
// })