import React from "react"
import Card from "./Card"
import { useState, useEffect } from "react"
import ListOfEvents from "./ListOfEvents"

const Meetings = () => {


    const [showMore, setShowMore] = useState(false)
    const [addMore, setAddMore] = useState(false)

    const showMoreHandler = () => {
        setShowMore(true)
    }

    const showLessHandler = () => {
        setShowMore(false)
    }

    const addMoreHandler = () => {
        setAddMore(!addMore)
    }

    const [loadedHelper, setLoadedHelper] = useState([])



    useEffect(() => {
        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/ajay/meetings.json")
            .then(response => response.json())
            .then(result => {
                const helper = []
                for (const key in result) {
                    const day = {
                        id: key,
                        ...result[key]
                    };

                    helper.push(day);
                }
                setLoadedHelper(helper)

            })
            .catch(error => console.log('error', error))
    }, [])

    return (
        <React.Fragment>
            <div className="heading-left-container">
                <p className="heading-left"><img src="https://www.svgrepo.com/show/6386/businessmen-meeting.svg" className="side-icons" /> Meetings <span className="numofevents">{loadedHelper.length}</span></p>
                <img onClick={addMoreHandler} className="add-item" src={!addMore ? "https://www.svgrepo.com/show/68819/plus.svg" : "https://www.svgrepo.com/show/8923/minus.svg"} />
                {!showMore && <img className="down-arrow" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="show more" onClick={showMoreHandler} />}
                {showMore && <img className="reduce" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="show less" onClick={showLessHandler} />}
            </div>
            {showMore && <ListOfEvents eventName="meetings" />}
            {addMore && <Card name={"meetings"} />}
        </React.Fragment>
    )
}

export default Meetings