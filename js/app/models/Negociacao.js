class Negociacao { 

  //Definindo parametros que devem ser passados na instancia
  constructor(data, quantidade, valor) {
    this._data = data
    this._quantidade = quantidade
    this._valor = valor
  }

  //Adicionando método
  getVolume () {
    return this.quantidade * this.valor 
  }

  //Adicionando métodos de acesso para impedir acesso direto dos atributos com _ (underline)
  getData() {
    return this._data
  }

  getQuantidade () {
    return this._quantidade
  }

  getValor() {
    return this._valor
  }
}