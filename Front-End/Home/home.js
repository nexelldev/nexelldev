// Simula o usuário logado + gera partículas
document.addEventListener("DOMContentLoaded", () => {
  const username = localStorage.getItem("username") || "Usuário";
  const usernameSpan = document.getElementById("username");
  if (usernameSpan) usernameSpan.textContent = username;

  // ======= Gera partículas dinamicamente =======
  const particlesContainer = document.getElementById("particles");
  if (particlesContainer) {
    const total = 300;
    for (let i = 0; i < total; i++) {
      const p = document.createElement("div");
      p.className = "c";

      const z = Math.floor(Math.random() * 360) + "deg";
      const y = Math.floor(Math.random() * 360) + "deg";
      const hue = (40 / total) * i;
      const delay = (i * 0.01).toFixed(2) + "s";

      // órbita aleatória para espalhar
      const orbSize = (150 + Math.random() * 400).toFixed(0) + "px";

      p.style.setProperty("--z", z);
      p.style.setProperty("--y", y);
      p.style.setProperty("--hue", hue);
      p.style.setProperty("--delay", delay);
      p.style.setProperty("--orb-size", orbSize);

      particlesContainer.appendChild(p);
    }
  }
});

// Função de logout
function logout() {
  localStorage.removeItem("username");
  window.location.href = "../Login/index.html";
}
