import {Student} from "../../../domain/Entities";
import {StudentItem2} from "./StudentItem2";


interface Props {
    students: Student[];
    subject: string;
}

export const StudentsList2 = (props: Props) => {
    return (
        <div className="p-1">
            {
                props.students.map(it => <StudentItem2 student={ it } subject={props.subject}/>)
            }
        </div>
    );
};