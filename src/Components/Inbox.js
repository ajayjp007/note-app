import Card from "./Card"
import { useState } from "react"
import React from "react"

const Inbox = () => {

    const [count, setCount] = useState(0)
    const [showMore, setShowMore] = useState(false)

    const showMoreHandler = () => {
        setShowMore(true)
    }

    const showLessHandler = () => {
        setShowMore(false)
    }

    return (
        <React.Fragment>
            <div className="heading-left-container">
                <p className="heading-left"><img src="https://www.svgrepo.com/show/94805/inbox.svg" className="side-icons"/> Inbox <span className="numofevents">{count}</span></p>
                {!showMore && <img className="down-arrow" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="show more" onClick={showMoreHandler} />}
                {showMore && <img className="minus" src="https://www.svgrepo.com/show/8923/minus.svg" alt="show less" onClick={showLessHandler} />}
            </div>
            {showMore && <Card name={"Inbox"} numberOfTasks={count} />}
        </React.Fragment>
    )
}

export default Inbox