import "./ListOfEvents.css"
import { useState, useEffect } from "react"
import LoadingSpinner from "./LoadingSpinner"


const ListOfEvents = (props) => {

    const title = props.eventName
    let middleWord = ""
    let url = ""

    if (title === "meetings") {
        url = "https://tasks-6757e-default-rtdb.firebaseio.com/ajay/meetings.json"
        middleWord = "at"
    } else if (title === "birthday") {
        url = "https://tasks-6757e-default-rtdb.firebaseio.com/ajay/birthday.json"
        middleWord = "on"
    } else if (title === "family event") {
        url = "https://tasks-6757e-default-rtdb.firebaseio.com/ajay/Family%20events.json"
        middleWord = "on"
    }

    const [loadEvents, setLoadEvents] = useState([])
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const dates = []
                for (const key in result) {
                    const day = {
                        id: key,
                        ...result[key]
                    };

                    dates.push(day);
                }
                setLoadEvents(dates)      

            })
            .catch(error => console.log('error', error))
            setIsLoading(false)
    }, [url])

    const [counter, setCounter] = useState(props.num)


    const counterHandler = () => {
        setCounter(counter - 1)
    }

    if (counter === 0) {
        return (
            <div></div>
        )
    }

    return (
        <div className="list-container">
            {loading && <LoadingSpinner />}
            {
                loadEvents.map(
                    (element, index) => {
                        return (
                            <div className="list-line-container">
                                <p className="list-line"><span className="number-list">{index + 1 + '. '}</span> {element.name} {middleWord} {element.date} <img onClick={counterHandler} src="https://www.svgrepo.com/show/185548/file-delete.svg" className="delete-event" /></p>
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

export default ListOfEvents