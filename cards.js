const c = require('./const')

class Card {
  constructor(params) {
    this.value = params['value']
    this.suit = params['suit']
    this.id = params['id']
  }
}

class Deck {
  constructor() {
    this.cards = []
    this.init()
  }

  init() {
    for(let j = c.suits['SPADES']; j <= c.suits['DIAMONDS']; j++) {
      for(let i = c.faces['ACE']; i <= c.faces['KING']; i++) {
        this.cards.push(new Card({
          value: i,
          suit: j, 
          id: i + (j - 1) * 13
        }))
      }
    }
  }

  print() {
    for(let i in this.cards) {
      this.printCard(i)
    }
  }

  printCard(id) {
    console.log(
      c.colorStrings[c.color[this.cards[id].suit]],
      c.valueStrings[this.cards[id].value],
      'of',
      c.suitStrings[this.cards[id].suit]
    )
  }

  shuffle() {
    let temp, val
    for(let i = this.cards.length - 1; i > 0; i--) {
      val = Math.floor(Math.random() * i)
      temp = this.cards[val]
      this.cards[val] = this.cards[i]
      this.cards[i] = temp
    }
  }
}

var d = new Deck()
d.print()
d.shuffle()
d.print()