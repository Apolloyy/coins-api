const getAPI = async () => {
  let coin1 = document.getElementById('coins-one').value;
  let coin2 = document.getElementById('coins-two').value;
  const API = await fetch(`http://economia.awesomeapi.com.br/json/last/${coin1}-${coin2}`).then(response => response.json());
  viewDisplay(API);
  insertInfos(API[`${coin1}${coin2}`]);
}
  
const viewDisplay = () => {
var view = document.getElementById('view-coins');
view.style.display = "block";
}
  
const insertInfos = (coin) => {
  let number = document.getElementById('coins-insert').value;
  var compra = coin.ask;
  var venda = coin.bid;
  var maximo = coin.high;
  var minimo = coin.low;
  var nome = coin.name;
  var variacao = coin.varBid;

    if(number != ''){
    var primarycoin = document.getElementById('primary-coin-text').innerHTML = `Dados de ${Number(number).toFixed(2)} ${coin.code} em ${coin.codein}: `;
    var othercoin = document.getElementById('other-coin-text');
    othercoin.innerHTML = `
      <p>Valor de Venda: ${Number(compra*number).toFixed(2)}${coin.codein}</p>
      <p>Valor de Compra: ${Number(venda*number).toFixed(2)}${coin.codein}</p>
      <p>Valor máximo hoje: ${Number(maximo*number).toFixed(2)}${coin.codein}</p>
      <p>Valor mínimo hoje: ${Number(minimo*number).toFixed(2)}${coin.codein}</p>
      <p>Nomes: ${nome}</p>
      <p>Porcentagem de variação: ${coin.pctChange}%</p>
      <p>Variação: ${variacao}</p>
    `;
    }

    else {
      var primarycoin = document.getElementById('primary-coin-text').innerHTML = `Dados de 1${coin.code} em ${coin.codein}: `;
      var othercoin = document.getElementById('other-coin-text');
      othercoin.innerHTML = `
        <p>Valor de Venda: ${Number(compra).toFixed(2)} ${coin.codein}</p>
        <p>Valor de Compra: ${Number(venda).toFixed(2)} ${coin.codein}</p>
        <p>Valor máximo hoje: ${Number(maximo).toFixed(2)} ${coin.codein}</p>
        <p>Valor mínimo hoje: ${Number(minimo).toFixed(2)} ${coin.codein}</p>
        <p>Nomes: ${nome}</p>
        <p>Porcentagem de variação: ${coin.pctChange}%</p>
        <p>Variação: ${variacao}</p>
      `;
    }
  }
  

document.getElementById('calc').addEventListener("click", function () {
    getAPI();
});

document.addEventListener("keypress", function (e) {
  if(e.which == 13) 
    {
     getAPI();
    }
});