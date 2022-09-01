import {Button} from "@blueprintjs/core";
import {Student, Teacher} from "../../../domain/Entities";
import {CreateStudentDialog} from "../../students/dialogs/CreateStudentDialog";
import {CreateTeacherDialog} from "../../teachers/dialogs/CreateTeacherDialog";
import {useState} from "react";

interface Props {
    itemType: string;
}

export const AddButton = (props: Props) => {
    const [createItemVisible, setCreateItemVisible] = useState(false);

    if (props.itemType === "Student") return (
        <div>
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateItemVisible(true) }>
                    Aggiungi studente
                </Button>
            </div>
            {
                createItemVisible &&
                <CreateStudentDialog isVisible={ createItemVisible }
                                     onClose={ () => setCreateItemVisible(false) }
                /> }
        </div>
    )
    else if (props.itemType === "Teacher") return (
        <div>
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateItemVisible(true) }>
                    Aggiungi insegnante
                </Button>
            </div>
            {
                createItemVisible &&
                <CreateTeacherDialog isVisible={ createItemVisible }
                                     onClose={ () => setCreateItemVisible(false) }
                /> }
        </div>
    )
    else return (
            <div>
                Qualcosa è andato storto
            </div>
        )
}