"use strict";

import React from 'react'
import request from 'request'

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

    const options = {
      url: "http://localhost:3000/games",
      headers: {
        "X-CSRF-Token": document.getElementsByName("csrf-token")[0].content
      },
      form: {
        game: {
          title: this.state.title
        }
      }
    }

    request.post(options, (err, res, body) => {
      if (err) {
        console.error(err);
      }
    });
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