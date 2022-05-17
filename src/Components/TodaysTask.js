import "./TodaysTask.css"
import React from "react"
import Delete from "./Delete"
import StarTask from "../Components/StarTask"


const TodayTask = (props) => {

    let arr = []

    for (let i = 0; i < props.val.length; i++) {
        arr[i] = (props.val[i].tasks)
    }


    return (
        <React.Fragment>
            {
                arr.map(
                    (element, index) => {
                        return (
                            <div className="text-line-container" key={index}>
                                <label className="label-task" >{index + 1}. {element} </label>
                                <StarTask />
                                <Delete />
                            </div>
                        )
                    }
                )
            }

        </React.Fragment>
    )
}

export default TodayTask