// Placeholder por enquanto. Pode usar para interações futuras.
console.log("TechSky Landing Page carregada com sucesso.");
// Scroll suave nos botões "Solicitar Orçamento"
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
  