import Feedbacklist from "./components/Feedbacklist";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import Header from "./components/Header";
import AboutPage from './components/AboutPage'
import { FeedbackProvider } from "./context/FeedbackContext";
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import AboutIcon from "./components/AboutIcon";


function App(){

    return (
        <FeedbackProvider>

            <Router>
            <Header text={"Feedback App"} />
            <div className="container">
                <Routes>
                    <Route  exact 
                            path='/'
                            element={
                                <>
                                    <FeedbackForm/>
                                    <FeedbackStats/>
                                    <Feedbacklist/>
                                </>
                            }
                            />
                    

                    <Route path='/about' element={<AboutPage/>}/>
                </Routes>
            </div>
            <AboutIcon/>
            </Router>
            
        </FeedbackProvider>
   )
}

export default App;