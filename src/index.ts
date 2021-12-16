type Player = "Player1" | "Player2"

type Score = 0 | 1 | 2 | 3

type Points = Record<Player, Score>;

const initPoints: Points = {
  Player1: 0,
  Player2: 0
};

const displayPoints: Record<Score, string> = {
  0: "love",
  1: "15",
  2: "30",
  3: "40",
};

export const decidePlayerToScore = ():number => {
  return Math.floor(Math.random() * (2 - 1 + 1)) + 1
}

export const otherPlayer = (player: Player):Player => {
  if(player === "Player1")
    return "Player2"
  return "Player1"
}

/*export const scoreToDisplay = (pastScore: Score = 0) => {
  return displayPoints[pastScore]
}*/

interface GameInterface {
  score(player:Player):GameInterface,
  scoreToDisplay():string
}

export class GameWon implements GameInterface {
  constructor(private winner: Player) {}

  score(): GameInterface {
      throw ("Game ended");
  }

  scoreToDisplay(): string {
      return `The winner is ${this.winner}`
  }

}

export class Advantage implements GameInterface {
  constructor(private advantagedPlayer: Player) {}

  score(player: Player): GameInterface {
    return player === this.advantagedPlayer ? new GameWon(player) : new Deuce();
  }

  scoreToDisplay(): string {
      return `Advantage for ${this.advantagedPlayer}`
  }
}

export class Deuce implements GameInterface {
  constructor() {}

  score(player: Player): GameInterface {
    return new Advantage(player);
  }

  scoreToDisplay(): string {
      return `Deuce`
  }
}

export class Game implements GameInterface {
  constructor(private points: Points = initPoints) {}

  score = (player:Player) => {

    const other = otherPlayer(player)

    //If player wins
    if(this.points[player] === 3 )
      return new GameWon(player)
    
    if(this.points[player] == 2 && this.points[other] === 3)
      return new Deuce()

    return new Game({
      ...this.points,
      [player]: this.points[player] + 1
    });

  }

  scoreToDisplay = () => {
    return `${displayPoints[this.points.Player1]}-${displayPoints[this.points.Player2]}`
  }

}


//console.log(game.scoreToDisplay())
let game = new Game()
//console.log(game = new Game().score('Player1').score('Player2').scoreToDisplay())

console.log(
  game
  .score('Player1')
  .score('Player2')
  .score('Player2')
  .score('Player2')
  .score('Player2')
  .score('Player2')
  .scoreToDisplay()
)
