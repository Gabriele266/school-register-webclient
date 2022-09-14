import {Grade} from "../../../domain/Entities";
import {msToTime} from "../TsFuntions";
import {checkInsufficientGrade} from "../TsxFunctions";

interface Props {
    grade: Grade;
    itemType: "Student" | "Teacher";
}

export const GradeItem = (props: Props) => {
    /*const body = () => {
        return (
            <div>
                <div>{ checkInsufficientGrade( props.grade.value ) }</div>
                <div>{ msToTime(props.grade.dateTime) }</div>
                <div>{ props.grade.description }</div>
            </div>
        )
    }*/
/*
    if (props.itemType === "Student") return (
        <div className="grid grid-cols-4 gap-2 p-2 text-black">
            <div>{ props.grade.subject }</div>
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );
    else return (
        <div className="grid grid-cols-3 gap-2 p-2 text-black">
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );*/
    if (props.itemType === "Student") return (
        <div className="grid grid-cols-4 gap-2 p-2 text-black">
            <div>{ props.grade.subject }</div>
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );
    else return (
        <div className="grid grid-cols-3 gap-2 p-2 text-black">
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );
}