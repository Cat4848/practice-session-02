import { sum } from "./utils";

window.onload = () => {
  attachFormEventHandler();
};

function attachFormEventHandler() {
  const form = document.querySelector("#form") as HTMLFormElement;
  form.addEventListener("submit", submitForm);
}
function submitForm(e: Event) {
  e.preventDefault();

  const form = new FormData(e.target as HTMLFormElement);
  const formData = form.entries();
  let users: { [key: string]: FormDataEntryValue } = {};
  for (const [key, value] of formData) {
    users[key] = value;
  }
  const a = 3;
  const b = 3;
  const result = sum(a, b);
}
