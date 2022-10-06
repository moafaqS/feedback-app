import React from 'react'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackStats() {
    const {feedback} = useContext(FeedbackContext)
    let avarage = feedback.reduce((preValue , currentValue) => {
        return preValue + currentValue.rating
    } , 0) / feedback.length;

    avarage = avarage.toFixed(1);

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Averge Rating : {isNaN(avarage) ? 0 :  avarage} </h4>
        </div>
    )
}

export default FeedbackStats
