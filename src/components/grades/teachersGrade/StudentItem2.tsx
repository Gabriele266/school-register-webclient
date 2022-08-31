import {Grade, Student, Teacher} from "../../../domain/Entities";
import {useEffect, useState} from "react";
import {Button} from "@blueprintjs/core";
import {getSubjectGrades, msToTime} from "../../utilities/funtions";
import {DisplayGradesDialog} from "./studentGradesDialog/DisplayGradesDialog";
import {instance} from "../../StudentsTeachersPage";

interface Props {
    student: Student;
    subject: string;
}



export const StudentItem2 = (props: Props) => {
    const [displayGradesVisible, setDisplayGradesVisible] = useState(false);

    return (
        <div className="flex justify-between w-full border border-slate-300 hover:border-indigo-300 p-2 text-black">
            <div>
                { props.student.name + ' ' + props.student.surname }
            </div>
            <div>
                { msToTime(props.student.birthDate) }
            </div>
            <div>
                <Button icon="eye-open" onClick={ () => setDisplayGradesVisible(true) }/> {
                displayGradesVisible &&
                <DisplayGradesDialog student={ props.student }
                                     subject={ props.subject }
                                     isVisible={ displayGradesVisible }
                                     onClose={ () => setDisplayGradesVisible(false) }/>
            }
            </div>
        </div>
    );
};
