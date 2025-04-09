console.log("TechSky Landing Page carregada com sucesso.");
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
  
