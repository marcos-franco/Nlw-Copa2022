function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />      
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard("24/11", "quinta / Grupo G", createGame("Suiça", "7:00", "Camarões") +
  createGame("Brasil", "16:00", "Servia")) +  
  createCard("28/11", "segunda / Grupo G", createGame("Camarões", "7:00", "Servia") +
  createGame("Brasil", "13:00", "Suiça")) +
  
  createCard("02/12", "sexta / Grupo G", createGame("Servia", "16:00", "Suiça") +
  createGame("Camarões", "13:00", "Brasil"))  
  
