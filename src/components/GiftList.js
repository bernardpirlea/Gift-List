import React from "react";
import GiftItem from "./GiftItem";
import PropTypes from "prop-types";

class GiftList extends React.Component {
  render() {
    return this.props.items.map(item => (
      <GiftItem
        key={item.id}
        item={item}
        markTaken={this.props.markTaken}
        deleteItem={this.props.deleteItem}
      />
    ));
  }
}

//PropTypes
GiftList.propTypes = {
  items: PropTypes.array.isRequired
};

export default GiftList;
