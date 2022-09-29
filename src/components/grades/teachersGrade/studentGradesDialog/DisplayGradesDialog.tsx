import {useEffect, useState} from "react";
import {Grade, Student} from "../../../../domain/Entities";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {instance} from "../../../HomePage";
import {getSubjectGrades, msToTime} from "../../../utilities/functions/TsFuntions";
import {Cell, Column, Table2} from "@blueprintjs/table";

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
        const getStudentGradesBySubject = async () => {
            const response = await instance.get(`/students/${ props.student.id }/grades`);

            //se metto const non funziona
            let gradesList = getSubjectGrades(response.data, props.subject);
            //console.log(gradesList)
            setGrades(gradesList);

            setIsLoading(false);
            return response;
        }
        getStudentGradesBySubject();

        setIsLoading(true);

    }, [setGrades, setIsLoading]);


    const valueColumn = (index: number) => {
        return <Cell>{grades[index].value}</Cell>
    }
    const dateColumn = (index: number) => {
        return <Cell>{msToTime(grades[index].dateTime)}</Cell>
    }
    const descriptionColumn = (index: number) => {
        return <Cell>{grades[index].description}</Cell>
    }

    //se non ci sono ancora voti scriverlo

    return(
        <Dialog isOpen={ props.isVisible } title="Voti"
                onClose={ props.onClose } className="min-h-min min-w-min">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <Table2 numRows={grades.length}>
                                <Column name="Voto" cellRenderer={valueColumn}/>
                                <Column name="Data" cellRenderer={dateColumn}/>
                                <Column name="Descrizione" cellRenderer={descriptionColumn}/>
                            </Table2>
                    }
                </div>

            </div>
        </Dialog>
    )

}
/*
<div className="flex-1">
                    <div>{props.grades[0].value}</div>
                </div>
 */