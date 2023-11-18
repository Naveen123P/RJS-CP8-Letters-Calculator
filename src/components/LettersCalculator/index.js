// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {phrase: '', count: 0}

  onType = event => {
    this.setState({phrase: event.target.value, count: this.phrase.length()})
  }

  render() {
    const {count, phrase} = this.state
    return (
      <div className="bg-container">
        <div className="container-a">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p>Enter the phrase</p>
          <input
            type="search"
            placeholder="Enter the phrase"
            className="input"
            onChange={this.onType}
            value={phrase}
          />
          <div className="button">No.of letters: {count}</div>
        </div>
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="cal-img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
