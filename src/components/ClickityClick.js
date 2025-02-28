// Code ClickityClick Component Here

// src/components/ClickityClick.js
import React from 'react';

class ClickityClick extends React.Component {
  constructor() {
    super();

    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue'
    };
  }

  handleClick = () => {
      this.setState({
          hasBeenClicked: true,  
          currentTheme: 'blue',

      }, () => console.log(this.state.hasBeenClicked)) // prints true)
      console.log(this.state.hasBeenClicked) // prints false
    // Update our state here...
  };

  render() {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} been clicked!</p>
        <button onClick={this.handleClick}>Click me!</button>
      </div>
    );
  }
}

export default ClickityClick;