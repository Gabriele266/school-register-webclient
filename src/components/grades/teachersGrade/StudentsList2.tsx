import {Student, Teacher} from "../../../domain/Entities";
import {StudentItem} from "../../utilities/items/StudentItem";


interface Props {
    students: Student[];
    teacher: Teacher;
}

export const StudentsList2 = (props: Props) => {
    return (
        <div className="p-1">
            {
                props.students.map(it => <StudentItem student={it}
                                                      teacher={props.teacher}
                                                      actions={[]}
                                                      background="red"
                />)
            }
        </div>
    );
};