let pilotname = prompt("informe Seu nome")

let velocit = 0

let newVelocit = prompt("Em qual velocidade gostaria de Acelerar?")

let confirmNewVelocit = confirm("Deseja realmente colocar a Velocidade a " + newVelocit + "km/s?")

if (confirmNewVelocit) {
    velocit = newVelocit
}

if (velocit <= 0) {
    alert("Nave está parada. Considere partir e aumentar a velocidade.")
} else if (velocit < 40) {
    alert("Você está devagar, podemos aumentar mais.")
} else if (velocit < 80) {
    alert("Parece uma boa velocidade para manter.")
} else if (velocit < 100) {
    alert("Velocidade alta.Considere diminuir.")
} else {
    alert("Velocidade perigosa, Controle automatico forçado.")
}
