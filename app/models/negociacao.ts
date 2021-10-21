export class Negociacao {
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
      const data = new Date(this._data.getTime());
    return data;
  }
  get volume(): number {
      return this.quantidade * this.valor;
  }

  public static criaDe(dateString: string, quatidadeString: string, valorSting: string): Negociacao {
    const exp = /-/g;
    const date = new Date(dateString.replace(exp, ','));
    const quantidade = parseInt(quatidadeString);
    const valor = parseFloat(valorSting);
    return new Negociacao(date, quantidade, valor);
  }
}
