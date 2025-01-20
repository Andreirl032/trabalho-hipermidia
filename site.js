var presentationText = document.getElementById("presentation-text");
var presentationTitle = document.getElementById("presentation-title");
var carrinho = document.getElementById("carrinho");
var tituloCarrinho = document.getElementById("titulo-carrinho");
var slideNumber = 1;
var cart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cartText = [
  "App básico",
  "App básico com multiplataforma",
  "App pequeno com 3 telas",
  "App pequeno com 4 telas",
  "App pequeno com 5 telas",
  "App médio",
  "App médio de 10 telas",
  "App grande de 15 telas",
  "App grande de 20 telas",
  "App corporativo",
];
var cartValue = [50, 75, 90, 100, 120, 200, 300, 500, 700, 1000];
//sei que a melhor opção era utilizar objeto, mas fica mais simples de manipular dado assim já que não é um projeto empresarial real kkkk

function addToCart(product) {
  cart[product] += 1;
  console.log(cart);
  updateCart();
}

function updateCart() {
  var div = document.createElement("div");
  for (var i = 0; i < 10; i++) {
    if (cart[i] > 0) {
      var p = document.createElement("p");
      p.textContent = `${cartText[i]}: ${cart[i]}`;
      div.appendChild(p);
    }
  }
  carrinho.replaceChildren(div);
}

function changeText() {
  if (slideNumber === 1) {
    presentationText.textContent =
      "Desenvolver aplicativos personalizados que inspirem, simplifiquem e impulsionem o sucesso dos nossos clientes, oferecendo excelência em tecnologia e design.";
    presentationTitle.textContent = "Missão";
  } else if (slideNumber === 2) {
    presentationText.textContent =
      "Ser reconhecida como a principal parceira no desenvolvimento de soluções digitais que moldam o futuro dos negócios.";
    presentationTitle.textContent = "Visão";
  } else if (slideNumber === 3) {
    presentationText.textContent =
      "Prezamos pela inovação, excelência, ética e sustentabilidade, sempre trabalhando em parceria com nossos clientes para criar soluções impactantes e de alta qualidade.";
    presentationTitle.textContent = "Valores";
  }
}

function decreaseSlideNumber() {
  console.log("oie");
  if (slideNumber === 3 || slideNumber === 2) {
    slideNumber -= 1;
  } else if (slideNumber === 1) {
    slideNumber = 3;
  } else {
    slideNumber = 1;
  }
  changeText();
}
function increaseSlideNumber() {
  if (slideNumber === 1 || slideNumber === 2) {
    slideNumber += 1;
  } else if (slideNumber === 3) {
    slideNumber = 1;
  } else {
    slideNumber = 1;
  }
  changeText();
}
