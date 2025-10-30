// MODO ESCURO COM SALVAMENTO LOCAL
function alternarModo() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const isDark = body.classList.contains("dark-mode");
  localStorage.setItem("modoEscuro", isDark);
}

// CARREGAR PREFERÊNCIA
document.addEventListener("DOMContentLoaded", () => {
  const modoEscuro = localStorage.getItem("modoEscuro") === "true";
  if (modoEscuro) document.body.classList.add("dark-mode");

  // BOTÃO FIXO DE ACESSIBILIDADE
  const btn = document.createElement("button");
  btn.innerText = "🌙 / ☀️ Modo";
  btn.setAttribute("aria-label", "Alternar modo claro e escuro");
  btn.onclick = alternarModo;
  btn.style.position = "fixed";
  btn.style.bottom = "20px";
  btn.style.right = "20px";
  btn.style.zIndex = "1000";
  document.body.appendChild(btn);
});

