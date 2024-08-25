export class Game {
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
    if (this.squares[square] && this.squares[square] !== this.currentPlayer) {
      throw new Error(
        `Can't play on an already played squared: ${this.currentPlayer}`,
      );
    }
    this.squares[square] = this.currentPlayer;
    this.switchPlayer();
  }

  getWinner() {
    if (this.isTieGame()) return "Tie game!";
    return this.checkForWinner();
  }

  private isTieGame() {
    const TIE_GAME = "XOXOXOXOX";
    return this.squares.join("").includes(TIE_GAME);
  }

  private checkForWinner() {
    for (const winningLine of this.arrayOfWinningLines) {
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
