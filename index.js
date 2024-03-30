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
  const a = 4;
  const b = 6;
  const c = 7;
  const d = 8;
  const e = 1;
}
