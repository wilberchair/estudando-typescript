export class Negociacoes {
    constructor() {
        // private negociacoes: Array<Negociacao> = [];
        //Posso fazer da forma abaixo como abreviação
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // lista(): ReadonlyArray<Negociacao> {
    //sintax sugar forma abreviada
    lista() {
        return this.negociacoes;
    }
}
