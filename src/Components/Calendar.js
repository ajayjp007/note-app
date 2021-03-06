import "./Calendar.css"
import React from "react"


const Calendar = () => {

    const date = new Date()
    const day = date.getDate()
    const month = date.toLocaleString('en-us', { month: 'long' })   

    return (

        <div class="container">

            <div class="calendar-container">

                <header>

                    <div class="day">{day}</div>
                    <div class="month">{month}</div>

                </header>

                <table class="calendar">

                    <thead>

                        <tr>

                            <td>Mon</td>
                            <td>Tue</td>
                            <td>Wed</td>
                            <td>Thu</td>
                            <td>Fri</td>
                            <td>Sat</td>
                            <td>Sun</td>

                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td class="prev-month">29</td>
                            <td class="prev-month">30</td>
                            <td class="prev-month">31</td>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>

                        <tr>
                            <td>5</td>
                            <td>6</td>
                            <td id="7">7</td>
                            <td>8</td>
                            <td>9</td>
                            <td>10</td>
                            <td>11</td>
                        </tr>

                        <tr>
                            <td>12</td>
                            <td>13</td>
                            <td>14</td>
                            <td>15</td>
                            <td>16</td>
                            <td>17</td>
                            <td>18</td>
                        </tr>

                        <tr>
                            <td>19</td>
                            <td>20</td>
                            <td>21</td>
                            <td>22</td>
                            <td>23</td>
                            <td>24</td>
                            <td>25</td>
                        </tr>

                        <tr>
                            <td>26</td>
                            <td>27</td>
                            <td>28</td>
                            <td>29</td>
                            <td>30</td>
                            <td>31</td>
                            <td class="next-month">1</td>
                        </tr>

                    </tbody>

                </table>

                <div class="ring-left"></div>
                <div class="ring-right"></div>

            </div>

        </div>

    )
}

export default Calendar