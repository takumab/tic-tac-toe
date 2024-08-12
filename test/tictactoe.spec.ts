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
    const arrayOfWinningLines: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
    ];

    for (
      let winningLineIndex = 0;
      winningLineIndex < arrayOfWinningLines.length;
      winningLineIndex++
    ) {
      const winningLine = arrayOfWinningLines[winningLineIndex];
      if (
        this.squares[winningLine[0]] === this.squares[winningLine[1]] &&
        this.squares[winningLine[1]] === this.squares[winningLine[2]]
      ) {
        return this.squares[winningLine[0]];
      }
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

  test("make O winner with 3 marks in second horizontal row", () => {
    const game = new Game();

    game.play(0);
    game.play(3);
    game.play(6);
    game.play(4);
    game.play(8);
    game.play(5);
    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in third horizontal row", () => {
    const game = new Game();

    game.play(6);
    game.play(1);
    game.play(7);
    game.play(4);
    game.play(8);
    let winner = game.getWinner();

    expect(winner).toBe("X");
  });

  test("make O winner with 3 marks in third horizontal row", () => {
    const game = new Game();

    game.play(0);
    game.play(6);
    game.play(2);
    game.play(7);
    game.play(4);
    game.play(8);
    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in first vertical column", () => {
    const game = new Game();

    game.play(0);
    game.play(1);
    game.play(3);
    game.play(4);
    game.play(6);
    let winner = game.getWinner();

    expect(winner).toBe("X");
  });
});
