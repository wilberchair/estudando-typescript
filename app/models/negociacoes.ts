import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  // private negociacoes: Array<Negociacao> = [];
  //Posso fazer da forma abaixo como abreviação
  private negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this.negociacoes.push(negociacao);
  }

  // lista(): ReadonlyArray<Negociacao> {
  //sintax sugar forma abreviada
  lista(): readonly Negociacao[] {
    return this.negociacoes;
  }
}