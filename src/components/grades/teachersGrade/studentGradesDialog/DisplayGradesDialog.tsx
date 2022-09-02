import {useEffect, useState} from "react";
import {Grade, Student} from "../../../../domain/Entities";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {instance} from "../../../StudentsTeachersPage";
import {GradesListForStudent} from "./GradesListForStudent";
import {getSubjectGrades} from "../../../utilities/TsFuntions";

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
                        isLoading ? <Spinner/> :  <GradesListForStudent grades={grades}/>
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