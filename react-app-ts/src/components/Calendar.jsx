import React, { useEffect, useState } from "react";
import '../assets/Calendar.css';

function Calendar() {

    const [nameMonth, setNameMonth] = useState('');
    const [weeksMonth, setWeeksMonth] = useState([]);
    const [numberDaysMonth, setNumberDaysMonth] = useState([]);
    const today = new Date();

    const createCalendar = () => {
        const monthNames = [
            "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
            "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
        ];
        const currentMonth = today.getMonth();
        const currentYear = today.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        setNameMonth(`${monthNames[currentMonth]} ${currentYear}`);

        const daysArray = Array.from({ length: 42 }, (_, i) => i >= firstDayOfMonth && i < firstDayOfMonth + daysInMonth ? i - firstDayOfMonth + 1 : '');
        setNumberDaysMonth(daysArray);

        let weeks = [];
        let days = [];

        for (let index = 0; index < daysArray.length; index++) {
            const day = daysArray[index];
            days.push(day);

            if ((index + 1) % 7 == 1 && !day && new Date(currentYear, currentMonth, (index + 1)) >= new Date(currentYear, currentMonth, daysInMonth)) {
                break;
            }

            if ((index + 1) % 7 == 0) {
                weeks.push(days);
                days = [];
            }
        }
        setWeeksMonth(weeks);
    };

    useEffect(createCalendar, []);

    return (
        <div className="item-content calendar rounded-3 mb-3 p-0" id="calendar">
                <div className="calendar-header">
                    <div className="item-calendar-header">
                        <i className="bi-chevron-left fs-3"></i>
                    </div>
                    <div className="item-calendar-header">
                        <h2>{nameMonth}</h2>
                    </div>

                    <div className="item-calendar-header">
                        <i className="bi-chevron-right fs-3"></i>
                    </div>
                </div>
                <div className="calendar-body">
                    <div className="days-week-name">
                        <div className="day-week-name-item">Dom</div>
                        <div className="day-week-name-item">Seg</div>
                        <div className="day-week-name-item">Ter</div>
                        <div className="day-week-name-item">Qua</div>
                        <div className="day-week-name-item">Qui</div>
                        <div className="day-week-name-item">Sex</div>
                        <div className="day-week-name-item">Sáb</div>
                    </div>
                    <div className="days-fs-letter">
                        <div className="day-week-name-item">D</div>
                        <div className="day-week-name-item">S</div>
                        <div className="day-week-name-item">T</div>
                        <div className="day-week-name-item">Q</div>
                        <div className="day-week-name-item">Q</div>
                        <div className="day-week-name-item">S</div>
                        <div className="day-week-name-item">S</div>
                    </div>
                    <div className="days-of-month" id="days-of-month">
                        {weeksMonth.map(week =>
                        (<div className="week-of-month">
                            {week.map((day, index) => (
                                <div key={index} className={`day-of-month ${day === today.getDate() ? 'today' : ''}`}>
                                    <div>{day}</div>
                                </div>
                            ))}
                        </div>)
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Calendar;