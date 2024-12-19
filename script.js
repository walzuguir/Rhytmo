document.getElementById('calculatePace').addEventListener('click', function () {
    // Pega os valores dos inputs de tempo
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;
    
    // Pega os valores dos inputs de pace
    const paceMinutes = parseInt(document.getElementById('paceMinutes').value) || 0;
    const paceSeconds = parseInt(document.getElementById('paceSeconds').value) || 0;
    
    // Pega o valor da distância
    const distance = parseFloat(document.getElementById('distance').value) || 0;
  
    // Converte o tempo total para segundos
    const totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;
  
    // Calcula o pace em segundos por km
    const paceInSeconds = (paceMinutes * 60) + paceSeconds;
  
    // Calcula o tempo total para a distância fornecida
    const totalTimeForDistanceInSeconds = paceInSeconds * distance;
  
    // Converte o tempo total em horas, minutos e segundos
    const totalHours = Math.floor(totalTimeForDistanceInSeconds / 3600);
    const totalMinutes = Math.floor((totalTimeForDistanceInSeconds % 3600) / 60);
    const totalSeconds = totalTimeForDistanceInSeconds % 60;
  
    // Exibe o resultado
    const result = document.getElementById('result');
    result.innerHTML = `O tempo total é: ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
  
    // Formatação para exibição
    const formattedTime = `${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
    document.getElementById('time').value = formattedTime;
  });
  
  document.getElementById('calculateTime').addEventListener('click', function () {
    // Pega os valores dos inputs de pace e distância
    const paceMinutes = parseInt(document.getElementById('paceMinutes').value) || 0;
    const paceSeconds = parseInt(document.getElementById('paceSeconds').value) || 0;
    const distance = parseFloat(document.getElementById('distance').value) || 0;
  
    // Calcula o pace em segundos
    const paceInSeconds = (paceMinutes * 60) + paceSeconds;
  
    // Calcula o tempo total em segundos
    const totalTimeInSeconds = paceInSeconds * distance;
  
    // Converte o tempo total em horas, minutos e segundos
    const totalHours = Math.floor(totalTimeInSeconds / 3600);
    const totalMinutes = Math.floor((totalTimeInSeconds % 3600) / 60);
    const totalSeconds = totalTimeInSeconds % 60;
  
    // Exibe o resultado
    const result = document.getElementById('result');
    result.innerHTML = `O tempo total é: ${totalHours}h ${totalMinutes}m ${totalSeconds}s`;
  
    // Formatação para exibição
    const formattedTime = `${String(totalHours).padStart(2, '0')}:${String(totalMinutes).padStart(2, '0')}:${String(totalSeconds).padStart(2, '0')}`;
    document.getElementById('time').value = formattedTime;
  });
  