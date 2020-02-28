import React from "react";
import "./App.css";
import GiftList from "./components/GiftList";

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
        taken: true
      },
      {
        id: 3,
        title: "Car",
        taken: false
      }
    ]
  };
  render() {
    return (
      <div className="App">
        <GiftList items={this.state.items} />
      </div>
    );
  }
}
export default App;
