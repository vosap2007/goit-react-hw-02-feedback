import React from "react";
import styles from '../css/Statistics.module.css';

const TotalFeedback = ({ onTotal }) => (

    <div>
        <p className={styles.state} >
            Total:{onTotal.good + onTotal.neutral + onTotal.bad}
        </p>
    </div>
);

export default TotalFeedback;