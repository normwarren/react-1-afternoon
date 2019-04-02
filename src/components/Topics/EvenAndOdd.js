import React, { Component } from 'react'; 

class EvenAndOdd extends Component { 

    constructor() {
      super()
  
      this.state = {
        evenArray:  [],
        oddArray: [],
        userInput: ''
      }
    }
  
    handleClick(userInput){
      var arr = userInput.split(',');
        let evens = [];
        let odds = [];
        
      for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
          evens.push(parseInt(arr[i], 10) );
        }else{
          odds.push(parseInt(arr[i], 10) );
        }
      }
      this.setState({ evenArray: evens, oddArray: odds })
    }

    handleInput(value){
      //console.log(e.target.value)
      this.setState({ userInput: value })
    }

    render() {
      //console.log(this.state)
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange ={ (e) => this.handleInput(e.target.value) }></input>
        {/* note: this.handleClick(this.state.userInput) is a string, thus we must 'trick' React and wrap in an anonomous function */}
        <button className="confirmationButton" onClick={ () => { this.handleClick(this.state.userInput) }}>Split</button>
        <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
        <span className="resultsBox">Odds: { JSON.stringify(this.state.oddArray) } </span>
      </div>
    )
  }
}

export default EvenAndOdd;