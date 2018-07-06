import pokemon from '@/types/cards/pokemon';
import energy from '@/types/cards/energy';
import trainer from '@/types/cards/trainer';

export default {
  namespaced: true,
  state: {
    board: {
      your: {
        bench: [
          new pokemon.Pokemon({
            id: 1,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
          new pokemon.Pokemon({
            id: 2,
            name: 'Squirtle',
            initialHP: 40,
            type: pokemon.Type.WATER,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Waterfall',
                  description: 'throws water',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
        ],
        active: [
          new pokemon.Pokemon ({
            id: 6,
            name: 'Mr Mime',
            initialHP: 40,
            type: pokemon.Type.PSYCHIC,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Psychic attack',
                  description: 'paralyse opponent',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
        ],
        deck: [],
        discard: [
          new pokemon.Pokemon({
            id: 3,
            name: 'Pikachu',
            initialHP: 40,
            type: pokemon.Type.LIGHTNING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Thunderbolt',
                  description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
        ],
        prize: [
            new pokemon.Pokemon ({
              id: 4,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
            new pokemon.Pokemon({
              id: 5,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
            new pokemon.Pokemon ({
              id: 7,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
          ],
        hand: [
          new energy.Energy({
            id:3,
            name: 'lightning',
            type: energy.Type.LIGHTNING,
          }),
          new pokemon.Pokemon({
            id: 9,
            name: 'Machamp',
            initialHP: 40,
            type: pokemon.Type.FIGHTING,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Punch',
                  description: 'punch the opponent',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
          new pokemon.Pokemon ({
            id: 6,
            name: 'Mr Mime',
            initialHP: 40,
            type: pokemon.Type.PSYCHIC,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Psychic attack',
                  description: 'paralyse opponent',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
          new pokemon.Pokemon({
            id: 2,
            name: 'Squirtle',
            initialHP: 40,
            type: pokemon.Type.WATER,
            stage: pokemon.Stage.BASIC,
            evolvesFrom: null,
            status: pokemon.Status.NONE,
            abilities: [
              {
                ability: {
                  name: 'Waterfall',
                  description: 'throws water',
                  id: 20,
                },
                energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
              },
            ],
            retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
          }),
          new trainer.Trainer ({
            id: 102,
            name: 'Red Card',
            category: trainer.Category.ITEM,
            ability: {id: 389,
              name: 'Red Card',
              definition: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.'},
        }),
        new trainer.Trainer ({
          id: 102,
          name: 'Red Card',
          category: trainer.Category.ITEM,
          ability: {id: 389,
            name: 'Red Card',
            definition: 'Your opponent shuffles his or her hand into his or her deck and draws 4 cards.'},
      }),
        ],
      },
      opponent: {
          bench: [
            new pokemon.Pokemon({
              id: 8,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
            new pokemon.Pokemon({
              id: 9,
              name: 'Machamp',
              initialHP: 40,
              type: pokemon.Type.FIGHTING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Punch',
                    description: 'punch the opponent',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
          ],
          active: [
            new pokemon.Pokemon({
              id: 10,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
          ],
          deck: [],
          discard: [
            new pokemon.Pokemon({
              id: 61,
              name: 'Pikachu',
              initialHP: 40,
              type: pokemon.Type.LIGHTNING,
              stage: pokemon.Stage.BASIC,
              evolvesFrom: null,
              status: pokemon.Status.NONE,
              abilities: [
                {
                  ability: {
                    name: 'Thunderbolt',
                    description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                    id: 20,
                  },
                  energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                },
              ],
              retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
            }),
          ],
          prize: [
              new pokemon.Pokemon({
                id: 16,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    ability: {
                      name: 'Thunderbolt',
                      description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                      id: 20,
                    },
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  },
                ],
                retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
              }),
              new pokemon.Pokemon({
                id: 46,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    ability: {
                      name: 'Thunderbolt',
                      description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                      id: 20,
                    },
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  },
                ],
                retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
              }),
              new pokemon.Pokemon({
                id: 26,
                name: 'Pikachu',
                initialHP: 40,
                type: pokemon.Type.LIGHTNING,
                stage: pokemon.Stage.BASIC,
                evolvesFrom: null,
                status: pokemon.Status.NONE,
                abilities: [
                  {
                    ability: {
                      name: 'Thunderbolt',
                      description: 'Flip a coin. If heads, your opponent`s active pokemon is now paralysed.',
                      id: 20,
                    },
                    energyReq: [{type: pokemon.Type.LIGHTNING, amount: 1, id: 100}, {type: pokemon.Type.COLORLESS, amount: 1, id: 200}],
                  },
                ],
                retreatCost: {type: pokemon.Type.COLORLESS, amount: 2},
              }),
            ],
          hand: [],
      },
  },
},
  getters: {
    getBoard: (state: any) => state.board,
  },
  mutations: {
    setDeck(state: any, payload: any) {
      payload.deck.forEach((card: any) => {
        state.board[payload.player].deck.push(card);
      });
    },

    draw(state: any, player: string) {
      // remove top card from the deck (index[0])...
      const deckTopCard = state.board[player].deck.shift();

      // push deckTopCard to the end of the player's hand
      state.board[player].hand.push(deckTopCard);
    },

    discard(state: any, {player, card}: any) {
      // discard a selected card from it's location to the discard pile
    },
  },
  actions: {
    // set a user's hand. This can be used at the beginning of the game when a new game is started
    setHand(context: any, player: string) {
      // dont know how to access state here to "slice" deck, so using loop
      for (let x = 1; x <= 7; x++) {
        context.commit('draw', player);
      }
    },
  },
};
