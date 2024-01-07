let conv = document.querySelector('.convert')
let inp = document.querySelector('.in')
let len = document.querySelector('.length-conv')
let vol = document.querySelector('.volume-conv')
let mass = document.querySelector('.mass-conv')

conv.addEventListener('click', function() {
    let value = inp.value 
    let feet = (value*3.281).toFixed(3)
    let gallon = (value*0.264).toFixed(3)
    let pound = (value*2.204).toFixed(3)
    let meter = (value/3.281).toFixed(3)
    let liter = (value/0.264).toFixed(3)
    let kg = (value/2.204).toFixed(3)
    len.innerHTML = `${value} meters = ${feet} feet | ${value} feet = ${meter} meters`
    vol.innerHTML = `${value} liters = ${gallon} gallons | ${value} gallons = ${liter} liters`
    mass.innerHTML = `${value} kilos = ${pound} pounds | ${value} pounds = ${kg} kilos`
})