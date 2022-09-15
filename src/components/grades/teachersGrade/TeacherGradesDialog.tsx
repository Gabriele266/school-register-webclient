import {Student, Teacher} from "../../../domain/Entities";
import {useEffect, useState} from "react";
import {instance} from "../../StudentsTeachersPage";
import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {StudentItem} from "../../utilities/items/StudentItem";

interface Props {
    teacher: Teacher;
    isVisible: boolean;
    onClose: () => void;
}

export const TeacherGradesDialog = (props: Props) => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const getStudents = async () => {
            const response = await instance.get(`/students`);
            setStudents(response.data);

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
                                                                    actions={[]}
                                                                    styleType="flex justify-between w-full border border-slate-300 hover:border-indigo-300 p-2 text-black"
                                    />)
                                }
                            </div>
                    }
                </div>
            </div>
        </Dialog>
    )

}