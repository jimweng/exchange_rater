import './currentDate.css';
import React, { useState, useEffect } from 'react';

const CurrentDate = () => {

    const [time, setTime] = useState(`${new Date().getMonth() + 1}/ ${new Date().getDate()}`)
    const [currentDate, setCurrentDate] = useState(`${new Date().getHours()}: ${new Date().getMinutes}: ${new Date().getSeconds()}`)

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(`${new Date().getMonth() + 1}/ ${new Date().getDate()}`)
            setTime(`${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`)
        }, 1000 * 1);
    }, []);

    return (
        <div className="two column row current-date-row">
            <div className="column current-date"> {currentDate} </div>
            <div className="column current-date"> {time} </div>
        </div>
    )
}

// class CurrentDate extends React.Component {

// getDate() {
//     const newDate = new Date();
//     const month = newDate.getMonth() + 1
//     const date = newDate.getDate()

//     return `${month}/${date}`
// }

// getTime() {
//     const newDate = new Date();
//     const hour = newDate.getHours();
//     const minute = newDate.getMinutes()

//     return `${hour}:${minute}`
// }

// render() {
//     return (<div className="two column row current-date-row">
//         <div className="column current-date"> {this.getDate()} </div>
//         <div className="column current-date"> {this.getTime()} </div>
//     </div>)
// }
// }

export default CurrentDate;