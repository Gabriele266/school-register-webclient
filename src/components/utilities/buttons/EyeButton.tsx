import {Student} from "../../../domain/Entities";
import {useState} from "react";
import {Button} from "@blueprintjs/core";
import {DisplayGradesDialog} from "../../grades/teachersGrade/studentGradesDialog/DisplayGradesDialog";

interface Props {
    student: Student;
    subject: string;
}

export const EyeButton = (props: Props) => {
    const [displayGradesVisible, setDisplayGradesVisible] = useState(false);

    return (
        <div>
            <Button icon="eye-open" onClick={ () => setDisplayGradesVisible(true) }/> {
            displayGradesVisible &&
            <DisplayGradesDialog student={ props.student }
                                 subject={ props.subject }
                                 isVisible={ displayGradesVisible }
                                 onClose={ () => setDisplayGradesVisible(false) }/>
        }
        </div>
    )
}