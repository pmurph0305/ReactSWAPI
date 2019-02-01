import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import SWCardList from './Components/SWCardList';
import SWButtonList from './Components/SWButtonList'
import SWStatChange from './Components/SWStatChange'

class App extends Component {
  

  constructor() {
    super();
    this.handleBtnClick = this.handleBtnClicked.bind(this);
    this.handleDisplayStatsClick = this.handleDisplayStatsClick.bind(this);
    this.state = {
      cards: {},
      statsDisplayed: 8
    }
  
  }

  //Handles increasing/decreasing number of stats shown on the cards.
  handleDisplayStatsClick = (event) => {
    const maxStats = 15;
    if (event === 'more') {
      this.setState({statsDisplayed: this.state.statsDisplayed+1})
    } else if (this.state.statsDisplayed>0) {
      this.setState({statsDisplayed: this.state.statsDisplayed-1})
    }
  }

  //handles fetching of data from swapi
  handleBtnClicked = (event) => {
    const searchType = event.toLowerCase();
    fetch('https://swapi.co/api/'+searchType+'/')
         .then(response => response.json())
         .then(result => {
           this.setState({cards:result.results})
           this.setState({type:searchType})
         })
  }

  render() {
    console.log("Displayed Stats:" + this.state.statsDisplayed);
    const buttons = ['People', 'Planets', 'Starships', 'Vehicles','Species']
    return (
      <div>
        <h1 className='tc'>SWAPI</h1>
        
        <div className='tc'>
          {/* SW Button list displays the buttons for fetchable data from swapi */}
          <SWButtonList
            className = 'ma2 pa2 bw1 b--yellow br2 yellow bg-black'
            buttons={buttons}
            onClick={this.handleBtnClick}
            />
            {/* These increase / decrease the number of stats shown on the cards */}
        </div>

        <div className='tc'>
          {this.state.cards.length > 0 ? 
            (
              <SWStatChange
              className = 'ma2 pa2 bw1 b--yellow br2 yellow bg-black'
              onClick={this.handleDisplayStatsClick}
              />
            ) : (<div></div>)
          }
            
        </div>
        <div className='tc'>
          {/* These display the data from the fetched swapi data. */}
          {this.state.cards.length > 0 ? (
                        <SWCardList
                        array={this.state.cards}
                        statsDisplayed={this.state.statsDisplayed}
                       />
          ) : (
            <div></div>
          )}
        </div>

      </div>
    );
  }
}

export default App;
