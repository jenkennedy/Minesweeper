import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const flagging = e.altKey ? true : false;
    this.props.updateGame(this.props.tile, flagging);
  }
  
  render() {
    const { tile } = this.props;
    let cName, text;
    if (tile.explored) {
      if (tile.bombed) {
        cName = "revealed-tile";
        text = "💣";
      } else if (tile.adjacentBombCount() > 0) {
        cName = "revealed-tile";
        text = tile.adjacentBombCount();
      } else {
        cName = "revealed-tile";
        text = "";
      }
    } else {
      if (tile.flagged) {
        cName = "tile";
        text = "⛳️";
      } else {
        cName = "tile";
        text = "";
      }
    }
    return (<div className={cName} onClick={this.handleClick}>{text}</div>)
  }
}

export default Tile;