import "../styles/main.scss";
import "../scripts/modules/onlyNumbers.js";
import {
  showButton,
  hideButton,
  toggleButtons,
  toggleContainers,
  resetContainers,
  resetResultList,
} from "./modules/buttonActions.js";

// Inputs
const quantity = document.getElementById("quantity");
const inicial = document.getElementById("inicial");
const end = document.getElementById("end");
const noRepeat = document.getElementById("no-repeat");

// Buttons
const buttonShuffle = document.getElementById("button-shuffle");
const buttonRepeat = document.getElementById("button-repeat");

// Containers
const divShuffle = document.querySelector(".shuffle");
const divResult = document.querySelector(".result");
const resultList = document.querySelector(".list");

// Eventos
buttonShuffle.addEventListener("click", drawNumbers);
buttonRepeat.addEventListener("click", resetDraw);

// Reset de inputs
function resetInputs() {
  quantity.value = "";
  inicial.value = "";
  end.value = "";
  noRepeat.checked = false;
}

// Validação do formulário
function isValidForm(qtd, min, max, withoutRepeat) {
  if (
    quantity.value === "" ||
    inicial.value === "" ||
    end.value === "" ||
    qtd <= 0
  ) {
    alert("Preencha todos os campos corretamente.");
    resetInputs();
    return false;
  }

  if (min >= max) {
    alert("O valor inicial precisa ser menor que o final.");
    resetInputs();
    return false;
  }

  const totalPossible = max - min + 1;

  if (withoutRepeat && qtd > totalPossible) {
    alert("Quantidade maior que o intervalo disponível sem repetição.");
    resetInputs();
    return false;
  }

  return true;
}

// Função principal de sorteio
function drawNumbers() {
  const qtd = Number(quantity.value);
  const min = Number(inicial.value);
  const max = Number(end.value);
  const withoutRepeat = noRepeat.checked;

  if (!isValidForm(qtd, min, max, withoutRepeat)) return;

  const totalPossible = max - min + 1;
  const result = [];

  resetResultList(resultList);

  for (let i = 0; i < qtd; i++) {
    let number;

    if (withoutRepeat) {
      do {
        number = Math.floor(Math.random() * totalPossible) + min;
      } while (result.includes(number));
    } else {
      number = Math.floor(Math.random() * totalPossible) + min;
    }

    result.push(number);
  }

  // Renderiza resultados na tela
  result.forEach((number) => {
    const li = document.createElement("li");
    li.className = "item";

    const p = document.createElement("p");
    p.className = "result-number";
    p.textContent = number;

    li.appendChild(p);
    resultList.appendChild(li);
  });

  // Só muda a UI depois que os números foram gerados
  toggleContainers(divShuffle, divResult);
  toggleButtons(buttonShuffle, buttonRepeat);
}

// Função de resetar sorteio
function resetDraw() {
  resetContainers(divShuffle, divResult);
  resetButtons();
  resetResultList(resultList);
}

function resetButtons() {
  hideButton(buttonRepeat);
  showButton(buttonShuffle);
}
