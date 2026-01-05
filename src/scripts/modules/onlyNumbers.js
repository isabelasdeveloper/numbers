const inputNumber = document.querySelectorAll(".input-number");

inputNumber.forEach((input) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/\D/g, "");
  });
});
