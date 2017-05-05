"use strict";

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import Form from '../components/Form.jsx'
import { requestPostGame } from '../actions'

class App  extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(game) {
    const { dispatch } = this.props
    dispatch(requestPostGame(game));
  }

  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return state
}

export default connect(mapStateToProps)(App)