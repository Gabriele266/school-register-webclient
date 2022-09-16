import {Teacher} from "../../domain/Entities";

interface Props {
    teacher: Teacher;
    actions?: JSX.Element[];
    styleType?: string; // non ancora utile da usare
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

            <div className="flex flex-row">{ props.actions }</div>
        </div>
    );
};
