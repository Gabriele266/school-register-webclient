import {Student, Teacher} from "../../../domain/Entities";
import {useEffect, useState} from "react";
import {instance} from "../../HomePage";
import {Button, Classes, Dialog, Spinner} from "@blueprintjs/core";
import {StudentItem} from "../../utilities/items/StudentItem";
import {DisplayGradesDialog} from "./studentGradesDialog/DisplayGradesDialog";

interface Props {
    teacher: Teacher;
    isVisible: boolean;
    onClose: () => void;
}

export const TeacherGradesDialog = (props: Props) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [displayGradesVisible, setDisplayGradesVisible] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState<Student>();

    useEffect( () => {
        const getStudents = async () => {
            const response = await instance.get(`/students`);
            setStudents(response.data);
            console.log(props.teacher)

            setIsLoading(false);
            return response;
        }
        getStudents()
        setIsLoading(true);

    }, [setStudents, setIsLoading]);

    //se non ci sono ancora voti scriverlo

    return(
        <Dialog isOpen={ props.isVisible } title="I miei studenti"
                onClose={ props.onClose } className="h-69 w-69">
            <div className={ Classes.DIALOG_BODY }>
                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <div className="p-1">
                                {
                                    students.map(it => <StudentItem student={it}
                                                                    teacher={props.teacher}
                                                                    actions={[
                                                                        <div>
                                                                        <Button icon="eye-open" onClick={ () => {
                                                                            setSelectedStudent(it);
                                                                            setDisplayGradesVisible(true);
                                                                        } }/>

                                                                    </div>]}
                                                                    styleType="flex justify-between w-full border border-slate-300 hover:border-indigo-300 p-2 text-black"
                                    />)
                                }
                                {
                                    displayGradesVisible &&
                                    <DisplayGradesDialog student={ selectedStudent as Student }
                                                         subject={ props.teacher.subject }
                                                         isVisible={ displayGradesVisible }
                                                         onClose={ () => setDisplayGradesVisible(false) }/>
                                }
                            </div>
                    }
                </div>
            </div>
        </Dialog>
    )

}