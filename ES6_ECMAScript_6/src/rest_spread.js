function somar2 (a, b) {
    return a + b;
}

console.log(somar(10, 20));

function somar() {
    let soma = 0;

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar(10, 20, 30));

//rest operator
function somarComRest(...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20, 30));

//spread
const numeros = [1,2,3,4]
console.log(...numeros);

const timesDeFutebolMG = ['cruzeiro', 'atletico', 'america'];
const timesDeFutebolSP = ['sao paulo', 'santos'];

const times = timesDeFutebolMG.concat(timesDeFutebolSP);

const times2 = [...timesDeFutebolMG, ...timesDeFutebolSP];

console.log(times2)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna);

//desestruturação
// const motorDoCarroDaAna = carroDaAna.motor;
const {motor: motorDoCarroDaAna} = carroDaAna;
const {motor: motorDoCarroDaJulia} = carroDaJulia

const [item1, item2, ...outrosTimes] = timesDeFutebolMG

console.log(item1);
console.log(item2);
console.log(outrosTimes);

