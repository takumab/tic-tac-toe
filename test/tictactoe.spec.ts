class Game {
  private currentPlayer = "X";
  private squares: string[] = [];

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  play(square: number) {
    this.squares[square] = this.currentPlayer;
    if (this.currentPlayer == "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }

  getWinner() {
    if (
      this.squares[0] === this.squares[1] &&
      this.squares[1] === this.squares[2]
    ) {
      return this.squares[0];
    }

    if (
      this.squares[3] === this.squares[4] &&
      this.squares[4] === this.squares[5]
    ) {
      return this.squares[3];
    }
  }
}

describe("Tic Tac Toe Should", () => {
  test("make 'X' the first player", () => {
    let game = new Game();

    let result = game.getCurrentPlayer();

    expect(result).toBe("X");
  });

  test("make 'O' the second player", () => {
    let game = new Game();

    game.play(1);
    let result = game.getCurrentPlayer();

    expect(result).toBe("O");
  });

  test("make X winner with 3 marks in first horizontal row", () => {
    let game = new Game();

    game.play(0);
    game.play(3);
    game.play(1);
    game.play(5);
    game.play(2);
    const winner = game.getWinner();

    expect(winner).toBe("X");
  });

  test("make O winner with 3 marks in first horizontal row", () => {
    let game = new Game();

    game.play(7);
    game.play(0);
    game.play(5);
    game.play(1);
    game.play(6);
    game.play(2);
    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in second horizontal row", () => {
    let game = new Game();

    game.play(3);
    game.play(1);
    game.play(4);
    game.play(2);
    game.play(5);
    const winner = game.getWinner();

    expect(winner).toBe("X");
  });
});
