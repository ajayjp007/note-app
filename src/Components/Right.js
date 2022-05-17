import "./Right.css"
import React from "react";
import { useState, useRef, useEffect } from "react"
import TodayTask from "./TodaysTask";
import Calendar from "./Calendar";
import Settings from "./Settings";
import LoadingSpinner from "./LoadingSpinner";

const Right = () => {

    //the filter icon is to put important first
    const [addNewTask, setAddNewTask] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [filter, setFilter] = useState(false)
    const [settings, setSettings] = useState(false)
    const [count, setCount] = useState(0)
    const inputEntered = useRef(null)
    const [loadedNotes, setLoadedNotes] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/ajay/tasks.json")
            .then(response => response.json())
            .then(result => {
                const notes = []
                for (const key in result) {
                    const note = {
                        id: key,
                        ...result[key]
                    };

                    notes.push(note);
                }
                setLoadedNotes(notes)
                setLoading(false)

            })
            .catch(error => console.log('error', error))
    }, [])

    const addNewTaskHandler = () => {
        setAddNewTask(!addNewTask)
    }


    const submitTaskHandler = () => {

        if (inputEntered.current.value.trim().length === 0) {
            return
        }

        setCount(count + 1)

        var raw = JSON.stringify({
            tasks: inputEntered.current.value + '.',
            status: "Incomplete",
            Important: false
        });

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
        };

        fetch("https://tasks-6757e-default-rtdb.firebaseio.com/ajay/tasks.json", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        inputEntered.current.value = ''
    }


    const submitButtonHandler = () => {
        submitTaskHandler()
    }


    const openCalendarHandler = () => {
        setShowCalendar(!showCalendar)
    }

    const filterHandler = () => {
        setFilter(!filter)
    }

    const settingsHandler = () => {
        setSettings(!settings)
    }




    return (
        <React.Fragment>
            <div className="right-container">
                <p className="today">{!settings && "Today"}</p>
                <div className="icon-right-container">
                    <img src={!filter ? "https://www.svgrepo.com/show/318457/filter.svg" : "https://www.svgrepo.com/show/318331/filter.svg"} className="user-icon-right" onClick={filterHandler} />
                    <img src={settings ? "https://www.svgrepo.com/show/22120/settings.svg" : "https://www.svgrepo.com/show/13646/settings.svg"} id="settings" alt="settings" onClick={settingsHandler} />
                </div>
            </div>
            {settings && <Settings />}
            {!settings && <div className="new-task-container">
                {count === 0 && <p id="empty-container-text">Let's begin.</p>}
                {loading && <LoadingSpinner />}
                {(
                    <div className="task-line">
                        <TodayTask val={loadedNotes} />
                    </div>
                )}

            </div>}
            {!settings && <div className="add-new-task">
                <img src={!addNewTask ? "https://www.svgrepo.com/show/13691/plus.svg" : "https://www.svgrepo.com/show/31465/cancel.svg"} className="add-icon-right" onClick={addNewTaskHandler} />
                {!addNewTask && <p className="add-text">Add Task...</p>}
                {addNewTask && <React.Fragment> <input className="input-newtask" ref={inputEntered} onSubmit={submitTaskHandler} placeholder="Do the laundary."></input><button className="add-task-btn" type="submit" onClick={submitButtonHandler} >Submit</button> </React.Fragment>}
            </div>}
            {!settings && <button className="Calendar-btn" onClick={openCalendarHandler}><img src="https://www.svgrepo.com/show/44384/calendar.svg" id="calendar-icon" />{showCalendar ? "Close Calendar" : "Open Calendar"}</button>}
            {showCalendar && <Calendar />}
        </React.Fragment>
    )
}

export default Right