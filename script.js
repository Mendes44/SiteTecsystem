const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");
const form = document.querySelector("#whatsapp-form");
const phoneInput = document.querySelector("#phone");
const deviceSelect = document.querySelector("#device");
window.dataLayer = window.dataLayer || [];

function trackEvent(eventName, details = {}) {
  window.dataLayer.push({ event: eventName, ...details });
}

const requestedDevice = new URLSearchParams(window.location.search).get("device");
if (requestedDevice && [...deviceSelect.options].some((option) => option.value === requestedDevice)) {
  deviceSelect.value = requestedDevice;
}

//Menu Sanduiche
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!open));
  navigation.classList.toggle("is-open", !open);
  document.body.classList.toggle("menu-open", !open);
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  });
});

document.querySelectorAll("[data-device]").forEach((link) => {
  link.addEventListener("click", () => {
    deviceSelect.value = link.dataset.device;
    trackEvent("select_service", { device: link.dataset.device });
  });
});

document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_phone"));
});

document.querySelectorAll('a[href*="google.com/maps"]').forEach((link) => {
  link.addEventListener("click", () => trackEvent("click_route"));
});

phoneInput.addEventListener("input", () => {
  const value = phoneInput.value.replace(/\D/g, "").slice(0, 11);
  if (value.length <= 2) {
    phoneInput.value = value;
  } else if (value.length <= 7) {
    phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    phoneInput.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
  }
});

function validateField(field, message) {
  const wrapper = field.closest(".field");
  const error = wrapper.querySelector(".error");
  const invalid = !field.value.trim() || !field.checkValidity();
  wrapper.classList.toggle("invalid", invalid);
  error.textContent = invalid ? message : "";
  return !invalid;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const problem = document.querySelector("#problem");
  const validName = validateField(name, "Informe seu nome.");
  const validPhone = validateField(phoneInput, "Informe um telefone válido com DDD.");
  const validDevice = validateField(deviceSelect, "Selecione o tipo de aparelho.");
  const validProblem = validateField(problem, "Descreva o defeito com pelo menos 10 caracteres.");

  if (!validName || !validPhone || !validDevice || !validProblem) {
    form.querySelector(".invalid input, .invalid select, .invalid textarea")?.focus();
    return;
  }

  const message = [
    "Olá, Tecsystem! Vim pelo site e gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${name.value.trim()}`,
    `*Telefone:* ${phoneInput.value.trim()}`,
    `*Aparelho:* ${deviceSelect.value}`,
    `*Defeito informado:* ${problem.value.trim()}`,
  ].join("\n");

  const url = `https://wa.me/553134871561?text=${encodeURIComponent(message)}`;
  trackEvent("generate_lead", { device: deviceSelect.value });
  window.open(url, "_blank", "noopener,noreferrer");
});

document.querySelector("#year").textContent = new Date().getFullYear();
