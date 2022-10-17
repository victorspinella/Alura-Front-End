import { Cliente } from "./Cliente";

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;

        } 
    }

    get cliente(){
        return this.cliente;
    }

    //#saldo;
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;
        this.agencia = agencia;
    }

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
            }
    }


    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    
    }
}