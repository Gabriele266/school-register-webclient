import {Student, Teacher} from '../../../domain/Entities';
import {msToTime} from "../TsFuntions";

interface Props {
    student: Student;
    teacher?: Teacher;
    showOnlyYear?: boolean;
    actions: JSX.Element[];
    showCompleteName?: boolean;
    background?: string;
    onClick?: () => void;
}

export const StudentItem = (props: Props) => {
    const date = () => {
        if (props.showOnlyYear) {
            return (new Date(props.student.birthDate)).getFullYear();
        } else return (msToTime(props.student.birthDate));
    }

    /*
    const actions = () => {
        if (props.itemType === "Student") {
            return (
                <div className="flex flex-row">
                    <GradesButton item={ props.student } itemType={ "Student" } />
                    <ModifyButton item={ props.student } itemType={ "Student" } />
                    <DeleteButton item={ props.student } itemType={ "Student" } />
                </div>
            );
        }
        else return (
            <div>
                <EyeButton student={ props.student } subject={ props.teacher!.subject } />
            </div>
        )
    }
    */

    return (
        <div onClick={props.onClick} style={{background: props.background}}
             className="flex grid grid-cols-3 w-full border border-slate-300 hover:border-indigo-300 p-2 text-black">
            <div>{props.showCompleteName ? (props.student.name + ' ' + props.student.surname) : props.student.name}</div>
            <div>{date()}</div>
            {<div className="flex flex-row">{props.actions} </div>
            }
        </div>
    );
};