import React, { Component } from 'react'; 

export default class FilterString extends Component {
  constructor() {
    super()
    this.state = {
      phrase: ['my', 'dog', 'is', 'a', 'nuisance', 'sometimes'],
      userInput: '',
      filteredArray: []
    }

  }

  handleChange(value){
    this.setState({userInput: value}) 
  }

  filterPhrase(userInput){
    let phrase = this.state.phrase;
    let filteredPhrase = [];
    for(let i = 0; i < phrase.length; i++){
      if(phrase[i].includes(userInput)){
        filteredPhrase.push(phrase[i])
      }
    }
    this.setState({ filteredPhrase: filteredPhrase });
  }

  render(){
    return(

      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className = "puzzleText">Phrase: { JSON.stringify(this.state.phrase, null, 10) }</span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)} ></input>
        <button className="confirmationButton" onClick={ () => this.filterPhrase(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">Filtered Phrase: { JSON.stringify(this.state.filteredPhrase, null, 10) }</span>
      </div>
    );
  }
}
