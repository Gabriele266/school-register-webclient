import {Grade} from "../../../domain/Entities";
import {StudentGradeItem} from "./StudentGradeItem";

interface Props {
    grades: Grade[];
}

export const GradesList = (props: Props) => {
    return (
        <div>
            {
                props.grades.map(it => <StudentGradeItem grade={ it }/>)
            }
        </div>
    );
}

/*
<div className="grid grid-cols-4 gap-4 p-2">
                <div>Materia</div>
                <div>Voto</div>
                <div>Insegnante</div>
                <div>Data</div>
            </div>
 */