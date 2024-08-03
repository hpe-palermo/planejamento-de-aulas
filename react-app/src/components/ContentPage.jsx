import React, { useState, useEffect } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
    .content {
        height: calc(100vh - 72px);
        width: 100%;
        display: flex;
        flex-direction: column;
        padding: 10px;
        transition: .5s;
    }

    .content.active {
        position: fixed;
        transform: translateX(-100%);
    }

    .bg-linear {
        background: linear-gradient(-45deg, var(--primary-color), var(--tertiary-color));
    }

    .item-content {
        width: calc(100% - 50px);
        background-color: var(--secondary-color);
        border-radius: 10px;
        margin: 20px;
        border-radius: 20px;
    }

    /* .dios-mio {
        overflow-y: auto;
    } */
`;

const Calendar = styled.div`
    & {
        padding: 0;
        background-color: var(--secondary-color);
        border: 10px solid black;
    }

    .calendar-header {
        display: flex;
        justify-content: space-between;
        margin: 0 20px; 
        
    }

    .calendar-header .item-calendar-header {
        display: flex;
        align-items: center;
    }

    .calendar-header .item-calendar-header i {
        cursor: pointer;
    }

    & h2 {
        padding: 10px;
        text-align: center;
    }

    .calendar-body {
    }

    .calendar-body .days-week-name {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        color: #d2d2d2;
    }

    .day-week-name-item {
        background-color: black;
        flex: 1;
        text-align: center;
        padding: 10px;
        border: 2px solid black;
    }

    .calendar-body .days-fs-letter {
        display: none;
    }

    .week-of-month {
        display: flex;
        justify-content: space-between;
    }

    .day-of-month {
        flex: 1;
        border: 2px solid var(--primary-color);
        height: 80px;
        display: flex;
        align-items: start;
        justify-content: end;
        padding: 10px 10px 0 0;
        cursor: pointer;
    }

    .day-of-month:hover {
        background-color: #838383;
    }

    .today {
        background-color: #838383;
    }

    @media (max-width: 768px) {
        .day-of-month {
            flex: 1;
            height: 50px;
        }

        .calendar-body .days-week-name {
            display: none;
        }

        .calendar-body .days-fs-letter {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
`;

const SectionTasks = styled.div`
    --primary-color: #101010;
    --secondary-color: #838383;
    --tertiary-color: #d2d2d2;

    & {
        background-color: var(--secondary-color);
        color: var(--tertiary-color);
        border-radius: 15px;
        border: 3px solid var(--primary-color);
        height: 100vh;
    }

    .tasks-title {
        background-color: var(--primary-color);
        padding: 3px;
        text-align: center;
        border-radius: 10px 10px 0 0;
    }

    .list-tasks {
        padding: 20px;
    }

    .list-tasks-header {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
    }

    .list-tasks-header div {
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .list-tasks-header div:nth-child(1) {
        flex: 2;
    }

    .task {
        background-color: var(--primary-color);
        display: flex;
        justify-content: space-between;
        gap: 2px;
        border: 2px solid var(--primary-color);
    }

    .task div {
        background-color: var(--secondary-color);
        flex: 1;
        padding: 5px;
        text-align: center;
    }

    .task div:nth-child(1) {
        flex: 2;
    }

    .status-task-full {
        display: inline;
    }

    .status-task-resp {
        display: none;
    }

    @media (max-width: 768px) {
        
        .status-task-full {
            display: none;
        }

        .status-task-resp {
            display: inline;
        }

        .task div {
            background-color: var(--secondary-color);
            width: 30%;
            padding: 5px;
            text-align: center;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .task div:nth-child(1) {
            width: 40%;
        }
    }
`;

function ContentPage() {

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
        let checkFirstDayWeek = false;

        for (let index = 0; index < daysArray.length; index++) {
            const day = daysArray[index];
            days.push(day);

            if ((index + 1) % 7 == 1 && !day && new Date(currentYear, currentMonth, (index + 1)) >= new Date(currentYear, currentMonth, daysInMonth)) {
                break; // arrumar karai
            }

            if ((index + 1) % 7 == 0) {
                weeks.push(days);
                days = [];
                checkFirstDayWeek = true;
                console.log('----------------------------------------------------------------')
            }
        }
        setWeeksMonth(weeks);
        console.log(weeks);
    };

    useEffect(createCalendar, []);

    return (
        <MainContainer className="container-fluid">
            {/* <div className="dios-mio"> */}
            <Calendar className="item-content calendar rounded-3 mb-3 p-0" id="calendar">
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
            </Calendar>
            <SectionTasks className="item-content tasks">
                <div className="tasks-title">
                    <div className="h2 p-3">Tarefas</div>
                    <div><i className="bi-plus-circle"></i></div>
                </div>
                <div className="list-tasks">
                    <div className="list-tasks-header">
                        <div>Descrição</div>
                        <div>Data</div>
                        <div>Status</div>
                    </div>
                    <div className="tasks">
                        <div className="task">
                            <div className="name-task">Fazer o frontend</div>
                            <div className="date-task">2024-08-10</div>
                            <div className="status-task-full">
                                <div className="badge bg-success text-color fs-6">Concluído</div>
                            </div>
                            <div className="status-task-resp">
                                <div className="badge bg-success text-color fs-6"><i className="bi-check"></i></div>
                            </div>
                        </div>
                        <div className="task">
                            <div className="name-task">Fazer o backend</div>
                            <div className="date-task">2024-08-10</div>
                            <div className="status-task-full">
                                <div className="badge bg-danger text-color fs-6">Pendente</div>
                            </div>
                            <div className="status-task-resp">
                                <div className="badge bg-danger text-color fs-6"><i className="bi-x"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionTasks>
            {/* </div> */}
        </MainContainer>
    )
}

export default ContentPage;