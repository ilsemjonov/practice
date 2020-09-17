// module.exports = 
class Deck {
    constructor() {
        this.deck = []
        this.dealt_cards = []
    }

    generate() {
        let card = (s, v) => {
            let name = v + ' of ' + s
            let suit = s
            let value = v

            return { name: name, suit: suit, value: value }
        }

        let values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        let suits = ['Clubs', 'Diamonds', 'Hearts', 'Spades']

        for (let s = 0; s < suits.length; s++) {
            for (let v = 0; v < values.length; v++) {
                this.deck.push(card(suits[s], values[v]))
            }
        }
    }

    print() {
        if (this.deck.length) {
            console.log(this.deck)
        } else {
            console.log('deck is empty')
        }
    }

    shuffle() {
        // let current = this.deck.length, temp, rand

        // while (current != 0) {
        //     rand = Math.floor(Math.random() * current)
        //     current--
        //     temp = this.deck[current]
        //     this.deck[current] = this.deck[rand]
        //     this.deck[rand] = temp
        // }

        for (let i = this.deck.length - 1; i >= 0; i--) {
            let temp = this.deck[i];
            let rand = Math.floor(Math.random() * this.deck.length);
            while (rand === i) {
                rand = Math.floor(Math.random() * this.deck.length)
            }
            this.deck[i] = this.deck[rand];
            this.deck[rand] = temp;
        }
    }

    deal() {
        if (this.deck.length) {
            let dealt_card = this.deck.shift()
            this.dealt_cards.push(dealt_card)
            return dealt_card
        } else {
            return null
        }
    }

    return() {
        this.deck.unshift(this.dealt_cards.pop())
    }

    clear() {
        this.deck = []
    }
}

let deck = new Deck()
deck.generate()
deck.shuffle()
deck.print()
// deck.deal()
// deck.deal()
// deck.deal()
// deck.return()
// deck.return()
// deck.return()
// deck.print()