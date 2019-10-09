import React from 'react';
import './main.css';
import {linearSearchCount, binarySearchCount} from './helpers/helpers'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {arrayInput: null, valueInput: null, linearResp: null, binaryResp: null}
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
      const linResp = linearSearchCount(this.state.arrayInput, this.state.valueInput)
      const binResp = binarySearchCount(this.state.arrayInput, this.state.valueInput)
      console.log(linResp)
      console.log(binResp)
      this.setState({linearResp: linResp, binaryResp: binResp})
  }
  
    const handleReset = (e) => {
      console.log('reset button pushed')
    }

    return (
      <div className="App">
        <form>
          <label htmlFor="arrayInput">Array to search in</label>
          <input type="text" id="arrayInput"  onChange={(e) => { this.handleArrChange(e) }}></input>
          <label htmlFor="valueInput">Value to search for</label>
          <input type="text" id="valueInput" onChange={(e) => { this.handleValChange(e) }}></input>
          <div className="buttonHolder">
            <button type="button" onClick={(e) => { handleSubmit(e) }}>Submit</button>
            <button type="button" onClick={(e) => { handleReset(e) }}>Reset</button>
          </div>
        </form>
        <div className="resp">
          <p>{this.state.linearResp?this.state.linearResp:''}</p>
          <p>{this.state.binaryResp?this.state.binaryResp:''}</p>
        </div>
      </div>
    )
  };
}

export default App;
