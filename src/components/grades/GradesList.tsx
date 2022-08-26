import {Grade} from "../../domain/Entities";
import {GradeItem} from "./GradeItem";

interface Props {
    grades: Grade[];
}

export const GradesList = (props: Props) => {
    return (
        <div>
            <div className="flex justify-between p-2">
                <div>Materia</div>
                <div>Voto</div>
                <div>Insegnante</div>
                <div>Data</div>
            </div>

            <div>
                {
                    props.grades.map(it => <GradeItem grade={ it }/>)
                }
            </div>
        </div>
    );
}