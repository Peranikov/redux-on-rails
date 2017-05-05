"use strict";

import React from 'react'

class Form extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const game = {
      title: this.state.title
    };

    this.props.onSubmit(game);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Title
          <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}

export default Form