"use strict";

import React from 'react'
import PropTypes from 'prop-types';

class GameList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const items = this.props.games.map((game) => <li key={game.id}>{game.title}</li>)

    return (
      <ul>{items}</ul>
    )
  }
}

GameList.propTypes = {
  games: PropTypes.array.isRequired
}

export default GameList