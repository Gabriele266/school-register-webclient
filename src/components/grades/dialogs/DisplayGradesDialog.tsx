import {Button, Classes, Dialog, Spinner} from "@blueprintjs/core";
import {useEffect, useState} from "react";
import {instance} from "../../StudentsTeachersPage";
import {Grade, Student} from "../../../domain/Entities";
import {GradesList} from "../GradesList";

interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
}

export const DisplayGradesDialog = (props: Props) => {
    const [createGradeVisible, setCreateGradeVisible] = useState(false);
    const [grades, setGrades] = useState<Grade[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect( () => {
        const getStudentGrades = async () => {
            const response = await instance.get(`/students/${ props.student.id }/grades`);
            console.log(response.data);

            setGrades(response.data);
            setIsLoading(false);

            return response;
        }
        getStudentGrades();

        setIsLoading(true);


    }, [setGrades, setIsLoading]);

    //se non ci sono ancora voti scriverlo
    
    return(
        <Dialog isOpen={ props.isVisible } title="Visualizzazione voti"
                onClose={ props.onClose } className="h-69 w-69">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> : <GradesList grades={ grades }/>
                    }
                </div>
            </div>
        </Dialog>
    )
    
}