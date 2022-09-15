import {Grade} from "../../../domain/Entities";
import {msToTime} from "../TsFuntions";
import {checkInsufficientGrade} from "../TsxFunctions";

interface Props {
    grade: Grade;
    showSubject?: boolean;
    styleType?: string;
}

export const GradeItem = (props: Props) => {
    return (
        <div className={props.styleType}>
            <div>{ props.showSubject ? props.grade.subject : false }</div>
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );
}