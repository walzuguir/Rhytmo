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
    // Permitir apenas números e teclas de controle v1.2
    const allowedKeys = ["Backspace", "ArrowLeft", "ArrowRight", "Tab"];
    if (!/\d/.test(event.key) && !allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  });
});

// Função para calcular o Pace atualizada para v1.2
function calculatePace() {
  const totalTimeInput = document.getElementById("totalTime");
  const timeParts = totalTimeInput.value.split(":");

  // Verifica se algum valor de tempo está vazio atualizado v1.2
  if (timeParts.length < 2 || timeParts.some((part) => part === "")) {
    alert("Por favor, insira um tempo válido no formato H:MM:SS.");
    return;
  }

  // Função criada para lógica da distancia atualizado v1.2
  const hours = parseInt(timeParts[0]) || 0;
  const minutes = parseInt(timeParts[1]) || 0;
  const seconds = parseInt(timeParts[2]) || 0;

  const distance = parseFloat(document.getElementById("distance").value) || 0;

  // Verifica se algum valor do campo distancia está vazio atualizado v1.2
  if (distance <= 0) {
    alert("Por favor, insira uma distância válida maior que zero.");
    return;
  }

  // Verifica se algum valor de tempo está vazio atualizado v1.2
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;
  const paceInSeconds = totalTimeInSeconds / distance;
  const paceMinutes = Math.floor(paceInSeconds / 60);
  const paceSeconds = Math.round(paceInSeconds % 60);

  const result = document.getElementById("result");
  result.innerHTML = `O pace é: ${paceMinutes}:${String(paceSeconds).padStart(2, "0")} min/km`;

  document.getElementById("paceMinutes").value = paceMinutes;
  document.getElementById("paceSeconds").value = paceSeconds;
}

// Função para calcular o Tempo Total atualizado v1.2
function calculateTime() {
  const paceMinutes = parseInt(document.getElementById("paceMinutes").value) || 0;
  const paceSeconds = parseInt(document.getElementById("paceSeconds").value) || 0;
  const distance = parseFloat(document.getElementById("distance").value) || 0;

  if (paceMinutes === 0 && paceSeconds === 0) {
    alert("Por favor, insira um pace válido.");
    return;
  }

  if (distance <= 0) {
    alert("Por favor, insira uma distância válida maior que zero.");
    return;
  }

  // Para calcular o resultado v1.2
  const paceInSeconds = paceMinutes * 60 + paceSeconds;
  const totalTimeInSeconds = paceInSeconds * distance;
  const totalHours = Math.floor(totalTimeInSeconds / 3600);
  const totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const totalSeconds = Math.round(totalTimeInSeconds % 60);

  // InnerHTML do resultado v1.2
  const result = document.getElementById("result");
  result.innerHTML = `O tempo total é: ${String(totalHours).padStart(2, "0")}:${String(
    totalMinutes
  ).padStart(2, "0")}:${String(totalSeconds).padStart(2, "0")}`;

  const formattedTime = `${String(totalHours).padStart(2, "0")}:${String(
    totalMinutes
  ).padStart(2, "0")}:${String(totalSeconds).padStart(2, "0")}`;
  document.getElementById("totalTime").value = formattedTime;
}


//Funções de incremento e decremento para os inputs
function incrementValue(id) {
  const input = document.getElementById(id);
  let currentValue = parseInt(input.value) || 0;

  // Se for o campo de tempo, incrementa no formato de tempo
  if (id === 'totalTime') {
    let timeParts = input.value.split(":");
    let hours = parseInt(timeParts[0] || 0);
    let minutes = parseInt(timeParts[1] || 0);
    let seconds = parseInt(timeParts[2] || 0);

    // Incrementa em segundos ou minutos de acordo com a parte
    if (seconds < 59) {
      seconds++;
    } else if (minutes < 59) {
      minutes++;
      seconds = 0;
    } else {
      hours++;
      minutes = 0;
      seconds = 0;
    }

    input.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else if (id === 'distance') {
    const max = input.max ? parseInt(input.max) : Infinity;
    if (currentValue < max) {
      input.value = currentValue + 1;
    }
  } else {
    const max = input.max ? parseInt(input.max) : Infinity;
    if (currentValue < max) {
      input.value = currentValue + 1;
    }
  }
}

function decrementValue(id) {
  const input = document.getElementById(id);
  let currentValue = parseInt(input.value) || 0;

  // Se for o campo de tempo, decrementa no formato de tempo
  if (id === 'totalTime') {
    let timeParts = input.value.split(":");
    let hours = parseInt(timeParts[0] || 0);
    let minutes = parseInt(timeParts[1] || 0);
    let seconds = parseInt(timeParts[2] || 0);

    // Decrementa em segundos ou minutos de acordo com a parte
    if (seconds > 0) {
      seconds--;
    } else if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    }

    input.value = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  } else if (id === 'distance') {
    const min = input.min ? parseInt(input.min) : -Infinity;
    if (currentValue > min) {
      input.value = currentValue - 1;
    }
  } else {
    const min = input.min ? parseInt(input.min) : -Infinity;
    if (currentValue > min) {
      input.value = currentValue - 1;
    }
  }
}
