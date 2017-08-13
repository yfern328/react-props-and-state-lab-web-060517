import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.getPets()
  }

  // componentWillMount(){
  //   this.getPets()
  // }

  getPets = () => {
    // console.log("Starting Fetch")

    let query = (this.state.filters.type === "all" ? "" : `?type=${this.state.filters.type}`)
    let url = `/api/pets${query}`

    // console.log("Initial Pets:", this.state.pets)

    fetch(url)
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        pets: data
      }, () => {
        // console.log("New Pets:", this.state.pets);
        // console.log("Completed Fetch");
      })
    })
  }

  changeFilterType = (newFilterTypeString) => {
    // console.log(`Type Was: ${this.state.filters.type}`)
    this.setState({
      filters: {
        ...this.state.filters,
          type: newFilterTypeString,
      },
    }, () => {
      // console.log(`Type Was Changed To: ${this.state.filters.type}`)
    });
  }

  addPetToAdopted = (id) => {
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters.type} onChangeType={this.changeFilterType} onFindPetsClick={this.getPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} adoptedPets={this.state.adoptedPets} onAdoptPet={this.addPetToAdopted}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
