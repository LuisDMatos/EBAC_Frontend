//Criação de objeto de maneira literal
const carroDoJoao = {// objeto
    modelo: 'Fiesta',// atributo
    fabricante: 'Ford',
    anoFabricacao: '2020',
    anoModelo: '2021',
    acelerar: function() {// metodo
        console.log("vruum");
    }
}

const carroDaMaria = {// bojeto
    modelo: 'Ka',// atributo
    fabricante: 'Ford',
    anoFabricacao: '2022',
    anoModelo: '2022',
    acelerar: function() {//metodo
        console.log("vruum");
    }
}


//função construtora
function Carro(modelo, fabricante, anoFabricacao, anoModelo) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoFabricacao = anoFabricacao;
    this.anoModelo = anoModelo;
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoJoao2 = new Carro("Fiesta", "Ford", 2020, 2021);// instancia
const carroDaMaria2 = new Carro("Ka", "Ford", 2022, 2022);

console.log(carroDoJoao2);
console.log(carroDaMaria2);

//verificação ds tipos de dados
const nome = "Luis"
const idade = 29
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "JavaScript"]//   instancia

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof ehMaiorDeIdade);
console.log(typeof conhecimentos);
console.log(typeof pessoa);

//verificacaçõ de instancias
console.log(carroDaMaria2 instanceof Carro);
console.log(conhecimentos instanceof Carro);


//acessando atributos
console.log(pessoa.nome);
console.log(pessoa['nome']);

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

//verificando se um atributo existe
pessoa.sobrenome = undefined;

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {// maneira mais adequada de buscar
    console.log('tem sobrenome')
}


//transformando obsetros em Array
console.log(Object.keys(pessoa).length);//quantidade de propriedades
console.log(Object.values(pessoa));// valores dos atributos