import "./BMIbody.css"
import { Link } from "react-router-dom"
import { useState, useRef } from "react"

const BMIbody = () => {

    const [result, setResult] = useState("Results will be shown here")
    const enteredHeight = useRef(null)
    const enteredWeight = useRef(null)

    const submitHandler = (event) => {
        event.preventDefault()

        const height = enteredHeight.current.value / 100
        const res = enteredWeight.current.value / (Math.pow(height, 2))
        const finalResult = res.toFixed(2)

        if (finalResult <= 18.4) {
            setResult(`Underweight ${finalResult} `)
        } else if (finalResult >= 18.5 && finalResult <= 24.9) {
            setResult(`Normal ${finalResult} `)
        } else if (finalResult >= 25 && finalResult <= 29.9) {
            setResult(`OverWeight ${finalResult} `)
        } else if (finalResult >= 30) {
            setResult(`Obese ${finalResult} `)
        }

        enteredHeight.current.value = null
        enteredWeight.current.value = null
    }


    return (
        <div className="bmi-body-container">
            <h2 className="heading-bmi">BMI CALCULATOR<img src="https://www.svgrepo.com/show/189261/measuring-tape.svg" className="bmi-icons" /></h2>
            <div className="form-result-container">

                <form className="bmi-form" onSubmit={submitHandler}>
                    <input className="input-bmi" placeholder="Height in cm" type="number" ref={enteredHeight}></input>
                    <input className="input-bmi" placeholder="Weight in kgs" type="number" ref={enteredWeight}></input>
                    <input className="input-bmi" placeholder="Gender" type="text"></input>
                    <input className="input-bmi" placeholder="Age" type="text"></input>
                    <button type="submit" className="submit-bmi">Submit</button>
                    <Link to="/user-notes" className="back-to-homepage"><p>Go back</p></Link>
                </form>
                <div className="results-container-bmi">
                    <p className="result-heading-bmi">Results</p>
                    <div className="right-results-bmi">
                        <img id="bmi-chart" src="https://www.1mg.com/articles/wp-content/uploads/2018/07/BMI.jpg" alt="BMI chart" />
                        <span className="result-span-bmi">
                            {result}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default BMIbody