import {Student, Teacher} from '../../../domain/Entities';
import {GradesButton} from "../buttons/GradesButton";
import {ModifyButton} from "../buttons/ModifyButton";
import {DeleteButton} from "../buttons/DeleteButton";
import {EyeButton} from "../buttons/EyeButton";
import {msToTime} from "../TsFuntions";

interface Props {
    student: Student;
    teacher?: Teacher;
    itemType: "Student" | "Teacher";
}

export const StudentItem = (props: Props) => {
    //console.log("StudentID-" + props.student.name + ": " + props.student.id);
    const date = () => {
        if (props.itemType === "Student") {
            return (new Date(props.student.birthDate)).getFullYear();
        } else return (msToTime(props.student.birthDate));
    }

    const buttons = () => {
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

    if (props.itemType == "Student") return (
        <div className="flex justify-between gap-4 w-full bg-blue-400 p-2 text-white">
            <div>{ props.student.name + ' ' + props.student.surname }</div>
            <div>{ date() }</div>
            <div>{ buttons() }</div>
        </div>
    );
    else return (
        <div className="flex justify-between w-full border border-slate-300 hover:border-indigo-300 p-2 text-black">
            <div>{ props.student.name + ' ' + props.student.surname }</div>
            <div>{ date() }</div>
            <div>{ buttons() }</div>
        </div>
    );
};