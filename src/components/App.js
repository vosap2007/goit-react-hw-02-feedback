import React, { Component } from 'react';
import Statistics from './Statistics';
//import user from '../user.json';

export default class App extends Component {
  render() {
  return (
    <>
      <Statistics
        good={0}
        neutral={0}
        bad={0}
      />
    </>
    );
  }
}