import React, { useEffect, useState } from "react";
import '../assets/Calendar.css';
import { IoMdClose } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function Calendar() {

    const [nameMonth, setNameMonth] = useState('');
    const [weeksMonth, setWeeksMonth] = useState([]);
    const [numberDaysMonth, setNumberDaysMonth] = useState([]);
    const [today, setToday] = useState(new Date());
    const monthNames = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    const [tasks, setTasks] = useState([
        { task: "Estudar JavaScript", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Estudar Python", discipline: "Programação", status: true, date: '2024-08-01' },
        { task: "Estudar Django", discipline: "Programação", status: false, date: '2024-08-15' },
        { task: "Ler um livro", discipline: "Leitura", status: true, date: '2024-08-21' },
        { task: "Tomar café", discipline: "Saúde", status: false, date: '2024-08-29' },
        { task: "Tomar mais café", discipline: "Saúde", status: false, date: '2024-09-19' },
    ]);

    const [objectsDays, setObjectsDays] = useState([]);
    const [indexModalDay, setIndexModalDay] = useState(0);
    const [dayModalActive, setDayModalActive] = useState(false);

    useEffect(() => {
        let tasksByDate = {};
    
        for (let task of tasks) {   
            let taskDate = new Date(task.date);
            taskDate.setDate(taskDate.getDate()+1);
            let formattedDate = formatDate(taskDate);
    
            if (!tasksByDate[formattedDate]) {
                tasksByDate[formattedDate] = [];
            }
    
            tasksByDate[formattedDate].push(task);
        }
    
        setObjectsDays(tasksByDate);
        console.log('tasksByDate');
        console.log(tasksByDate);
    }, [tasks]);

    const createCalendar = (date) => {
        const currentMonth = date.getMonth();
        const currentYear = date.getFullYear();
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

        setNameMonth(`${monthNames[currentMonth]} ${currentYear}`);

        const daysArray = Array.from({ length: 42 }, (_, i) => 
            i >= firstDayOfMonth && i < firstDayOfMonth + daysInMonth ? i - firstDayOfMonth + 1 : ''
        );
        setNumberDaysMonth(daysArray);

        let weeks = [];
        let days = [];

        for (let index = 0; index < daysArray.length; index++) {
            const day = daysArray[index];
            days.push(day);

            if ((index + 1) % 7 === 0) {
                weeks.push(days);
                days = [];

            }if ((index + 1) % 7 == 1 && !day && new Date(currentYear, currentMonth, (index + 1)) >= new Date(currentYear, currentMonth, daysInMonth)) {
                break;
            }
        }
        setWeeksMonth(weeks);
    };

    useEffect(() => {
        createCalendar(today);
    }, [today]);

    const openModalDay = (index) => {
        setIndexModalDay(index);
        toggleOpenModalDay();
    };

    const toggleOpenModalDay = () => {
        setDayModalActive(!dayModalActive);
    };

    const lastMonth = () => {
        let newDate = new Date(today);
        newDate.setMonth(newDate.getMonth() - 1);
        setToday(newDate);
    };

    const nextMonth = () => {
        let newDate = new Date(today);
        newDate.setMonth(newDate.getMonth() + 1);
        setToday(newDate);
    };

    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
    
        return `${day}/${month}/${year}`;
    };
    

    return (
        <div className="calendar" id="calendar">
        <div className="calendar-header">
            <div onClick={lastMonth} className="item-calendar-header">
                <FaAngleLeft size={25} />
            </div>
            <div className="item-calendar-header">
                <h2>{nameMonth}</h2>
            </div>
            <div onClick={nextMonth} className="item-calendar-header">
                <FaAngleRight size={25} />
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
            <div className={`modal-day-tasks ${dayModalActive ? 'active' : ''}`}>
                <div className="day-tasks">
                    <div style={{ textAlign: 'end' }} onClick={toggleOpenModalDay}>
                        <IoMdClose size={25} className="icon-close" />
                    </div>
                    <div>
                        <h1>Dia {formatDate(new Date(today.getFullYear(), today.getMonth(), indexModalDay))}</h1>
                    </div>
                    <div style={{ marginTop: '10px' }}>
                        <h2>Tarefas</h2>
                    </div>
                    <div>
                        <ul className="list-tasks-day">
                            {objectsDays[formatDate(new Date(today.getFullYear(), today.getMonth(), indexModalDay))]?.length > 0 ? (
                                objectsDays[formatDate(new Date(today.getFullYear(), today.getMonth(), indexModalDay))].map((task, index) => (
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
                {weeksMonth.map((week, i) => (
                    <div key={i} className="week-of-month">
                        {week.map((day, index) => (
                            <div 
                                key={index} 
                                onClick={() => day && openModalDay(day)} 
                                className={`day-of-month ${day === today.getDate() ? 'today' : ''}`}
                            >
                                <div>{day}</div>
                                {day && (
                                    <div className="list-labels">
                                        <div className="label-full">
                                            {objectsDays[formatDate(new Date(today.getFullYear(), today.getMonth(), day))]?.length > 2 ? (
                                                <div className="task-item">ver mais...</div>
                                            ) : (
                                                objectsDays[formatDate(new Date(today.getFullYear(), today.getMonth(), day))]?.map((task, index) => (
                                                    <div key={index} className={`task-item ${task.status ? 'completed' : 'pendent'}`}>
                                                        {task.task}
                                                    </div>
                                                ))
                                            )}
                                        </div>
                                        <div className="label-resp">
                                            {objectsDays[formatDate(new Date(today.getFullYear(), today.getMonth(), day))]?.length > 0 ? (
                                                <div onClick={() => day && openModalDay(day)} className="task-item">...</div>
                                            ) : (
                                                <div></div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}

export default Calendar;
