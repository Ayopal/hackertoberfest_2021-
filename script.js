// BETTING SITE CHALLENGE

'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davis',
      'Kimmich',
      'Goretzka',
      'Comman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', ' Gnarby', ' Lewandowski', ' Hummels'],
  date: 'Nov 9th, 2023',
  odds: {
    team1: 7.33,
    x: 3.35,
    team2: 6.5,
  },
};

//Things To Do

//Creating Player Array for each team
//  No 1
const [players1, players2] = game.players;
// console.log([players1, players2]);

// N0 2
const [gk, ...fieldPlayers] = players1;
// console.log([gk, fieldPlayers]);

// No 3

// N0 4 Create function for goals scored

//No 5

//No 6

// No 7
