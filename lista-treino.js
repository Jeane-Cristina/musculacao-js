const form = document.querySelector("#form");
const exercicio = document.querySelector("#exercicio");
const serie = document.querySelector("#serie");
const repeticao = document.querySelector("#repeticao");
const itemA1 = document.querySelector("#A");
const itemA2 = document.querySelector("#B");
const itemA3 = document.querySelector("#C");


var lista1 =[]
var lista2 =[]
var lista3 =[]

form.addEventListener("click", salvar
);



function checkInputs(){
    const exercicioValue = exercicio.value;
    const serieValue = serie.value;
    const repeticaoValue = repeticao.value;

    if (exercicioValue === ""){
        setErrorFor("#error1");
    }

    if (serieValue === ""){
        setErrorFor("#error2");
    }

    if (repeticaoValue === ""){
        setErrorFor("#error3");
    }
    else{
        return true;
    }
    return false;

}

function salvar(){

    var preencheu = checkInputs();
    if(!preencheu){
        return;
    }

    lista1.push(exercicio.value);
    lista2.push(serie.value);
    lista3.push(repeticao.value);

    console.log(exercicio.value);
    console.log(serie.value);
    console.log(repeticao.value);

    update();

}
function update(){
    let content1 = `<br><td>${exercicio.value}</td><br>`;
    document.querySelector("#A").innerHTML+= content1;

    let content2 = `<br><td>${serie.value}</td><br>`;
    document.querySelector("#B").innerHTML+= content2;

    let content3 = `<br><td>${repeticao.value}</td><br>`;
    document.querySelector("#C").innerHTML+= content3;
}

function mostrar(){
itemA1.innerHTML +=  ``;
itemA2.innerHTML +=  ``;
itemA3.innerHTML += `` ;
}

function setErrorFor(input, message) {
    const DOM = document.querySelector(input);
    DOM.style.display='block';
    setTimeout(function() {
        DOM.style.display='none';
      }, 3000);
}
 
  document.querySelector(".icone").addEventListener("click", menu_exibir, false);

  var aberto = false;
  function menu_exibir(){
      if(!document.querySelector(".menu").classList.contains("mostrar")){
          document.querySelector(".menu").classList.add("mostrar");
      }
      else{
          document.querySelector(".menu").classList.toggle("mostrar");
      }
  }