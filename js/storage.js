export function salvarCadastro(dados) {
  const lista = JSON.parse(localStorage.getItem("cadastros")) || [];
  lista.push(dados);
  localStorage.setItem("cadastros", JSON.stringify(lista));
}

export function listarCadastros() {
  return JSON.parse(localStorage.getItem("cadastros")) || [];
}
