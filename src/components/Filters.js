import React from 'react';

class Filters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      type: props.filters.type
    }

  }

  convertEventToString = (event) => {
    // console.log(event.target.value)
    let newType = event.target.value
    {this.props.onChangeType(newType)}
  }

  render() {
    // console.log(this.props.filters)
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.convertEventToString} value={this.state.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.props.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    );
  }
}

export default Filters;
