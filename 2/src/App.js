import React from 'react';
import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { arrayInput: '[0, 1, 2, 3, 4, 5]', valueInput: '5' }
    this.handleArrChange = this.handleArrChange.bind(this)
    this.handleValChange = this.handleValChange.bind(this)
  }

  handleArrChange(e) {
    this.setState({ arrayInput: e.target.value })
  }
  handleValChange(e) {
    this.setState({ valueInput: e.target.value })
  }

  render() {
    const handleSubmit = (e) => {
      console.log('submit button pushed')
    }

    const handleReset = (e) => {
      console.log('reset button pushed')
    }

    return (
      <div className="App">
        <form>
          <label htmlFor="arrayInput">Array to search in</label>
          <input type="text" id="arrayInput" value="[0, 1, 2, 3, 4, 5]" onChange={(e) => { this.handleArrChange(e) }}></input>
          <label htmlFor="valueInput">Value to search for</label>
          <input type="text" id="valueInput" value="5" onChange={(e) => { this.handleValChange(e) }}></input>
          <div className="buttonHolder">
            <button type="button" onClick={(e) => { handleSubmit(e) }}>Submit</button>
            <button type="button" onClick={(e) => { handleReset(e) }}>Reset</button>
          </div>
        </form>
      </div>
    )
  };
}

export default App;
