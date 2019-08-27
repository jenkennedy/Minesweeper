import React from 'react';
import Tile from './tile';

class Board extends React.Component {
  render() {
    return (
      <div className="board">
        {this.props.board.grid.map((row, idx1) => (
          <div className="row">
            {row.map((tile, idx2) => (
              <Tile tile={tile} updateGame={this.props.updateGame} key={idx1**5+idx2**3} />
          ))}
          </div>
        ))
        }
      </div>
    )
  }
}

export default Board;