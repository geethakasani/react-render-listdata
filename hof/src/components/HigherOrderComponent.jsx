import React, { Component } from 'react';
import '../App.css';
//PROGRESSION 1
class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 },
      ],
    };
  }
//PROGRESSION 2
  renderItems = () => {
    const data = this.state.userData;
    const mapRows = data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
//PROGRESSION 3
  renderUserType = (userType) => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === userType);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
//PROGRESSION 4
  renderNamesStartingWithJ = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.name.startsWith('J'));
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
//Progression-5
  renderAgeFilter = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.age > 28 && item.age <= 50);
    const mapRows = filteredData.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
    return mapRows;
  };
//Progression-6
  renderTotalExperience = () => {
    const data = this.state.userData;
    const filteredData = data.filter((item) => item.user_type === 'Designer');
    const totalExperience = filteredData.reduce((acc, item) => acc + item.years, 0);
    return <p>Total experience of designers: {totalExperience} years</p>;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>Display designers</h1>
        <div className="display-box">
          <ul>{this.renderUserType('Designer')}</ul>
        </div>

        <h1>Display names starting with J</h1>
        <div className="display-box">
          <ul>{this.renderNamesStartingWithJ()}</ul>
        </div>

        <h1>Display age filter</h1>
        <div className="display-box">
          <ul>{this.renderAgeFilter()}</ul>
        </div>

        <h1>Total experience of designers</h1>
        <div className="display-box">{this.renderTotalExperience()}</div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;

