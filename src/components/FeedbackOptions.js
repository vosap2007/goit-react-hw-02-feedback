import React from "react";
import styles from '../css/Statistics.module.css';

const FeedbackOptions = ({onIncrement}) => (
    <div>
    <button className={styles.button}
        type="button"
        onClick={onIncrement} id="good"
        >Good</button>
        <button className={styles.button} type="button"
          onClick={onIncrement} id="neutral">Neutral</button>
          <button className={styles.button} type="button"
          onClick={onIncrement} id="bad">Bad</button>
    </div>
);

export default FeedbackOptions;