import React, {Component} from 'react';
import PropTypes from 'prop-types';

const months = [
    {
        name: 'January',
        days: 31
    },
    {
        name: 'February',
        days: new Date().getFullYear() % 4 === 0 ? 29 : 28
    },
    {
        name: 'March',
        days: 31
    },
    {
        name: 'April',
        days: 30
    },
    {
        name: 'May',
        days: 31
    },
    {
        name: 'June',
        days: 30
    },
    {
        name: 'July',
        days: 31
    },
    {
        name: 'August',
        days: 31
    },
    {
        name: 'September',
        days: 30
    },
    {
        name: 'October',
        days: 31
    },
    {
        name: 'November',
        days: 30
    },
    {
        name: 'December',
        days: 31
    }
];

class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMonth: new Date().getMonth()
        }
    }

    incrementMonth = () => {
        this.setState({
            currentMonth: this.state.currentMonth === 11 ? 0 : this.state.currentMonth + 1
        })
    };

    decrementMonth = () => {
        this.setState({
            currentMonth: this.state.currentMonth === 0 ? 11 : this.state.currentMonth - 1
        })
    };

    render() {
        const days = [];

        const calendarHeader = (
            <div id="calendar-header" className="section-header">
                {/*todo - replace with icon*/}
                <button onClick={this.decrementMonth}>Prev</button>
                <h2>{months[this.state.currentMonth].name}</h2>
                {/*todo - replace with icon*/}
                <button onClick={this.incrementMonth}>Next</button>
            </div>
        );

        const day = (date) => (
            <div key={`day-${date}`} id={`day-${date}`} className="calendar-day">
                <p>{date + 1}</p>
            </div>
        );

        for (let idx = 0; idx < months[this.state.currentMonth].days; idx++) {
            days.push(day(idx))
        }

        const monthView = (
            <div id="days-group">
                {days}
            </div>
        );

        return (
            <div id={`${this.props.id}-section`} className="section-container">
                {calendarHeader}
                {monthView}
            </div>
        )
    }
}

Calendar.propTypes = {
    id: PropTypes.string
};

export default Calendar
