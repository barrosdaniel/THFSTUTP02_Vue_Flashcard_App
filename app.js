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
  },
  methods: {
    flipCard: function (card) {
      card.flipped = !card.flipped;
    }
  }
});

// 1 - Display card data
// 2 - Flip cards on click
// 3 - Get info for new cards from the user
// 4 - Add new card when the user hits enter or press the button
// 5 - Delete cards
// 6 - Animate card flip
// 7 - Display error message if form fields are left blank