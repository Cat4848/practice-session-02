window.onload = () => {
  attachFormEventHandler();
};

function attachFormEventHandler() {
  const button = document.querySelector("#submit-button");
  button.addEventListener("click", submitForm);
}
function submitForm(e) {
  const form = new FormData(e.target);
  console.log("form", form);
}
