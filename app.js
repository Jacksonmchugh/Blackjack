const url = 'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6'
const deck = 'https://www.deckofcardsapi.com/api/deck/new/'
const draw = 'https://www.deckofcardsapi.com/api/deck/<<deckUrl>>/draw/?count=2'

$('#deal').click(function () {})
$('#hit').click(function () {})
$('#stay').click(function () {})

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
