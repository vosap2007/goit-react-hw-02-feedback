import React from "react";
//import TotalFeedback from "./Total";
import styles from '../css/Statistics.module.css';

const PositiveFeedbackPercentage = ({ onTotal }) => (

    <div>
        <p className={styles.state}>
            Positive feedback: {Math.round(onTotal.good * 100 / (onTotal.good + onTotal.neutral + onTotal.bad))}%
        </p>
    </div>
);

export default PositiveFeedbackPercentage;