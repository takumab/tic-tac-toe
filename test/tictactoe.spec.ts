class Game {
  private currentPlayer = "X";
  private squares: string[] = [];
  private arrayOfWinningLines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
  ];

  getCurrentPlayer() {
    return this.currentPlayer;
  }

  play(square: number) {
    this.squares[square] = this.currentPlayer;
    this.switchPlayer();
  }

  getWinner() {
    for (
      let winningLineIndex = 0;
      winningLineIndex < this.arrayOfWinningLines.length;
      winningLineIndex++
    ) {
      const winningLine = this.arrayOfWinningLines[winningLineIndex];
      if (
        this.squares[winningLine[0]] === this.squares[winningLine[1]] &&
        this.squares[winningLine[1]] === this.squares[winningLine[2]]
      ) {
        return this.squares[winningLine[0]];
      }
    }
  }

  private switchPlayer() {
    if (this.currentPlayer == "X") {
      this.currentPlayer = "O";
    } else {
      this.currentPlayer = "X";
    }
  }
}
const playGame = (game: Game, plays: number, squares: number[]) => {
  for (let i = 0; i < plays; i++) {
    game.play(squares[i]);
  }
};

describe("Tic Tac Toe Should", () => {
  let game: Game;
  beforeEach(() => {
    game = new Game();
  });
  test("make 'X' the first player", () => {
    const result = game.getCurrentPlayer();

    expect(result).toBe("X");
  });

  test("make 'O' the second player", () => {
    playGame(game, 1, [1]);

    const result = game.getCurrentPlayer();

    expect(result).toBe("O");
  });

  test("make X winner with 3 marks in first horizontal row", () => {
    playGame(game, 5, [0, 3, 1, 5, 2]);

    const winner = game.getWinner();

    expect(winner).toBe("X");
  });

  test("make O winner with 3 marks in first horizontal row", () => {
    playGame(game, 6, [7, 0, 5, 1, 6, 2]);

    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in second horizontal row", () => {
    playGame(game, 5, [3, 1, 4, 2, 5]);

    const winner = game.getWinner();

    expect(winner).toBe("X");
  });

  test("make O winner with 3 marks in second horizontal row", () => {
    playGame(game, 6, [0, 3, 6, 4, 8, 5]);

    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in third horizontal row", () => {
    playGame(game, 5, [6, 1, 7, 4, 8]);

    const winner = game.getWinner();

    expect(winner).toBe("X");
  });

  test("make O winner with 3 marks in third horizontal row", () => {
    playGame(game, 6, [0, 6, 2, 7, 4, 8]);

    const winner = game.getWinner();

    expect(winner).toBe("O");
  });

  test("make X winner with 3 marks in first vertical column", () => {
    playGame(game, 5, [0, 1, 3, 4, 6]);

    const winner = game.getWinner();

    expect(winner).toBe("X");
  });
});
