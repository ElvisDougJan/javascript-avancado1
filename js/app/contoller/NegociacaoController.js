class NegociacaoController {

  
  constructor() {
    let $ = document.querySelector.bind(document)
    this._inputQuandidade = $('#quantidade');
    this._inputData = $('#data');
    this._inputValor = $('#valor');
  }
  
  adiciona(event) {
    event.preventDefault();
  
    let data = new Date(this._inputData.value.replace(/-/g, ','));
    console.log(data);

    let negociacao = new Negociacao(
      this._inputData.value,
      this._inputQuandidade.value,
      this._inputValor.value
    ) 

    console.log(negociacao)
  }
}