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
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// N0 4
const playersFinal = [...players1, "Thiago", "Coutinho", "perisic"];
// console.log(playersFinal);


//No 5
const { team1, x: draw, team2 } = game.odds;
// console.log(game.odds);
// console.log([team1, draw, team2]);

//No 6
const players = game.scored;

function printGoals(...playerNames) {
	// console.log(
	// 	`${playerNames} scored and ${playerNames.length} goals were scored`
	// );
}
printGoals(...players);

// No 7
team1 > team2 ? console.log("team 2 Wins") : console.log("team 1 Wins");
