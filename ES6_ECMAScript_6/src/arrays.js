const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}


//variações de "for"
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede socila ${nomeDaRedeSocial}`)
})

const numeros = [1, 2, 3, 4, 5,]
const dobroDosNumeros = numeros.map(function(numeroAtual) {
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)
const alunos = ['Laura', 'Julia', 'Paulo', 'Marcos'];
const alunos2 = alunos.map(function(itemAtual) {
    itemAtual = {
        nome: itemAtual,
        curso: 'Frontend'
    }
    return itemAtual;
})

console.log(alunos2)


//find
//buscando pelo item dentro do array
const julia = alunos2.find(function(item){
    return item.nome == 'Julia'
})

console.log(julia);


//findeIndex
//buscando o incide do array
const indiceDaJulia = alunos2.findIndex(function(item){
    return item.nome == 'Julia'
})

console.log(indiceDaJulia);

//every
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})

const todosAlunosSaoDeFrontend = alunos2.every(function(item) {
    return item.curso === 'Frontend'
})

console.log(todosAlunosSaoDeFrontend);

//some
const existeAlgumAlunoDeBackend = alunos2.some(function(item) {
    return item.curso === 'Backend' && item.curso === 'Frontend'
})

console.log(existeAlgumAlunoDeBackend);

//filter
//filtrando itens de array
const alunosDeBackend = alunos2.filter(function(item) {//função anonima
    return item.curso === 'Backend';
})

console.log(alunosDeBackend);

function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}

const alunosDeBackend2 = alunos2.filter(filtraAlunosDeBackend);

console.log(alunosDeBackend2);

//reduce
//reduz o conteudo de um array em um unico valor
const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador;
},0)

console.log(soma);


const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `;
    return acumulador;
}, '')

console.log(nomeDosAlunos);


//fazendo reduce com for
let somaComFor = 0;

for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
}

console.log(somaComFor);