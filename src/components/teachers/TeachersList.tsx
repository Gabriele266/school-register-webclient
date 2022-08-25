import {Teacher} from "../../domain/Entities";
import {TeacherItem} from "./TeachersItem";

interface Props {
    teachers: Teacher[];
    onRemoveTeacher: (id: string) => void;
}

export const TeachersList = (props: Props) => {
    return (
        <div>
            {
                props.teachers.map(it => <TeacherItem teacher={ it }
                                                      onRemoveTeacher={ props.onRemoveTeacher
                                                      }/>)
            }
        </div>
    );
};