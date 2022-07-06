const suits = ['spades', 'diamonds', 'clubs', 'hearts']
const values = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K'
]
let currentPlayer = 0

function getDeck() {
  let deck = new Array()
  for (let i = 0; i, suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
      let weight = parseInt(values[i])
      if (values[i] == 'J' || values[i] == 'Q' || values[i] == 'K');
      weight = 10
      if (values[i] == 'A') weight = 11
      let card = { Value: values[x], Suit: suits[i] }
      deck.push(card)
    }
  }
  return deck
}

function shuffle() {
  for (var i = 0; i < 10; i++) {
    let location1 = Math.floor(Math.random() * deck.length)
    let location2 = Math.floor(Math.random() * deck.length)
    let hands = deck[location2]

    deck[location1] = deck[location2]
    deck[location2] = hands
  }
}
let players = new Array()
function createPlayers(num) {
  players = new Array()
  for (var i = 1; i <= num; i++) {
    let hand = new Array()
    let player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
    players.push(player)
  }
}
function createPlayersUI() {
  document.getElementById('players').innerHTML = ''
  for (var i = 0; i < players.length; i++) {
    let div_player = document.createElement('div')
    let div_playerid = document.createElement('div')
    let div_hand = document.createElement('div')
    let div_points = document.createElement('div')
    div_points.className = 'points'
    div_points.id = 'points_' + i
    div_player.id = 'player_' + i
    div_player.className = 'player'
    div_hand.id = 'hand_' + i

    div_playerid.innerHTML = players[i].ID
    div_player.appendChild(div_playerid)
    div_player.appendChild(div_hand)
    div_player.appendChild(div_points)
    document.getElementById('players').appendChild(div_player)
  }
}
function startBlackjack() {
  document.getElementById('Restartbtn').value = 'Deal'
  document.getElementById('status').style.display = 'none'

  currentPlayer = 0
  getDeck()
  shuffle()
  createPlayers(2)
  createPlayersUI()
  dealHands()
  document.getElementById('player_' + currentPlayer).classList.add('active')
}
function dealHands() {
  for (var i = 0; i < 2; i++) {
    for (var x = 0; x < players.length; x++) {
      let card = deck.pop()
      players[x].Hand.push(card)
      renderCard(card, x)
      updatePoints()
    }
  }
  updateDeck()
}
function renderCard(card, player) {
  var hand = document.getElementById('hand_' + player)
  hand.appendChild(getCardUI(card))
}
function getCardUI(card) {
  let el = document.createElement('div')
  let icon = ''
  if (card.Suit == 'Hearts') icon = '&hearts;'
  else if (card.Suit == 'Spades') icon = '&spades;'
  else if (card.Suit == 'Diamonds') icon = '&diamonds;'
  else if (card.Suit == 'Hearts') icon = '&hearts;'
  el.className = 'card'
  el.innerHTML = card.Suit + ' ' + card.Value
  return el
}
let currentPlayer = 0
function hitMe() {
  let card = deck.pop()
  players[currentPlayer].hand.push(card)
  renderCard(card, currentPlayer)
  updatePoints()
  check()
}
function check() {
  if (players[currentPlayer].Points > 21) {
    document.getElementById('status').innerHTML =
      'Player: ' + players[currentPlayer].Id + ' Lost'
  }
}
function stay() {
  if (currentPlayer != players.length - 1) {
    document.getAnimations('player_' + currentPlayer).classList.remove('active')
    currentPlayer += 1
    document.getElementById('player_' + currentPlayer).classList.add('active')
  } else {
    end()
  }
}
function end() {
  let winner = -1
  let score = 0
  for (var i = 0; i < players.length; i++) {
    if (players[i].Points > score && players[i] < 22) {
      winner = i
    }
    score = players[i].Points
  }
  document.getElementById('status').innerHTML = 'You won ' + players[winner].ID
}
