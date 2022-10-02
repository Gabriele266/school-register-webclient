import {useEffect, useState} from "react";
import {Grade, Student} from "../../../../domain/Entities";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {instance} from "../../../HomePage";
import {getSubjectGrades, msToTime} from "../../../utilities/functions/TsFuntions";
import DataTable from "react-data-table-component";

interface Props {
    student: Student;
    subject: string;
    isVisible: boolean;
    onClose: () => void;
}

export const DisplayGradesDialog = (props: Props) => {
    const [grades, setGrades] = useState<Grade[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        //viene eseguito ogni volta che si preme il bottone 'occhio' sullo student
        (async () => {
            setIsLoading(true);

            const response = await instance.get(`/students/${ props.student.id }/grades`);
            setGrades(getSubjectGrades(response.data, props.subject));

            setIsLoading(false);
        })();
    }, [setIsLoading, setGrades]);


        const columns = [
        {
            name: 'Voto',
            selector: (row: any) => row.value,
            sortable: true
        },
        {
            name: 'Data',
            selector: (row: any) => msToTime(row.dateTime)
        },
        {
            name: 'Descrizione',
            selector: (row: any) => row.description
        }
    ];

    //se non ci sono ancora voti scriverlo

    return(
        <Dialog isOpen={ props.isVisible } title="Voti"
                onClose={ props.onClose } className="min-h-min min-w-min">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <DataTable
                                columns={columns}
                                data={grades}
                            />
                    }
                </div>

            </div>
        </Dialog>
    )

}