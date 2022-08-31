import {GradeItem} from "./GradeItem";
import {Grade} from "../../../../domain/Entities";


interface Props {
    grades: Grade[];
}

export const GradesListForStudent = (props: Props) => {
    return (
        <div>
            {
                props.grades.map(it => <GradeItem grade={ it }/>)
            }
        </div>
    );
}