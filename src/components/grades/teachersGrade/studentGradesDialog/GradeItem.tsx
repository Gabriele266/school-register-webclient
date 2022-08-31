import {Grade} from "../../../../domain/Entities";
import {msToTime} from "../../../utilities/funtions";

interface Props {
    grade: Grade;
}

//DA FARE GRAFICA VOTI

export const GradeItem = (props: Props) => {
    const checkInsufficientGrade = () => {
        const grade = props.grade.value;
        if(grade < 6) return ( <div className="text-red-700">{ grade }</div>);
        else return ( <div className="text-green-700">{ grade }</div>);
    }

    return (
        <div className="grid grid-cols-3 gap-4 p-2 text-black">
            <div>{ checkInsufficientGrade() }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
        </div>
    )
}