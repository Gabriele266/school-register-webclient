import {Grade} from "../../../domain/Entities";
import {GradeItem} from "../../utilities/items/GradeItem";

interface Props {
    grades: Grade[];
}

export const GradesList = (props: Props) => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-2 p-2">
                <div>Materia</div>
                <div>Voto</div>
                <div>Data</div>
                <div>Descrizione</div>
                <br/>
            </div>
            {
                props.grades.map(it => <GradeItem grade={ it }
                                                  itemType={ "Student" }
                />)
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