const c = Number.parseFloat(prompt("Введите градусы по Цельсию:_"));

function makeFahrenheit(c){
    return Math.round((c * 1.8) + 32)
}

alert(makeFahrenheit(c))