import {Button, Classes, Dialog, Spinner} from "@blueprintjs/core";
import {useEffect, useState} from "react";
import {instance} from "../../StudentsTeachersPage";
import {Grade, Student} from "../../../domain/Entities";
import {GradeItem} from "../../utilities/items/GradeItem";

interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
}

export const StudentGradesDialog = (props: Props) => {
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
                        isLoading ? <Spinner/> :
                            <div>
                                <div className="grid grid-cols-4 gap-2 p-2">
                                    <div>Materia</div>
                                    <div>Voto</div>
                                    <div>Data</div>
                                    <div>Descrizione</div>
                                    <br/>
                                </div>
                                {
                                    grades.map(it => <GradeItem grade={ it }
                                                                      showSubject
                                                                      styleType="grid grid-cols-4 gap-2 p-2 text-black"
                                    />)
                                }
                            </div>
                    }
                </div>
            </div>
        </Dialog>
    )
    
}