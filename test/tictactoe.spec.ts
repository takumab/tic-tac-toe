class Game {
  getCurrentPlayer() {
    return "X";
  }
}

describe("Tic Tac Toe Should", () => {
  test("make 'X' the first player", () => {
    let game = new Game();

    let result = game.getCurrentPlayer();

    expect(result).toBe("X");
  });
});
