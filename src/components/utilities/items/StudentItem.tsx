import {Student, Teacher} from '../../../domain/Entities';
import {msToTime} from "../TsFuntions";

interface Props {
    student: Student;
    teacher?: Teacher;
    showOnlyYear?: boolean;
    actions: JSX.Element[];
    showCompleteName?: boolean;
    background?: string;
    styleType?: string;
    onClick?: () => void;
}

export const StudentItem = (props: Props) => {
    const date = () => {
        if (props.showOnlyYear) {
            return (new Date(props.student.birthDate)).getFullYear();
        } else return (msToTime(props.student.birthDate));
    }

    return (
        <div onClick={props.onClick} style={{background: props.background}}
             className={props.styleType}>
            <div>{props.showCompleteName ? (props.student.name + ' ' + props.student.surname) : props.student.name}</div>
            <div>{date()}</div>
            <div className="flex flex-row">{props.actions} </div>
        </div>
    );
};
