import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import CardList from '../components/CardList';
//import RelicPage from '../components/RelicPage';
import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { relicList } from '../RelicData';
import { compare } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    console.log(event.target.value)
  }

  // onRelicSelect = ({ selectedRelic }) => {
  //   console.log('this is:', this)
  //   if (selectedRelic === 'none') {
  //     console.log('No relic selected')
  //     this.setState({ relic: 'none' })
  //     return false;
  //   } else { 
  //     console.log(selectedRelic.name)
  //     this.setState({ relic: selectedRelic.name })
  //     return true; 
  //   }
  // }

  render() {
    const { searchfield } = this.state;

    // Sorts relic list alphabetically
    const sortedRelics = relicList.sort(compare)

    // Filters relic list by searchfield
    const filteredRelics = sortedRelics.filter(relic => {
      const nameMatch = relic.name.toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch0 = relic.drops[0].toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch1 = relic.drops[1].toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch2 = relic.drops[2].toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch3 = relic.drops[3].toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch4 = relic.drops[4].toLowerCase().includes(searchfield.toLowerCase());
      const itemMatch5 = relic.drops[5].toLowerCase().includes(searchfield.toLowerCase());
      return nameMatch || itemMatch0 || itemMatch1 || itemMatch2 || itemMatch3 || itemMatch4 || itemMatch5;
    });
    
    // Show cards with regard to searchfield
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.onSearchChange} />
        
        {/* <Scroll height={window.innerHeight}> */}
          <ErrorBoundry>
            <CardList relics={filteredRelics} />
          </ErrorBoundry>
        {/* </Scroll> */}
      </div>
    );
  }
}

export default App;
