document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav a");
  const main = document.querySelector("main");

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("href");

      fetch(page)
        .then(res => res.text())
        .then(data => {
          const parser = new DOMParser();
          const html = parser.parseFromString(data, "text/html");
          const newContent = html.querySelector("main").innerHTML;
          main.innerHTML = newContent;
          window.history.pushState({}, "", page);
        })
        .catch(err => console.error("Erro ao carregar página:", err));
    });
  });
});
