function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var formAno = document.getElementById("txtAno");
  var res = document.querySelector("div#res");

  if (formAno.value.length == 0 || formAno.value > ano) {
    window.alert("[ERRO] Verifique os dados e tente novamente");
  } else {
    var formSex = document.getElementsByName("radSex");
    var idade = ano - Number(formAno.value);
    var genero = "";
    var img = document.createElement("img");
    img.setAttribute("id", "foto");
    if (formSex[0].checked) {
      genero = "Homem";
      img.setAttribute("src", "adulto-m.jpg");
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "bebe-m.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-m.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto-m.jpg");
      } else {
        img.setAttribute("src", "idoso-m.jpg");
      }
    } else if (formSex[1].checked) {
      genero = "Mulher";
      img.setAttribute("src", "adulto-f.jpg");
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "bebe-f.jpg");
      } else if (idade < 21) {
        img.setAttribute("src", "jovem-f.jpg");
      } else if (idade < 50) {
        img.setAttribute("src", "adulto-f.jpg");
      } else {
        img.setAttribute("src", "idoso-f.jpg");
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img);
  }
}
