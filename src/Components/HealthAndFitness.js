import React from "react"
import "./HealthAndFitness.css"
import { useState } from "react"
import { Link } from "react-router-dom"


const HealthAndFitness = () => {


    const [showOptions, setShowOptions] = useState(false)



    const moreOptionsHandler = () => {
        setShowOptions(!showOptions)
    }

    return (
        <React.Fragment>
            <div className="heading-left-container">
                <p className="heading-left"> <img id="Health-icon" src="https://www.svgrepo.com/show/252261/dumbbells-weight.svg" />Health and Fitness</p>
                <img src="https://www.svgrepo.com/show/80156/down-arrow.svg" onClick={moreOptionsHandler} className="down-arrow" />
            </div>
            {showOptions && <div className="health-options-container">
                <Link to="/Bmi-calculator" className="options-health"><img src="https://www.svgrepo.com/show/252295/weight-scale.svg" className="show-options-icon" />BMI Calculator</Link>
                <Link className="options-health"><img src="https://www.svgrepo.com/show/282216/fast-food-hot-dog.svg" className="show-options-icon" />Calorie Tracker</Link>
                <Link to="/Water-tracker" className="options-health"><img src="https://www.svgrepo.com/show/53032/water.svg" className="show-options-icon" />Water Tracker</Link>
                <Link className="options-health"><img src="https://www.svgrepo.com/show/189246/gym.svg" className="show-options-icon" />Gym Tracker</Link>
                <Link className="options-health"><img src="https://www.svgrepo.com/show/242734/comfortable-sleep.svg" className="show-options-icon" />Sleep Tracker</Link>
                <Link to="/headspace" className="options-health"><img src="https://www.svgrepo.com/show/89055/brain.svg" className="show-options-icon" />Headspace</Link>

            </div>
            }
        </React.Fragment>
    )
}

export default HealthAndFitness