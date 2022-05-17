import React from "react"
import Card from "./Card"
import { useState, useEffect } from "react"
import ListOfEvents from "./ListOfEvents"

const FamilyEvents = () => {


    const [showWorkMore, setShowWorkMore] = useState(false)
    const [addWorkMore, setAddWorkMore] = useState(false)


    const addWorkMoreHandler = () => {
        setAddWorkMore(!addWorkMore)
    }

    const showMoreEventsHandler = () => {
        setShowWorkMore(true)
    }

    const showLessEventsHandler = () => {
        setShowWorkMore(false)
    }


    const [loadedHelper, setLoadedHelper] = useState([])



    useEffect(() => {
        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/ajay/Family%20events.json")
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
            <div className="heading-left-container work">
                <p className="heading-left"><img src="https://www.svgrepo.com/show/227571/family.svg" className="side-icons" /> Family Events <span className="numofevents">{loadedHelper.length}</span></p>
                <img onClick={addWorkMoreHandler} className="add-item" src={!addWorkMore ? "https://www.svgrepo.com/show/68819/plus.svg" : "https://www.svgrepo.com/show/8923/minus.svg"} />
                {!showWorkMore && <img className="down-arrow" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="show more" onClick={showMoreEventsHandler} />}
                {showWorkMore && <img className="reduce" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="show less" onClick={showLessEventsHandler} />}
            </div>
            {showWorkMore && <ListOfEvents eventName="family event" />}
            {addWorkMore && <Card name={"family event"} />}
        </React.Fragment>
    )
}

export default FamilyEvents