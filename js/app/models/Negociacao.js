class Negociacao { 

  //Definindo parametros que devem ser passados na instancia
  constructor(data, quantidade, valor) {
    this.data = data
    this.quantidade = quantidade
    this.valor = valor
  }

  //Adicionando método
  calculaVolume () {
    return this.quantidade * this.valor 
  }
}