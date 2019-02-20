import React, { Component } from 'react';

import './App.css';

class App extends Component {

  getWeights() {
    return Array.from({length: 10}, () => (Math.random() * 2) - 1)
  }

  getInputs() {
    return Array.from({length: 10}, () => Math.random() * 9)
  }


  feedForward(inputs, weights) {
    const sum = (accumulator, currentValue, currentIndex) => accumulator + (currentValue * weights[currentIndex]);
    return inputs.reduce(sum, 0)
  }

  activationFunction(sum) {
    console.log(sum)
    if(sum >= 0) {
      return 1
    } else {
      return -1
    }
  }

  render() {
    return (
      <div className={'app'}>
        {
          this.activationFunction(
            this.feedForward(
              this.getInputs(), this.getWeights()
            )
          )
        }
      </div>
    )
  }
}

export default App;
