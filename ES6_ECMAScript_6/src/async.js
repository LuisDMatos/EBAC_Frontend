function funcaoMuitoPesada() {
    let execucoes = 0;
    for (let i = 0; i < 1000000000; i++) {
        execucoes++;
    }
    return execucoes;
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0;
        for (let i = 0; i < 1000000000; i++) {
            execucoess++;
        }
        resolve(execucoes);
    }catch(e) {
        reject('Deu erro na interação dos números')
    }
})

const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com usario ${login}`)
        }, 3000)
    })
}

console.log("inicio");
// console.log(funcaoMuitoPesada());
funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch (erro => console.log(erro));

console.log("fim");

async function execucaoPrincipal(){
    console.log("inicio");

    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch (erro => console.log(erro));
    promiseComParametros('luis@gmail.com', 123456).then(resultado => {
        console.log(resultado);
    })

    try {
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(rsultado)
    }catch(e) {
        console.log(e)
    }

    console.log("fim");

}

execucaoPrincipal()

