import { register } from "./api/data.js";
import { showHomePage } from "./home.js";
import { updateUserNav } from "./app.js";
import { showSection } from "./dom.js";
const section = document.getElementById("registerSection");
section.remove();
const form = section.querySelector("form");
form.addEventListener("submit", onSubmit);
let ctx = null;

export function showRegisterPage(ctxTarget) {
  ctx = ctxTarget;
  ctx.showSection(section);
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("repass").trim();

  if (password != repass) {
    alert("Password don't match!");
    return;
  }
  await register(email, password);
  ctx.updateUserNav();
  ctx.goTo("home");
}

async function onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const email = formData.get("email").trim();
  const password = formData.get("password").trim();
  const repass = formData.get("repass").trim();

  if (password != repass) {
    alert("Password don't match!");
    return;
  }
  await register(email, password);
  ctx.updateUserNav();
  ctx.goTo("home");
}
