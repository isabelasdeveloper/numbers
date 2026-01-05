// Ações de exibição/ocultamento dos botões e containers
export function showButton(btn) {
  btn.classList.remove("hidden");
}

export function hideButton(btn) {
  btn.classList.add("hidden");
}

export function toggleButtons(shuffleBtn, repeatBtn) {
  hideButton(shuffleBtn);
  showButton(repeatBtn);
}

export function toggleContainers(shuffleDiv, resultDiv) {
  shuffleDiv.classList.add("hidden");
  resultDiv.classList.remove("hidden");
  resultDiv.classList.add("active");
}

export function resetContainers(shuffleDiv, resultDiv) {
  resultDiv.classList.remove("active");
  resultDiv.classList.add("hidden");

  shuffleDiv.classList.remove("hidden");
  shuffleDiv.classList.add("active");
}

export function resetResultList(list) {
  list.innerHTML = "";
}
