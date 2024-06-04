function Carro(modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    
}

function FrotaAutomatica(modelo, cor, portas, cambio) {

    Carro.call(this, modelo, cor);

    this.portas = portas;
    this.cambio = cambio;
}

function FrotaManual(modelo, cor, portas, cambio) {

    Carro.call(this, modelo, cor);

    this.portas = portas;
    this.cambio = cambio;
}

const carro1 = new FrotaAutomatica("HB20", "preto", "4 portas", "automatico");
const carro2 = new FrotaManual("Gol", "Amarelo", "2 portas", "manual");
const carro3 = new FrotaManual("Palio", "azul", "4 portas", "manual");

console.log(carro1); 
console.log(carro2); 
console.log(carro3);