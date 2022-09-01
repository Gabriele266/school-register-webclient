import {Student, Teacher} from "../../../domain/Entities";
import {useState} from "react";
import {StudentGradesDialog} from "../../grades/studentsGrade/StudentGradesDialog";
import {Button} from "@blueprintjs/core";
import {TeacherGradesDialog} from "../../grades/teachersGrade/TeacherGradesDialog";

interface Props {
    item: Student | Teacher;
    itemType: "Student" | "Teacher";
}

export const GradesButton = (props: Props) => {
    const [GradesItemVisible, setGradesItemVisible] = useState(false);

    if (props.itemType === "Student") return (
        <div>
            <Button icon="book" onClick={ () => setGradesItemVisible(true) }/> {
            GradesItemVisible &&
            <StudentGradesDialog student={ props.item as Student }
                                 isVisible={ GradesItemVisible }
                                 onClose={ () => setGradesItemVisible(false) }/>
        }
        </div>
    )
    else if (props.itemType === "Teacher") return (
        <div>
            <Button icon="book" onClick={ () => setGradesItemVisible(true) }/> {
            GradesItemVisible &&
            <TeacherGradesDialog teacher={ props.item as Teacher }
                                 isVisible={ GradesItemVisible }
                                 onClose={ () => setGradesItemVisible(false) }/>
        }
        </div>
    )
    else return (
        <div>
            Qualcosa è andato storto
        </div>
    )
}
