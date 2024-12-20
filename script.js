document.addEventListener("DOMContentLoaded", () => {
  const totalTimeInput = document.getElementById("totalTime");

  // Formatação do campo de tempo
  totalTimeInput.addEventListener("input", () => {
    let value = totalTimeInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (value.length > 6) value = value.slice(0, 6); // Limita a 6 dígitos

    let formattedTime = "";
    if (value.length > 4) {
      formattedTime = `${value.slice(0, value.length - 4)}:${value.slice(
        -4,
        -2
      )}:${value.slice(-2)}`;
    } else if (value.length > 2) {
      formattedTime = `${value.slice(0, value.length - 2)}:${value.slice(-2)}`;
    } else {
      formattedTime = value;
    }

    totalTimeInput.value = formattedTime;
  });

  totalTimeInput.addEventListener("keydown", (event) => {
    // Permitir apenas números e teclas de controle
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
    if (!/\d/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  });

  // Cálculo de Pace
  document.getElementById("calculatePace").addEventListener("click", function () {
    const timeParts = totalTimeInput.value.split(":");

    // Verifica se algum valor de tempo está vazio
    if (timeParts.length < 3 || timeParts.some(part => part === "")) {
      alert("Por favor, insira um tempo válido no formato HH:MM:SS.");
      return;
    }

    const hours = parseInt(timeParts[0]) || 0;
    const minutes = parseInt(timeParts[1]) || 0;
    const seconds = parseInt(timeParts[2]) || 0;

    const distance = parseFloat(document.getElementById("distance").value) || 0;

    // Verificação de valores
    console.log("Total Time:", totalTimeInput.value);
    console.log("Distance:", distance);

    if (distance <= 0) {
      alert("Por favor, insira uma distância válida maior que zero.");
      return;
    }

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
    const paceInSeconds = totalTimeInSeconds / distance;
    const paceMinutes = Math.floor(paceInSeconds / 60);
    const paceSeconds = Math.round(paceInSeconds % 60);

    const result = document.getElementById("result");
    result.innerHTML = `O pace é: ${paceMinutes}:${String(paceSeconds).padStart(2, '0')} min/km`;

    document.getElementById("paceMinutes").value = paceMinutes;
    document.getElementById("paceSeconds").value = paceSeconds;
  });

  // Cálculo de Tempo Total
  document.getElementById("calculateTime").addEventListener("click", function () {
    const paceMinutes = parseInt(document.getElementById("paceMinutes").value) || 0;
    const paceSeconds = parseInt(document.getElementById("paceSeconds").value) || 0;
    const distance = parseFloat(document.getElementById("distance").value) || 0;

  // Validação do tempo
  if (paceMinutes === 0 && paceSeconds === 0) {
  alert("Por favor, insira um pace válido.");
  return;
    }

    // Verificar valores
    console.log("Pace Minutes:", paceMinutes);
    console.log("Pace Seconds:", paceSeconds);
    console.log("Distance:", distance);

    if (distance <= 0) {
      alert("Por favor, insira uma distância válida maior que zero.");
      return;
    }

    const paceInSeconds = paceMinutes * 60 + paceSeconds;
    const totalTimeInSeconds = paceInSeconds * distance;
    const totalHours = Math.floor(totalTimeInSeconds / 3600);
    const totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const totalSeconds = Math.round(totalTimeInSeconds % 60);

    const result = document.getElementById("result");
    // Exibindo o tempo em hh:mm:ss format
    result.innerHTML = `O tempo total é: ${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;


    const formattedTime = `${String(totalHours).padStart(2, "0")}:${String(
      totalMinutes
    ).padStart(2, "0")}:${String(totalSeconds).padStart(2, "0")}`;
    totalTimeInput.value = formattedTime;
  });
});
