import { useState , useContext , useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RateingSelect from "./RateingSelect"
import FeedbackContext from "../context/FeedbackContext"



function FeedbackForm() {

    const [text,setText] = useState('')   
    const [rating,setRating] = useState(10)   
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')   
    const {addFeedback , feedbackEdit , updateFeedbackItem} = useContext(FeedbackContext)

    useEffect(() => {
        if(feedbackEdit.edit === true){
            setbtnDisabled(false);
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    } , [feedbackEdit])

    const handleTextChange = (e) => {
        if(text === ''){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text !== '' && text.trim().length <= 10){
            setMessage('Text must be at least 10 characters')
            setbtnDisabled(true)
        }else{
            setMessage(null)
            setbtnDisabled(false)
        }
        setText(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text.trim().length > 10){
            const newfeedback = {
                text,
                rating
            }

            if(feedbackEdit.edit === true)
            {
                updateFeedbackItem(feedbackEdit.item.id,newfeedback)
            }
            else
            {
                addFeedback(newfeedback)
            }
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you rate your service with us</h2>
                <RateingSelect select={(rate) => setRating(rate)}/>
                <div className="input-group">
                    <input  onChange={handleTextChange}  
                            type="text" 
                            placeholder="write a review"
                            value={text} 
                    />
                    <Button type="submit" isDisble={btnDisabled}>Send</Button>
                </div>

                {message && <div className="message">{message}</div>} 
            </form>
        </Card>
    )
}

export default FeedbackForm