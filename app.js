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
let scoreBoard = document.getElementById('status')
let playerHand = []
let dealerHand = []
let pCard = ''
let dCard = ''
let winner = document.getElementById('status')
const player = 'Player1'
const dealer = 'Dealer'
let players = document.getElementById('player')
let dCardHit = 0
let pCardHit = 0
let playerdiv = document.getElementById('playercards')
let dealerdiv = document.getElementById('dealercards')
console.log(playerdiv)
console.log(dealerdiv)

start.addEventListener('click', async () => {
  const response = await axios.get(shuffle)
  deckId = response.data.deck_id
  const cards = await axios.get(deck + deckId + drawTwo)
  const dCards = await axios.get(deck + deckId + drawTwo)
  // pushing cards into hands
  playerHand.push(cards.data.cards[0])
  const pCard1 = document.createElement('img')
  pCard1.classList.toggle('cards')
  pCard1.src = cards.data.cards[0].image
  playerdiv.appendChild(pCard1)
  console.log(pCard1)
  playerHand.push(cards.data.cards[1])
  const pCard2 = document.createElement('img')
  pCard2.classList.toggle('cards')
  pCard2.src = cards.data.cards[1].image
  playerdiv.appendChild(pCard2)
  dealerHand.push(dCards.data.cards[0])
  const dCard1 = document.createElement('img')
  dCard1.classList.toggle('cards')
  dCard1.src = dCards.data.cards[0].image
  dealerdiv.appendChild(dCard1)
  console.log(dCard1)
  dealerHand.push(dCards.data.cards[1])
  const dCard2 = document.createElement('img')
  dCard2.classList.toggle('cards')
  dCard1.src = dCards.data.cards[1].image
  dealerdiv.appendChild(dCard2)
  console.log(dCard2)
  // giving player hands value
  let pCardOne = playerHand[0].value
  if (pCardOne == 'JACK' || pCardOne == 'QUEEN' || pCardOne == 'KING') {
    pCardUno = 10
  } else if (pCardOne == 'ACE') {
    pCardUno = [1, 11]
  } else {
    pCardUno = pCardOne
  }

  let pCardTwo = playerHand[1].value
  if (pCardTwo == 'JACK' || pCardTwo == 'QUEEN' || pCardTwo == 'KING') {
    pCardDos = 10
  } else if (pCardTwo == 'ACE') {
    pCardDos = [1, 11]
  } else {
    pCardDos = pCardTwo
  }

  let dCardOne = dealerHand[0].value
  if (dCardOne == 'JACK' || dCardOne == 'QUEEN' || dCardOne == 'KING') {
    dCardUno = 10
  } else if (dCardOne == 'ACE') {
    dCardUno = [1, 11]
  } else {
    dCardUno = dCardOne
  }

  let dCardTwo = dealerHand[1].value
  if (dCardTwo == 'JACK' || dCardTwo == 'QUEEN' || dCardTwo == 'KING') {
    dCardDos = 10
  } else if (dCardTwo == 'ACE') {
    dCardDos = [1, 11]
  } else {
    dCardDos = dCardTwo
  }

  score = parseInt(pCardUno) + parseInt(pCardDos)
  if (score == 21) {
    alert('BlackJack! You win!')
  }

  dScore = parseInt(dCardUno) + parseInt(dCardDos)
  console.log(dScore)
  // console.log(pCardUno)

  // console.log(pCardDos)
  // console.log(score)
  // console.log(playerHand)
})

hitMe.addEventListener('click', async () => {
  const card = await axios.get(deck + deckId + drawOne)
  playerHand.push(card.data.cards[0])
  const pCardX = document.createElement('img')
  pCardX.classList.toggle('cards')
  pCardX.src = card.data.cards[0].image
  playerdiv.appendChild(pCardX)
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
      alert('You bust! Dealer wins')
    }
    if (score == 21) {
      alert('BlackJack! You win!')
    }
  }

  console.log(pCard)
  console.log(score)

  console.log(playerHand)
})

stand.addEventListener('click', async () => {
  if (dScore > 17) {
    dScore = dScore
    const dCard1 = document.createElement('img')
    dCard1.classList.toggle('dealercards')
    dCard1.src = dealerHand[0].image
    dealerdiv.appendChild(dCard1)
    const dCard2 = document.createElement('img')
    dCard2.classList.toggle('dealercards')
    dCard2.src = dealerHand[1].image
    dealerdiv.appendChild(dCard2)
    if (dScore > 21) {
      alert('Dealer busts! You win!')
    } else if (score > dScore) {
      alert('You win!')
    } else {
      alert('Dealer wins! You lose!')
    }
  } else {
    const card = await axios.get(deck + deckId + drawOne)
    console.log(dealerHand)
    dealerHand.push(card.data.cards[0])
    dCard = dealerHand[2].value
    console.log(dCard)
    if (dCard == 'JACK' || dCard == 'QUEEN' || dCard == 'KING') {
      dCardHit = 10
    } else if (dCard == 'ACE') {
      dCardHit = 11
    } else {
      dCardHit = dCard
    }
    console.log(dCardHit)
    dScore = parseInt(dScore) + parseInt(dCardHit)
    dealerHand.forEach((element, i) => {
      const dCard3 = document.createElement('img')
      dCard3.classList.toggle('dealercards')
      dCard3.src = dealerHand[i].image
      dealerdiv.appendChild(dCard3)
    })
    if (dScore > 21) {
      alert('Dealer busts! You win!')
    } else if (score > dScore) {
      alert('You win!')
    } else {
      alert('Dealer wins! You lose!')
    }
  }
  // {
  //   // const card = await axios.get(deck + deckId + drawOne)
  //   // dealerHand.push(card.data.cards[0])
  //   // dealerHand.forEach((element, i) => {
  //   //   const dCard4 = document.createElement('img')
  //   //   dCard4.classList.toggle('dealercards')
  //   //   dCard4.src = dealerHand[i].image
  //   //   dealerdiv.appendChild(dCard4)
  //   })
  // }
  console.log(dealerHand)

  console.log(dScore, 'before')

  if (dScore >= score) {
    stand.style.pointerEvents = 'none'
    hit.style.pointerEvents = 'none'
    start.style.pointerEvents = 'none'
    console.log('you lose')
  } else {
    console.log('you win')
    stand.style.pointerEvents = 'none'
    hit.style.pointerEvents = 'none'
    start.style.pointerEvents = 'none'
  }
  // }
  console.log(dScore, dealerHand)
  console.log(score)
})
// function endGame{
//   if (score > 21)
// }
