import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {useEffect, useState} from "react";
import {instance} from "../../HomePage";
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
        (async () => {
            setIsLoading(true);

            const response = await instance.get(`/students/${ props.student.id }/grades`);
            setGrades(response.data);

            setIsLoading(false);
        })();
    }, [setIsLoading, setGrades]);


    return(
        <Dialog isOpen={ props.isVisible } title="Visualizzazione voti"
                onClose={ props.onClose } className="min-h-min min-w-min">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <GradeItem grades={ grades }
                                       showSubject
                                />
                    }
                </div>
            </div>
        </Dialog>
    )
    
}
/*
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
 */