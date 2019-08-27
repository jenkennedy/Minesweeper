import React from 'react';
import * as Minesweeper from './minesweeper';
import Board from './board';

class Game extends React.Component {
  constructor(props) {
    super(props);
    const board = new Minesweeper.Board(9, 10);
    this.state = { board: board }
    this.updateGame = this.updateGame.bind(this);
  }

  updateGame(tile, flagged) {
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }

    this.setState({ board: this.state.board });
  }

  render() {
    if (this.state.board.won()) {
      alert("you win!")
    } else if (this.state.board.lost()) {
      alert("you lose!!!! 💩")
      this.setState({board: new Minesweeper.Board(15, 15)});
    }
    return (
      <div>
        <Board board={this.state.board} updateGame={this.updateGame} />
      </div>
    )
  }
}

export default Game;