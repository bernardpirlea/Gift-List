import React, { Component } from "react";
import PropTypes from "prop-types";

export class GiftItem extends Component {
  getStyle = () => {
    return {
      backgroundColor: "lightblue",
      padding: "10px",
      borderBottom: "1px black dotted",
      textDecoration: this.props.item.taken ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.item;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="button"
            className="button"
            value="Take"
            style={buttonStyle}
            onClick={this.props.markTaken.bind(this, id)}
          />{" "}
          {title}
          <button
            style={buttonStyle}
            onClick={this.props.deleteItem.bind(this, id)}
          >
            Delete
          </button>
        </p>
      </div>
    );
  }
}

//PropTypes
GiftItem.propTypes = {
  item: PropTypes.object.isRequired
};

const buttonStyle = {
  backgroundColor: "#4CAF50",
  border: "none",
  color: "white",
  padding: "15px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  cursor: "pointer"
};

export default GiftItem;
