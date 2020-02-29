import React, { Component } from "react";

export class AddItem extends Component {
  state = {
    title: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Add Item..."
          onChange={this.onChange}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddItem;
