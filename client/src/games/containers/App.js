"use strict";

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Form from '../components/Form'
import GameList from '../components/GameList'
import { requestPostGame } from '../actions'

class App  extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(game) {
    const { dispatch } = this.props;
    dispatch(requestPostGame(game));
  }

  render() {
    const { games } = this.props;

    return(
      <div>
        <Form onSubmit={this.handleSubmit}/>
        <GameList games={games} />
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const games = state.fetchGames.games || []
  return {
    games
  }
}

export default connect(mapStateToProps)(App)