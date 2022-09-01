import {Teacher} from "../../domain/Entities";
import {DeleteButton} from "../utilities/buttons/DeleteButton";
import {ModifyButton} from "../utilities/buttons/ModifyButton";
import {GradesButton} from "../utilities/buttons/GradesButton";

interface Props {
    teacher: Teacher;
    onRemoveTeacher: (id: string) => void;
}

export const TeacherItem = (props: Props) => {
    //console.log("TeacherID-" + props.teacher.name + ": " +  props.teacher.id);

    return (
        <div className="flex justify-between w-full bg-red-400 p-2 text-white">
            <div>
                {
                    props.teacher.name + ' ' + props.teacher.surname
                }
            </div>
            <div> { props.teacher.subject }</div>
            <div className="flex flex-row">
                <GradesButton item={ props.teacher } itemType={ "Teacher" } />
                <ModifyButton item={ props.teacher } itemType={ "Teacher" } />
                <DeleteButton item={ props.teacher } itemType={ "Teacher" }/>
            </div>
        </div>
    );
};
