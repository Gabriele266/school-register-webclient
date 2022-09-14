import {Grade} from "../../../../domain/Entities";
import {GradeItem} from "../../../utilities/items/GradeItem";


interface Props {
    grades: Grade[];
}

export const GradesListForStudent = (props: Props) => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-2 p-2">
                <div>Voto</div>
                <div>Data</div>
                <div>Descrizione</div>
                <br/>
            </div>
            {
                props.grades.map(it => <GradeItem grade={ it }
                                                  itemType={ "Teacher" }
                />)
            }
        </div>
    );
}
