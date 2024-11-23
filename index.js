document.addEventListener("DOMContentLoaded", () => {
    const splashScreen = document.getElementById("splash-screen");
    const mainContent = document.getElementById("main-content");
  
    // Exibe o conteúdo principal após 3 segundos
    setTimeout(() => {
      splashScreen.style.transition = "opacity 1s"; // Adiciona transição suave
      splashScreen.style.opacity = "0"; // Faz o splash screen desaparecer
  
      setTimeout(() => {
        splashScreen.style.display = "none"; // Remove o splash screen completamente
        mainContent.style.display = "block"; // Mostra o conteúdo principal
      }, 1000); // Tempo da transição de opacidade (1 segundo)
    }, 3000); // Tempo total para o splash screen desaparecer (3 segundos)
  });
  