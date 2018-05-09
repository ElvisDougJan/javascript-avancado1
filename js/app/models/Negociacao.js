class Negociacao {

  //Definindo parametros que devem ser passados na instancia
  constructor(data, quantidade, valor) {
    //convencionando que esses atributos são privados
    this._data = new Date(data.getTime())
    this._quantidade = quantidade
    this._valor = valor
    //Adicionando Objetct.freeze para evitar que seus atributos sejam alterados
    Object.freeze(this)
  }
  /*
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
    } */

  // Adicionando getter para criar métodos somente de leitura 
  get volume() {
    return this.quantidade * this.valor
  }

  get data() {
    return this._data
  }

  get quantidade() {
    return this._quantidade
  }

  get valor() {
    return this._valor
  }

}