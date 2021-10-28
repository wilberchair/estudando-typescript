import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView {

  private elemento: HTMLLIElement;
  constructor(seletor: string) {
    this.elemento = document.querySelector(seletor)
  }
  template(model: Negociacoes): string {
    return `
      <table class="table table-hover tablered">
        <thead>
          <tr>
            <th>DATA</th>
            <th>QUANTIDADE</th>
            <th>VALOR</th>
            <th>VOLUME</th>
          </tr>
        </thead>
        <tbody>
          ${model.lista().map(negociacao => {
            return `
              <tr>
                <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                <td>${negociacao._quantidade}</td>
                <td>${negociacao._valor}</td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    `;
  }

  update(model: Negociacoes): void {
    const template = this.template(model)
    this.elemento.innerHTML = template;
  }
}