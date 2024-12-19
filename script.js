document.getElementById('calculatePace').addEventListener('click', function () {
  // Pega os valores dos inputs de tempo
  const hours = parseInt(document.getElementById('hours').value) || 0;
  const minutes = parseInt(document.getElementById('minutes').value) || 0;
  const seconds = parseInt(document.getElementById('seconds').value) || 0;

  // Pega o valor da distância
  const distance = parseFloat(document.getElementById('distance').value) || 0;

  if (distance <= 0) {
      alert('Por favor, insira uma distância válida maior que zero.');
      return;
  }

  // Converte o tempo total para segundos
  const totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

  // Calcula o pace em segundos por km
  const paceInSeconds = totalTimeInSeconds / distance;

  // Converte o pace em minutos e segundos
  const paceMinutes = Math.floor(paceInSeconds / 60);
  const paceSeconds = Math.round(paceInSeconds % 60);

  // Exibe o resultado
  const result = document.getElementById('result');
  result.innerHTML = `O pace é: ${paceMinutes}min ${paceSeconds}seg por km`;

  // Atualiza os campos de input do pace
  document.getElementById('paceMinutes').value = paceMinutes;
  document.getElementById('paceSeconds').value = paceSeconds;
});

document.getElementById('calculateTime').addEventListener('click', function () {
  // Pega os valores dos inputs de pace e distância
  const paceMinutes = parseInt(document.getElementById('paceMinutes').value) || 0;
  const paceSeconds = parseInt(document.getElementById('paceSeconds').value) || 0;
  const distance = parseFloat(document.getElementById('distance').value) || 0;

  if (distance <= 0) {
      alert('Por favor, insira uma distância válida maior que zero.');
      return;
  }

  // Calcula o pace em segundos
  const paceInSeconds = (paceMinutes * 60) + paceSeconds;

  // Calcula o tempo total em segundos
  const totalTimeInSeconds = paceInSeconds * distance;

  // Converte o tempo total em horas, minutos e segundos
  const totalHours = Math.floor(totalTimeInSeconds / 3600);
  const totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
  const totalSeconds = Math.round(totalTimeInSeconds % 60);

  // Exibe o resultado
  const result = document.getElementById('result');
  result.innerHTML = `O tempo total é: ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;

  // Formatação para exibição
  const formattedTime = `${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
  document.getElementById('time').value = formattedTime;
});
