import {useEffect, useState} from "react";
import {Grade, Student, Teacher} from "../../../../domain/Entities";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {StudentsList2} from "../StudentsList2";
import {instance} from "../../../StudentsTeachersPage";
import {getSubjectGrades} from "../../../utilities/funtions";
import {GradesListForStudent} from "./GradesListForStudent";

interface Props {
    student: Student;
    subject: string;
    isVisible: boolean;
    onClose: () => void;
}

export const DisplayGradesDialog = (props: Props) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [grades, setGrades] = useState<Grade[]>([]);

    useEffect( () => {
        const getStudentGradesBySubject = async () => {
            const response = await instance.get(`/students/${ props.student.id }/grades`);
            setGrades(response.data);

            const gradesList = getSubjectGrades(grades, props.subject);

            //setGrades(gradesList);
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