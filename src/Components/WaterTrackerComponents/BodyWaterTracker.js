import "./BodyWaterTracker.css"
import { useState } from "react"
import { Link } from "react-router-dom"

const BodyWaterTracker = () => {

    const count = 16
    const [numOfGlass, setNumOfGlass] = useState(0)
    const [completed, setCompleted] = useState(false)


    const glassAddHandler = () => {
        setNumOfGlass(numOfGlass + 2)
        console.log(numOfGlass)
        if (numOfGlass === 14) {
            setCompleted(true)
        }
    }

    return (
        <div className="container-water-tracker">
            <p className="Water-tracker-heading">Water Tracker</p>
            {completed && <p className="good-job">Good  Job! You've had 8 glasses of water.</p>}
            <div className="point-container">
                {
                    [...Array(count)].map(
                        (element, index) => {
                            return (
                                <div id={index} className={index === numOfGlass ? "bottle-here" : "points"}></div>
                            )
                        }
                    )
                }
                <div className="last"></div>
            </div>
            <div className="button-water-tracker" onClick={glassAddHandler}><span className="water-tracker-glass">+ 1 Glass</span> <img src="https://www.svgrepo.com/show/21036/water.svg" className="icon-waterTracker" /></div>
            <Link to="/user-notes" className="back-btn"><img className="back-arrow-waterTracker" src="https://www.svgrepo.com/show/324205/back-arrow-navigation.svg" />Go back</Link>
        </div>
    )
}

export default BodyWaterTracker