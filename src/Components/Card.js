import "./Card.css"
import { useState, useRef } from "react"
import ListOfEvents from "./ListOfEvents"
import React from "react";



const Card = (props) => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    const enteredBirthDate = useRef(null)
    let url

    const title = props.name




    if (props.name === "important") {

        return (
            <div className="card-container">
                <p className="empty-text">The tasks you star will automatically be added to your important list.</p>
            </div>
        )
    }

    if (props.name === "Inbox") {

        return (
            <div className="card-container">
                <p className="empty-text">Feature will be added soon.</p>
            </div>
        )
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value)
    }

    const submitEventHandler = (event) => {
        event.preventDefault()

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            title: props.name,
            name: enteredName,
            date: enteredBirthDate.current.value,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));


        setEnteredName('')
        setEnteredDate('')
    }


    return (
        <React.Fragment>
            <div className="card-container">
                <form onSubmit={submitEventHandler}>
                    <input type="text" value={enteredName} onChange={nameChangeHandler} className="input-events" ></input>
                    {props.name === "meetings" ? <input onChange={dateChangeHandler} type="time" ref={enteredBirthDate} className="date-input" /> : <input type="date" ref={enteredBirthDate} className="date-input" />}
                    <button className="add-btn" type="submit"><img src="https://www.svgrepo.com/show/210535/plus.svg" className="add-events-icon" />Add</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default Card
