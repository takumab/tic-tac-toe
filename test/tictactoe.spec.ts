class Game {
  private currentPlayer = "X";
  private squares: string[] = [];
  private arrayOfWinningLines: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
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

  test.each`
    plays | squares               | expectedWinner
    ${5}  | ${[0, 3, 1, 5, 2]}    | ${"X"}
    ${6}  | ${[7, 0, 5, 1, 6, 2]} | ${"O"}
    ${5}  | ${[3, 1, 4, 2, 5]}    | ${"X"}
    ${6}  | ${[0, 3, 6, 4, 8, 5]} | ${"O"}
    ${5}  | ${[6, 1, 7, 4, 8]}    | ${"X"}
    ${6}  | ${[0, 6, 2, 7, 4, 8]} | ${"O"}
    ${5}  | ${[0, 1, 3, 4, 6]}    | ${"X"}
    ${6}  | ${[1, 0, 4, 3, 8, 6]} | ${"O"}
    ${5}  | ${[1, 0, 4, 3, 7]}    | ${"X"}
    ${6}  | ${[0, 1, 3, 4, 5, 7]} | ${"O"}
    ${5}  | ${[2, 1, 5, 3, 8]}    | ${"X"}
    ${6}  | ${[0, 2, 3, 5, 1, 8]} | ${"O"}
    ${5}  | ${[0, 1, 4, 3, 8]}    | ${"X"}
    ${6}  | ${[1, 0, 3, 4, 2, 8]} | ${"O"}
    ${5}  | ${[2, 0, 4, 1, 6]}    | ${"X"}
  `(
    "make player $expectedWinner winner with 3 marks",
    ({ plays, squares, expectedWinner }) => {
      playGame(game, plays, squares);

      const winner = game.getWinner();

      expect(winner).toBe(expectedWinner);
    },
  );

  test("make 'X' the first player", () => {
    const result = game.getCurrentPlayer();

    expect(result).toBe("X");
  });

  test("make 'O' the second player", () => {
    playGame(game, 1, [1]);

    const result = game.getCurrentPlayer();

    expect(result).toBe("O");
  });
});
