/* 
1. Create separate arrays with players for each team (variables players1 and players2).
2. The first player in each of these arrays is the goalkeeper and the rest are the field players. For REAL MADRID (team1) create one variable (goalkeeper) with the name of the goalkeeper and one array (fieldPlayers) with all the remaining 10 field players.
3. Create an array allPlayers containing all players from both teams (22 players).
4. REAL MADRID (team1) used 5 substitute players during the game. Create a new array (players1Total) containing all original players of team1 as well as ‘Marcelo’, 'Isco', 'Asensio', ‘Diaz' and 'Odriozola'.
5. Based on the game.odds object, create one variable for each odd (called team1, draw and team2).
6. A write function printGoals that takes an arbitrary number of player names (NOT an array) and prints each one to the console along with the total number of goals scored (the number of player names passed to the function).
7. The team with the lower odds will win more likely. Print to the console which team is more likely to win, WITHOUT using an if / else or ternary operator.
Test data for 6.: First use 'Mingueza', 'Messi', 'Modrich' and 'Nacho' players. Then call the function again with the players from game.scored.

*/

/* TASK2
Continue using the previously used game variable.
1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
2. Use a loop to calculate the average odd and print it to the console 
3. Print 3 odds to the console, but formatted, exactly like this:
Rate for REAL MADRID victory: 1.48 
Rate for draw: 2.53
Rate for BARCELONA victory: 4.25
Get team names directly from the game object, don't hardcode them 
4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
      {
        Kroos: 1,
        Benzema: 1,
        Mingueza: 1
}

*/

//1
const game = {
  team1: 'REAL MADRID',
  team2: 'BARCELONA',
  players: [
    [
      'Courtois',
      'Vazquez',
      'Militao',
      'Nacho',
      'Mendy',
      'Casemiro',
      'Valverde',
      'Modrich',
      'Kroos',
      'Vinicius',
      'Benzema',
    ],
    [
      'Stegen',
      'Mingueza',
      'Araujo',
      'Lenglet',
      'Dest',
      'Busquets',
      'Jong',
      'Alba',
      'Messi',
      'Pedri',
      'Dembele',
    ],
  ],
  score: '2:1',
  scored: ['Kroos', 'Benzema', 'Mingueza'],
  date: 'Apr 10th, 2021',
  odds: {
    team1: 1.48,
    draw: 2.53,
    team2: 4.25,
  },
 };

 const [players1, players2] = game.players;
 console.log(players1, players2);

 const [goalkeeper, ...fieldPlayers] = players1;
 console.log(goalkeeper, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola'];
console.log(players1Total);

const {
  odds: {team1, draw, team2},
} = game;
console.log(team1, draw, team2);

const printGoals = function (...gamePlayers)  {
  console.log(`${gamePlayers.length} goals scored`);
};


printGoals(...game.scored);

team1 < team2 && console.log(`${game.team1} is more likely to win`);

//2

for (const entry of game.scored.entries()) {
 console.log(`Goal ${entry[0] + 1} - ${entry[1]}`);
};

let oddSum = 0;
let odds = Object.values(game.odds);

for(const odd of odds) {
 oddSum += odd;
};

const avgOdd = oddSum / odds.length;
console.log(avgOdd);

for(const [teamName, odd] of Object.entries(game.odds)) {
 const switchTxt =
  teamName === 'draw' ? 'draw' : `${game[teamName]} victory`;
 console.log(`Rate for ${switchTxt}: ${odd}`);
};

const goalScores = {};

for(const player of game.scored) {
 goalScores[player] = 1;
};

console.log(goalScores);

