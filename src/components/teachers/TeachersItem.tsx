import {Teacher} from "../../domain/Entities";
import {DeleteButton} from "../utilities/buttons/DeleteButton";
import {ModifyButton} from "../utilities/buttons/ModifyButton";
import {GradesButton} from "../utilities/buttons/GradesButton";

interface Props {
    teacher: Teacher;
    onRemoveTeacher: (id: string) => void;
}

// I componenti possono anche essere resi privati (togliendo la parola chiave export)
// in questo modo, li creiamo solo all'interno del dialogo / componente in cui devono essere usati e evitiamo casini dopo
// alternativamente, in base alle informazioni che visualizzano possiamo:
// * utilizzare delle proprietà di configurazione (ad esempio 'showName: boolean' per mostrare o nascondere il nome di un'insegnante
// e così via
// * Creare diversi componenti con nomi completamente diversi, ad es: TeacherPreview, TeacherThumbinail, TeacherItem, TeacherCard, etc... NOTA: Mai usare i numeri 1, 2, 3, etc...
export const TeacherItem = (props: Props) => {
    //console.log("TeacherID-" + props.teacher.name + ": " +  props.teacher.id);

    return (
        <div className="flex justify-between w-full bg-red-400 p-2 text-white">
            <div>
                {
                    props.teacher.name + ' ' + props.teacher.surname
                }
            </div>
            <div> {props.teacher.subject}</div>
            <div className="flex flex-row">
                {
                    // TODO: In questo caso creare dei componenti a parte per dei semplici pulsanti non serve a nulla
                }
                <GradesButton item={props.teacher} itemType={"Teacher"}/>
                <ModifyButton item={props.teacher} itemType={"Teacher"}/>
                <DeleteButton item={props.teacher} itemType={"Teacher"}/>
            </div>
        </div>
    );
};
