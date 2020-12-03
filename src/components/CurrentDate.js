import './currentDate.css';
import React from 'react';

class CurrentDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            currentDate: `${new Date().getMonth() + 1}/ ${new Date().getDate()}`,
            time: `${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`
        }
    }

    componentDidUpdate() {
        setInterval(() => {
            this.setState({
                currentDate: `${new Date().getMonth() + 1}/ ${new Date().getDate()}`,
                time: `${new Date().getHours()}: ${new Date().getMinutes()}: ${new Date().getSeconds()}`
            })
        }, 1000 * 1)
    }

    render() {
        return (
            <div className="two column row current-date-row">
                <div className="column current-date"> {this.state.currentDate} </div>
                <div className="column current-date"> {this.state.time} </div>
            </div>
        )
    }
}

export default CurrentDate;