//MAP
let meuMap = new Map();
meuMap.set("nome", "Luis");
meuMap.set("stack", "html, css, js");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("nome"));

// meuMap.clear();

console.log(meuMap.size);

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("stack");

console.log(meuMap);

//SET
const cpfs = new Set();

cpfs.add('16150123030');
cpfs.add('99034773094');
cpfs.add('79953341095');

console.log(cpfs);

console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['luis', 'felipe', 'antonio', 'matos', 'luis', 'matos'];

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);