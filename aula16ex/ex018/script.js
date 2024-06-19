let numero = document.querySelector("input#fnumero");
let lista = document.querySelector("select#flista");
let res = document.querySelector("div#res");
let valores = [];

function isNumero(n) {
  let toNumber = Number(n);
  if (toNumber >= 1 && toNumber <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n, l) {
  let toNumberList = Number(n);
  //-1 indica que o valor não foi encontraod na lista
  if (l.indexOf(toNumberList) != -1) {
    return true;
  } else {
    return false;
  }
}

function adicionar() {
  if (isNumero(numero.value) && !inLista(numero.value, valores)) {
    valores.push(Number(numero.value));
    let item = document.createElement("option");
    item.text = `Valor ${numero.value} adicionado.`;
    lista.appendChild(item);
    res.innerHTML = "";
  } else {
    window.alert("Valor inválido ou já encontrado na lista.");
  }
  numero.value = "";
  numero.focus();
}

function finalizar() {
  if (valores.length == 0) {
    window.alert("adicione valores antes de finalizar");
  } else {
    let total = valores.length;
    let maior = valores[0];
    let menor = valores[0];
    let soma = 0;
    let media = 0;
    for (let pos in valores) {
      soma += valores[pos];
      if (valores[pos] > maior) maior = valores[pos];
      if (valores[pos] < menor) menor = valores[pos];
    }
    media = soma / total;

    res.innerHTML = "";
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`;
  }
}
