import {useEffect, useState} from "react";
import {Grade, Student} from "../../../../domain/Entities";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {instance} from "../../../HomePage";
import {getSubjectGrades} from "../../../utilities/functions/TsFuntions";
import {GradeItem} from "../../../utilities/items/GradeItem";

interface Props {
    student: Student;
    subject: string;
    isVisible: boolean;
    onClose: () => void;
}

export const DisplayGradesDialog = (props: Props) => {;
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


    //se non ci sono ancora voti scriverlo

    return(
        <Dialog isOpen={ props.isVisible } title="Voti"
                onClose={ props.onClose } className="h-69 w-32">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <div>
                                <div className="grid grid-cols-3 gap-2 p-2">
                                    <div>Voto</div>
                                    <div>Data</div>
                                    <div>Descrizione</div>
                                    <br/>
                                </div>
                                {
                                    grades.map(it => <GradeItem grade={ it }
                                                                      styleType="grid grid-cols-3 gap-2 p-2 text-black"
                                    />)
                                }
                        </div>
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