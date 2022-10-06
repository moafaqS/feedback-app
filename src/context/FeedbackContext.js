import { createContext ,useState } from "react";
import {v4 as uuidv4} from 'uuid'


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id:1,
            text: 'this item from ',
            rating: 1
        }
    ])

    const [feedbackEdit , setFeedbackEdit] = useState({
        item:{},
        edit:false
    })


    const deleteFeedback = (id) => {
        if(window.confirm('are you sure ?'))
        setFeedback(feedback.filter( (item) => item.id !== id))
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback,...feedback])
    }

    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }

    const updateFeedbackItem = (id,updItem) => {
        setFeedback(feedback.map((item) => item.id === id ? {
            ...item , ...updItem} : item ))
    }

    return <FeedbackContext.Provider
            value={{
                feedback,
                feedbackEdit,
                deleteFeedback,
                addFeedback,
                editFeedback,
                updateFeedbackItem,
            }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext