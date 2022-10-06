import Feedbackitem from "./Feedbackitem"
import {motion , AnimatePresence} from 'framer-motion'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function Feedbacklist() {
    const {feedback} = useContext(FeedbackContext)
    if(!feedback || feedback.length === 0){
        return <p>No feedback</p>
    }

    return (
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item,index) => (
                <motion.div 
                key={item.id}
                initial={{opacity:0}}
                animate={{opacity:1}}
                exit={{opacity : 0}}>
                    <Feedbackitem 
                    key={item.id} 
                    item={item} />
                </motion.div>
                
            ))}
            </AnimatePresence>
           
        </div>
    ) 

    // return (
    //     <div className="feedback-list">
    //         {feedback.map((item,index) => (
    //             <Feedbackitem 
    //             key={item.id} 
    //             item={item} 
    //             handleDelete={handleDelete} />
    //         ))}
    //     </div>
    // ) 
}


export default Feedbacklist