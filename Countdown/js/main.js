// Data para contagem
const countDownDate = new Date("Jun 15, 2022 00:00:00").getTime();

// Atualize a contagem a cada 1 segundo
const x = setInterval(function() {

  // Obtem a data e hora de hoje
  const now = new Date().getTime();

  // Encontre a distância entre agora e a data da contagem regressiva
  const distance = countDownDate - now;

  // Cálculo de tempo para dias, horas, minutos e segundos
  const days = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
  const minutes = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
  const seconds = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');

  // Exibe o resultado no elemento com a id="timer"
  document.getElementById("timer").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

  // Se a contagem terminar
  if (distance < 0) {
    clearInterval(x);
    document.getElementsById("timer").innerHTML = "LAUNCHED";
  }
}, 1000);

// Modal
const modal = document.getElementById("subscribeModal");

function openModal() {
  modal.style.display = "flex";
}
function closeModal() {
  modal.style.display = "none";
}
