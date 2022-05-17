import "./StarTask.css"
import { useState } from "react"
import React from "react"
const StarTask = (props) => {

    const [starTask, setStarTask] = useState(false)
    const [incomplete, setIncomplete] = useState(false)

    const favSelectorHandler = () => {
        setStarTask(!starTask)
    }

    const completedHandler = () => {
        setIncomplete(!incomplete)
    }

    return (
        <React.Fragment>
        <img src={!starTask ? "https://www.svgrepo.com/show/13693/star.svg" : "https://www.svgrepo.com/show/13674/star.svg"} className="fav-selector" onClick={favSelectorHandler} />
       <img src={!incomplete ? "https://www.svgrepo.com/show/207565/error.svg" : "https://www.svgrepo.com/show/35006/tick.svg"} className="fav-selector" onClick={completedHandler}/>
        </React.Fragment>
    )
}


export default StarTask