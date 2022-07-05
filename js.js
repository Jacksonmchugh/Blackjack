var suits = ['spades', 'diamonds', 'clubs', 'hearts']
var values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
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
  for (var i = 0; i < 500; i++) {
    var location1 = Math.floor(Math.random() * deck.length)
    var location2 = Math.floor(Math.random() * deck.length)
    var hands = deck[location2]

    deck[location1] = deck[location2]
    deck[location2] = hands
  }
}
var players = new Array()
function createPlayers(num) {
  players = new Array()
  for (var i = 1; i <= num; i++) {
    var hand = new Array()
    var player = { Name: 'Player ' + i, ID: i, Points: 0, Hand: hand }
    players.push(player)
  }
}
function createPlayersUI() {
  document.getElementById('players').innerHTML = ''
  for (var i = 0; i < players.length; i++) {
    var div_player = document.createElement('div')
    var div_playerid = document.createElement('div')
    var div_hand = document.createElement('div')
    var div_points = document.createElement('div')
    div_points.className = 'points'
    div_points.id = 'points_' + i
    div_player.id = 'player_' + i
    div_player.className = 'player'
    div_hand.id = 'hand_' + i
  }
}
