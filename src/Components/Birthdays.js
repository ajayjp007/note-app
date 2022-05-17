import Card from "./Card"
import "./Birthday.css"
import ListOfEvents from "./ListOfEvents"
import { useState, useEffect } from "react"
import React from "react"
import LoadingSpinner from "./LoadingSpinner"

const Birthday = () => {
    const [showMore, setShowMore] = useState(false)
    const [addMore, setAddmore] = useState(false)


    const showMoreHandler = () => {
        setShowMore(true)
    }

    const addMoreHandler = () => {
        setAddmore(!addMore)
    }

    const showLessHandler = () => {
        setShowMore(false)
    }


    const [loadedHelper, setLoadedHelper] = useState([])





    useEffect(() => {
        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/ajay/birthday.json")
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
                <p className="heading-left"> <img id="birthday-icon" src="https://www.svgrepo.com/show/3681/birthday-cake.svg" />Birthdays <span className="numofevents">{loadedHelper.length}</span></p>
                <img onClick={addMoreHandler} className="add-item" src={!addMore ? "https://www.svgrepo.com/show/68819/plus.svg" : "https://www.svgrepo.com/show/8923/minus.svg"} />
                {!showMore && <img className="down-arrow" src="https://www.svgrepo.com/show/80156/down-arrow.svg" alt="show more" onClick={showMoreHandler} />}
                {showMore && <img className="reduce" src="https://www.svgrepo.com/show/93813/up-arrow.svg" alt="show less" onClick={showLessHandler} />}
            </div>
            {showMore && <ListOfEvents eventName="birthday" />}
            {addMore && <Card name={"birthday"} />}
        </React.Fragment>
    )
}

export default Birthday