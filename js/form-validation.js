document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
    e.preventDefault();
    let valid = true;

    // Limpa mensagens anteriores
    form.querySelectorAll(".error").forEach(el => el.textContent = "");
    form.querySelectorAll("input").forEach(input => input.style.border = "");

    // Validação de campos obrigatórios
    form.querySelectorAll("input[required]:not([type=checkbox]), select[required]").forEach(input => {
      let errorDiv = input.nextElementSibling;
      if (!errorDiv || !errorDiv.classList.contains("error")) {
        errorDiv = document.createElement("div");
        errorDiv.classList.add("error");
        input.insertAdjacentElement("afterend", errorDiv);
      }

      if (input.value.trim() === "") {
        valid = false;
        errorDiv.textContent = "Campo obrigatório!";
        errorDiv.style.color = "red";
        input.style.border = "2px solid red";
      }
    });

    // Validação de pelo menos uma checkbox marcada
    const checkboxes = form.querySelectorAll("input[type=checkbox]");
    const algumMarcado = Array.from(checkboxes).some(chk => chk.checked);
    if (checkboxes.length > 0 && !algumMarcado) {
      valid = false;
      alert("Selecione pelo menos uma área de interesse.");
    }

    if (valid) {
      alert("Cadastro realizado com sucesso!");
      form.reset();
    }
  });
});
