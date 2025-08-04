let input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button-box button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;

    if (value === "=") {
      try {
        input.value = eval(input.value);
      } catch (error) {
        input.value = "Error";
      }
    } else if (value === "C") {
      input.value = ""; // Clear input if button is 'C'
    } else {
      input.value += value; // Append value to input
    }
  });
});
