const cards = [{
    front: 'The "First Computer Programmer"',
    back: 'Ada Lovelace',
    flipped: false,
  },
  {
    front: 'Invented the "Clarke Calculator"',
    back: 'Edith Clarke',
    flipped: false,

  },
  {
    front: 'Famous World War II Enigma code breaker',
    back: 'Alan Turing',
    flipped: false,
  },
  {
    front: 'Created satellite orbit analyzation software for NASA',
    back: 'Dr. Evelyn Boyd Granville',
    flipped: false,
  },
];

new Vue({
  el: '#flashcard-app',
  data: {
    cards: cards,
    newFront: '',
    newBack: ''
  },
  methods: {
    flipCard: function (card) {
      card.flipped = !card.flipped;
    },
    addCard: function () {
      const newCard = {
        front: this.newFront,
        back: this.newBack,
        flipped: false
      };
      this.cards.push(newCard);
    }
  }
});

// DONE 1 - Display card data
// DONE 2 - Flip cards on click
// DONE 3 - Get info for new cards from the user
// DONE 3.1 - Create properties for the front and back of the cards
// DONE 3.2 - Bind the new properties to the form inputs using v-model
// 4 - Add new card when the user hits enter or press the button
// 4.1 - Create new card object with new card information (from form)
// 4.2 - Add new card to cards array
// 5 - Delete cards
// 6 - Animate card flip
// 7 - Display error message if form fields are left blank