const pictograma = document.querySelector(".fire-class__pictogram img");
const audioPictograma = document.querySelector("#pictogram-sound");

function reproducirAudio() {
  if (!audioPictograma.getAttribute("src")) return;

  audioPictograma.currentTime = 0;
  audioPictograma.play().catch((error) => {
    console.error("No se pudo reproducir el audio del pictograma:", error);
  });
}

pictograma.addEventListener("mouseenter", reproducirAudio);
pictograma.addEventListener("mouseleave", () => {
  audioPictograma.pause();
  audioPictograma.currentTime = 0;
});