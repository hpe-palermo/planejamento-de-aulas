import React from "react";
import { useParams } from "react-router-dom";

const Discipline = ({ disciplines }) => {
    const { id } = useParams();
    
    if (id === undefined || isNaN(Number(id))) {
        return <div>Disciplina não encontrada</div>;
    }

    const disciplineId = parseInt(id);
    
    if (disciplineId < 0 || disciplineId >= disciplines.length) {
        return <div>Disciplina não encontrada</div>;
    }

    const discipline = disciplines[disciplineId];

    return (
        <div className="discipline-details">
            <h4><strong>Disciplina:</strong> {discipline.name}</h4>
            <h4><strong>Carga Horária:</strong> {discipline.creditHours}h</h4>
            <h4><strong>Dias da Semana:</strong> {discipline.daysOfWeek.join(', ')}</h4>
            <h4><strong>Conteúdos:</strong></h4>
            <ul>
                {discipline.contents.map((content, index) => (
                    <li key={index}>{content}</li>
                ))}
            </ul>
        </div>
    );
};

export default Discipline;
