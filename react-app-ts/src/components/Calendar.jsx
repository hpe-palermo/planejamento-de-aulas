import React, { useEffect, useState } from "react";
import '../assets/Calendar.css';
import { IoMdClose } from "react-icons/io";

function Calendar() {

    const [nameMonth, setNameMonth] = useState('');
    const [weeksMonth, setWeeksMonth] = useState([]);
    const [numberDaysMonth, setNumberDaysMonth] = useState([]);
    const today = new Date();

    const [tasks, setTasks] = useState([
        { task: "Estudar JavaScript", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Python", discipline: "Programação", status: true, date: '2024-08-01' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Ler um livro", discipline: "Leitura", status: true, date: '2024-08-21' },
        { task: "Tomar café", discipline: "Saúde", status: false, date: '2024-08-29' },
    ]);

    const [objectsDays, setObjectsDays] = useState([]);

    const [indexModalDay, setIndexModalDay] = useState(0);
    const [dayModalActive, setDayModalActive] = useState(false);

    useEffect(() => {
        let newObjectDays = Array(42).fill().map(() => []);

        for (let task of tasks) {
            let day = parseInt(task.date.split('-')[2]);

            if (day >= 1 && day <= 42) {
                newObjectDays[day - 1].push(task);
            }
        }

        setObjectsDays(newObjectDays);
    }, [tasks]);


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

    const openModalDay = (index) => {
        setIndexModalDay(index);
        toggleOpenModalDay();
        console.log('openModalDay:', index);
        console.log(objectsDays[index - 1].map(
            task => console.log('task:', task.task)
        ));
    };

    const toggleOpenModalDay = () => {
        setDayModalActive(!dayModalActive);
    };


    return (
        <div className="calendar" id="calendar">
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
                <div className={`modal-day-tasks ${dayModalActive ? 'active' : ''}`}>
                    <div className="day-tasks">
                        <div style={{ textAlign: 'end' }} onClick={() => toggleOpenModalDay(-1)}>
                            <IoMdClose size={25} className="icon-close" />
                        </div>
                        <div>
                            <h1>Dia {indexModalDay}</h1>
                        </div>
                        <div style={{ marginTop: '10px' }}>
                            <h2>Tarefas</h2>
                        </div>
                        <div>
                            <ul className="list-tasks-day">
                                {objectsDays[indexModalDay - 1] && objectsDays[indexModalDay - 1].length > 0 ? (
                                    objectsDays[indexModalDay - 1].map((task, index) => (
                                        <li key={index}>{task.task}</li>
                                    ))
                                ) : (
                                    <div style={{ textAlign: 'center' }}>Nenhuma tarefa para este dia.</div>
                                )}
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="days-of-month" id="days-of-month">
                    {weeksMonth.map((week, i) =>
                    (<div key={i} className="week-of-month">
                        {week.map((day, index) => (
                            <div key={index} onClick={() => openModalDay(day)} className={`day-of-month ${day === today.getDate() ? 'today' : ''}`}>
                                <div>{day}</div>
                                {
                                    day ?
                                        <div className="list-labels">
                                            <div className="label-full">
                                                {
                                                    objectsDays[day - 1].length > 2 ?
                                                        <div className="task-item">ver mais...</div> :
                                                        objectsDays[day - 1].map((task, index) => (
                                                            <div key={day} className={`task-item ${task.status ? 'completed' : 'pendent'}`}>
                                                                {task.task}
                                                            </div>
                                                        ))
                                                }
                                            </div>
                                            <div className="label-resp">
                                                {
                                                    objectsDays[day - 1].length > 0 ?
                                                        <div key={day} onClick={() => openModalDay(day)} className="task-item">...</div> :
                                                        <div></div>
                                                }
                                            </div>

                                        </div>
                                        : <div></div>
                                }
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