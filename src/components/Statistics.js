import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import FeedbackOptions from './FeedbackOptions'
import styles from '../css/Statistics.module.css';

export default class Statistics extends Component {

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleIncrement = e =>
    this.setState(state => ({
      [e.target.id]:
        Number(state[e.target.id]) + 1,
    }));

  render() { 
    return (
      <div className={styles.statistics}>

        <span className={styles.title}>Please leave feedback</span>

        <FeedbackOptions onIncrement={this.handleIncrement} />
        
        <div>
          <span className={styles.title}>Statistics</span>
          <p className={styles.state} >Good: {this.state.good}</p>
          <p className={styles.state}>Neutral: {this.state.neutral}</p>
        <p className={styles.state}>Bad: {this.state.bad}</p>
        
        </div>
      </div>);
  }
}
/*static defaultProps = {
  title:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};*/

/*static propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired
};*/

//export default Statistics;
