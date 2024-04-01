window.onload = () => {
  attachFormEventHandler();
};

function attachFormEventHandler() {
  const form = document.querySelector("#form");
  form.addEventListener("submit", submitForm);
}
function submitForm(e) {
  e.preventDefault();

  const form = new FormData(e.target);
  const formData = form.entries();
  let users = {};
  for (const [key, value] of formData) {
    users[key] = value;
  }
}
