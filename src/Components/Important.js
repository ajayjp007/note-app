import Card from "./Card"
import { useState } from "react"
import React from "react"

const Important = () => {

    //Set up apicalls

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
                <p className="heading-left"><img src="https://www.svgrepo.com/show/107322/star.svg" className="side-icons"/> Important <span className="numofevents">{0}</span></p>
                {!showMore && <img className="down-arrow" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="show more" onClick={showMoreHandler} />}
                {showMore && <img className="reduce" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="show less" onClick={showLessHandler} />}
            </div>
            {showMore && <Card name={"important"} />}
        </React.Fragment>
    )
}

export default Important