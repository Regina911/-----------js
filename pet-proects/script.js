let button = document.getElementById('btn')
let color = document.querySelector('.color')

let hex = ['0','1','2', '3', '4', '5','6','7','8','9', 'A', 'B', 'C', 'D', 'E', 'F']

button.addEventListener('click', ()=>{
    let fon = generatHex()
    color.textContent = fon
    document.body.style.backgroundColor = fon
})

function generatHex(){
    let hexColor = '#'
    for(i=0; i<6; i++){
        hexColor = hexColor + hex[random()]
    }

    return hexColor
}

function random(){
    return Math.floor(Math.random() * hex.length)
}
