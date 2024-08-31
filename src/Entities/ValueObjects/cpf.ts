export class CPF {
    _cpf = "";

    constructor(cpf:string){
        this._cpf = cpf;
        this.validate();
    }

    // pensar em uma forma de realizar a verificar em um orgão do governo garantindo vericidade.
    validate(){
        if(this._cpf.length != 11){
            throw new Error("CPF com tamanho invalido.")
        }
    }

    getFormattedCPF(): string {
        return this._cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    getCPF() {
        return this._cpf;
    }
}