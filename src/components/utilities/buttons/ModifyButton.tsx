import {Button} from "@blueprintjs/core";
import {ModifyStudentDialog} from "../../students/dialogs/ModifyStudentDialog";
import {useState} from "react";
import {Student, Teacher} from "../../../domain/Entities";
import {ModifyTeacherDialog} from "../../teachers/dialogs/ModifyTeacherDialog";

interface Props {
    item: Student | Teacher;
    itemType: string;
}

export const ModifyButton = (props: Props) => {
    const [modifyItemVisible, setModifyItemVisible] = useState(false);

    if (props.itemType === "Student") return (
        <div>
            <Button icon="edit" onClick={ () => setModifyItemVisible(true) }/>
            {
                modifyItemVisible &&
                <ModifyStudentDialog student={ props.item as Student }
                                     isVisible={ modifyItemVisible }
                                     onClose={ () => setModifyItemVisible(false) }
                                     onModify={ it => {console.log(it);} }/>
            }
        </div>
    )
    else if (props.itemType === "Teacher") return (
        <div>
            <Button icon="edit" onClick={ () => setModifyItemVisible(true) }/>
            {
                setModifyItemVisible &&
                <ModifyTeacherDialog teacher={ props.item as Teacher }
                                     isVisible={ modifyItemVisible }
                                     onClose={ () => setModifyItemVisible(false) }
                                     onModify={ it => {console.log(it);} }/>
            }
        </div>
    )
    else return (
            <div>
                Qualcosa è andato storto
            </div>
        )
}