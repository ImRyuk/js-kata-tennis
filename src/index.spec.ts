import {Game} from "./index"

/*describe("Test of displayScore()", function() {
  it("Should render 15", function() {
    expect(scoreToDisplay()).toEqual("love");
  });
});

describe("Test of displayScore()", function() {
  it("Should render 30", function() {
    expect(scoreToDisplay(1)).toEqual("15");
  });
});*/

describe("Test of game()", function(){
  it("Should render increase one players score", function() {
    const game = new Game()
    expect(game.scoreToDisplay()).toEqual("love-love");
  });
});

describe("Test of game()", function(){
  it("Should render increase one players score", function() {
    const game = new Game().score("Player1")
    expect(game.scoreToDisplay()).toEqual("15-love");
  });
});

describe("Test of game()", function(){
  it("Should render 0 point for Player1 and one point for Player2", function() {
    const game = new Game().score("Player2")
    expect(game.scoreToDisplay()).toEqual("love-15");
  });
});

describe("Test of game()", function(){
  it("Should render 1-1 ", function() {
    const game = new Game()
    .score("Player2")
    .score("Player1")
    expect(game.scoreToDisplay()).toEqual("15-15");
  });
});

describe("Test of game()", function(){
  it("Should render deuce", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    expect(game.scoreToDisplay()).toEqual("Deuce");
  });
});

describe("Test of game()", function(){
  it("Should render advantage for one player", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    expect(game.scoreToDisplay()).toEqual("Advantage for Player1");
  });
});

describe("Test of game()", function(){
  it("Should render game won for Player1", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    expect(game.scoreToDisplay()).toEqual("The winner is Player1");
  });
});

describe("Test of game()", function(){
  it("Should render deuce after one advantage for Player1", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    .score("Player1")
    .score("Player2")
    expect(game.scoreToDisplay()).toEqual("Deuce");
  });
});

describe("Test of game()", function(){
  it("Should render one win for Player2 after 4 points in a row", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player2")
    expect(game.scoreToDisplay()).toEqual("The winner is Player2");
  });
});

/*describe("Test of game()", function(){
  it("Should render an error if we score after winning", function() {
    const game = new Game()
    .score("Player2")
    .score("Player2")
    .score("Player2")
    .score("Player2")
    expect(game.score("Player2")).toThrow('Game ended');
  });
});*/
