class Conta {
    numeroDaConta: number;
    saldo: number = 0;

    constructor(numeroDaConta: number) {
        this.numeroDaConta = numeroDaConta;
    }
}

class ContaSalario extends Conta {
    depositar(valor: number) {
        this.saldo += valor;
    }
}

interface ITransacional {// utilizar o I maiusculo no inicio por convenção
    transferir: (valor: number, destinatario: Conta) => boolean;
    taxaTransferencia: number,
}

interface IExemplo2 {
    cnpj: number;
}

interface IExemplo3 extends IExemplo2 {
    telefone: number;
}

class ContaCorrente extends Conta implements ITransacional{
    transferir(valor: number, destinatario: Conta) {
        destinatario.saldo += valor;
        return true;
    };
    taxaTransferencia: number = 0;

}

