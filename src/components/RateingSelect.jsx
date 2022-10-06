import { useState , useContext , useEffect} from "react"
import FeedbackContext from "../context/FeedbackContext";

function RateingSelect({select}) {
    const [selected,setSelected ] = useState(2)
    const {feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handlechange = (e) => {
        setSelected(+e.currentTarget.value);
        select(+e.currentTarget.value);
    }



    return (
        <ul className="rating">
            <li>
                <input
                    type='radio'
                    id='num1'
                    name="rating"
                    value='1'
                    onChange={handlechange}
                    checked={selected === 1}
                />
                <label htmlFor="num1">1</label>
            </li>

            <li>
                <input
                    type='radio'
                    id='num2'
                    name="rating"
                    value='2'
                    onChange={handlechange}
                    checked={selected === 2}
                />
                <label htmlFor="num2">2</label>
            </li>

            <li>
                <input
                    type='radio'
                    id='num3'
                    name="rating"
                    value='3'
                    onChange={handlechange}
                    checked={selected === 3}
                />
                <label htmlFor="num3">3</label>
            </li>

        </ul>
    )
}

export default RateingSelect