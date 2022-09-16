import {Grade} from "../../../domain/Entities";
import {msToTime} from "../functions/TsFuntions";
import {checkInsufficientGrade} from "../functions/TsxFunctions";

interface Props {
    grade: Grade;
    showSubject?: boolean;
    styleType?: string;
}

export const GradeItem = (props: Props) => {
    return (    // mettere o no il div in showSubject?
        <div className={props.styleType}>
            { props.showSubject && props.grade.subject }
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    );
}