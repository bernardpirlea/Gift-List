import React, { Component } from "react";
import PropTypes from "prop-types";

export class GiftItem extends Component {
  getStyle = () => {
    if (this.props.item.taken) {
      return {
        textDecoration: "line-through"
      };
    } else {
      return {
        textDecoration: "none"
      };
    }
  };
  render() {
    return (
      <div style={this.getStyle()}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}

//PropTypes
GiftItem.propTypes = {
  item: PropTypes.object.isRequired
};

export default GiftItem;
