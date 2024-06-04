//função construtora
function Pessoa(nome) {
    this.nome = nome;
    this.dizOi = function() {
        console.log(this.nome + " diz olá");
    }
}

function Funcionario(nome, cargo, salario) {
    this.cargo = cargo;
    let _salario = salario;// criando atributo privado

    //getters e setters
    this.getSalario = function() {// acessando atributo privado 'GET'
        return `o salário de ${this.nome} é de ${_salario}`;
    }

    this.setSalario = function(valor) {//configurando valor do atributo privado 'SET'
        if (typeof valor === 'number') {
            _salario = valor;
        }
    }

    this.aumento = function() {
        const novoSalario = _salario * 1.1;
        console.log(novoSalario)
        _salario = novoSalario;
    }

    this.dizCargo = function() {
        console.log(this.cargo);
    }

    Pessoa.call(this, nome);
}
// instancia
const funcionario1 = new Funcionario("Maria", "dev front-end", 5000);
const funcionario2 = new Funcionario("Pedro", "estagiario", 2000);

// funcionario1.dizOi();
// funcionario1.dizCargo();

// funcionario1.setSalario(7000);//alterando valor de atributo privado

// console.log(funcionario1.getSalario());// acessando atributo privado

funcionario1.aumento();
console.log(funcionario1.getSalario())

funcionario2.aumento();
console.log(funcionario2.getSalario())