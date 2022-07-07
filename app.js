const shuffle =
  'https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
const deck = 'https://www.deckofcardsapi.com/api/deck/'
const drawTwo = '/draw/?count=2'
const drawOne = '/draw/?count=1'
let deckId = 'placeholder'
let score = 0
let dScore = 0
let start = document.getElementById('restartBtn')
let hitMe = document.getElementById('hit')
let stand = document.getElementById('stay')
let playerHand = []
let dealerHand = []
let pCard = ''
let dCard = ''
let winner = document.getElementById('status')
const player = 'Player1'
const dealer = 'Dealer'
let players = document.getElementById('player')

start.addEventListener('click', async () => {
  const response = await axios.get(shuffle)
  deckId = response.data.deck_id
  const cards = await axios.get(deck + deckId + drawTwo)
  const dCards = await axios.get(deck + deckId + drawTwo)
  // pushing cards into hands
  playerHand.push(cards.data.cards[0])
  const pCard1 = document.createElement('img')
  pCard1.src = cards.data.cards[0].image
  players.appendChild(pCard1)
  console.log(pCard1)
  playerHand.push(cards.data.cards[1])
  const pCard2 = document.createElement('img')
  pCard2.src = cards.data.cards[1].image
  players.appendChild(pCard2)
  dealerHand.push(dCards.data.cards[0])
  dealerHand.push(dCards.data.cards[1])
  // giving player hands value
  let pCardOne = playerHand[0].value
  if (pCardOne == 'JACK' || pCardOne == 'QUEEN' || pCardOne == 'KING') {
    pCardUno = 10
  } else if (pCardOne == 'ACE') {
    pCardUno = 11
  } else {
    pCardUno = pCardOne
  }

  let pCardTwo = playerHand[1].value
  if (pCardTwo == 'JACK' || pCardTwo == 'QUEEN' || pCardTwo == 'KING') {
    pCardDos = 10
  } else if (pCardTwo == 'ACE') {
    pCardDos = 11
  } else {
    pCardDos = pCardTwo
  }

  let dCardOne = dealerHand[0].value
  if (dCardOne == 'JACK' || dCardOne == 'QUEEN' || dCardOne == 'KING') {
    dCardUno = 10
  } else if (dCardOne == 'ACE') {
    dCardUno = 11
  } else {
    dCardUno = dCardOne
  }

  let dCardTwo = dealerHand[1].value
  if (dCardTwo == 'JACK' || dCardTwo == 'QUEEN' || dCardTwo == 'KING') {
    dCardDos = 10
  } else if (dCardTwo == 'ACE') {
    dCardDos = 11
  } else {
    dCardDos = dCardTwo
  }

  score = parseInt(pCardUno) + parseInt(pCardDos)
  dScore = parseInt(dCardUno) + parseInt(dCardDos)
  // console.log(pCardUno)
  // console.log(pCardDos)
  // console.log(score)
  // console.log(playerHand)
})

hitMe.addEventListener('click', async () => {
  const card = await axios.get(deck + deckId + drawOne)
  playerHand.push(card.data.cards[0])
  const pCardX = document.createElement('img')
  pCardX.src = card.data.cards[0].image
  players.appendChild(pCardX)
  pCard = playerHand[playerHand.length - 1].value
  if (pCard == 'JACK' || pCard == 'QUEEN' || pCard == 'KING') {
    pCardHit = 10
  } else if (pCard == 'ACE') {
    pCardHit = 11
  } else {
    pCardHit = pCard
  }
  score = parseInt(score) + parseInt(pCardHit)
  {
    if (score > 21) {
    }
  }
  console.log(score)
  console.log(pCard)
  console.log(playerHand)
})

stand.addEventListener('click', async () => {
  if (dScore > 17) {
    dScore = dScore
  } else {
    const card = await axios.get(deck + deckId + drawOne)
    dealerHand.push(card.data.cards[0])
    console.log(dealerHand)
    const dCard1 = document.createElement('img')
    dCard1.src = dealerHand[0].image
    players.appendChild(dCard1)
    const dCard2 = document.createElement('img')
    dCard2.src = dealerHand[1].image
    players.appendChild(dCard2)
    dCard = dealerHand[0].value
    if (dCard == 'JACK' || dCard == 'QUEEN' || dCard == 'KING') {
      dCardHit = 10
    } else if (dCard == 'ACE') {
      dCardHit = 11
    } else {
      dCardHit = dCard
    }
    dScore = parseInt(dScore) + parseInt(dCardHit)
  }
  if (dScore > 17) {
    dScore = dScore
  } else {
    const card = await axios.get(deck + deckId + drawOne)
    dealerHand.push(card.data.cards[0])
    console.log(dealerHand)
    const dCard1 = document.createElement('img')
    dCard1.src = dealerHand[2].image
    players.appendChild(dCard1)

    dCard = dealerHand[0].value
    if (dCard == 'JACK' || dCard == 'QUEEN' || dCard == 'KING') {
      dCardHit = 10
    } else if (dCard == 'ACE') {
      dCardHit = 11
    } else {
      dCardHit = dCard
    }
    dScore = parseInt(dScore) + parseInt(dCardHit)
    if (dScore >= score) {
      console.log('you lose')
    } else {
      console.log('you win')
    }
  }
  console.log(dScore, dealerHand)
  console.log(score)
})
