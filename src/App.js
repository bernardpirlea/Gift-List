import React from "react";
import "./App.css";
import GiftList from "./components/GiftList";
import Header from "./components/Layouts/Header";
import AddItem from "./components/AddItem";

class App extends React.Component {
  state = {
    items: [
      {
        id: 1,
        title: "Coffee Machine",
        taken: false
      },
      {
        id: 2,
        title: "Fridge",
        taken: false
      },
      {
        id: 3,
        title: "Car",
        taken: false
      }
    ]
  };

  markTaken = id => {
    this.setState({
      items: this.state.items.map(item => {
        if (item.id === id) {
          item.taken = !item.taken;
        }
        return item;
      })
    });
  };

  deleteItem = id => {
    this.setState({
      items: [...this.state.items.filter(item => item.id !== id)]
    });
  };
  addItem = title => {
    const newItem = {
      id: 4,
      title,
      taken: false
    };
    this.setState({ items: [...this.state.items, newItem] });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <AddItem addItem={this.addItem} />
        <GiftList
          items={this.state.items}
          markTaken={this.markTaken}
          deleteItem={this.deleteItem}
        />
      </div>
    );
  }
}
export default App;
