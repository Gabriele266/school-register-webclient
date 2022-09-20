import {useEffect, useState} from "react";
import {instance} from "../HomePage";
import {Student} from "../../domain/Entities";
import {Button, Intent, Spinner} from "@blueprintjs/core";
import {StudentItem} from "../utilities/items/StudentItem";
import {ModifyStudentDialog} from "./dialogs/ModifyStudentDialog";
import {StudentGradesDialog} from "../grades/studentsGrade/StudentGradesDialog";
import {CreateStudentDialog} from "./dialogs/CreateStudentDialog";

export const StudentsSection = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [modifyStudentVisible, setModifyStudentVisible] = useState(false);
    const [studentGradesVisible, setStudentGradesVisible] = useState(false);
    const [createStudentVisible, setCreateStudentVisible] = useState(false);

    const [selectedStudent, setSelectedStudent] = useState<Student>();

    useEffect( () => {
        (async () => {
            setIsLoading(true);

            const response = await instance.get('/students');
            setStudents(response.data);

            setIsLoading(false);

            /*
            setTimeout(async () => {
                const response = await instance.get('/students');
                setStudents(response.data);

                setIsLoading(false);
            }, 1000);
             */
        })();
    }, [setIsLoading, setStudents]);


    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <div>
                        {
                            students.map(it => <StudentItem student={it}
                                                            actions={[<div>
                                                                <Button icon="book" onClick={ () => {
                                                                    setSelectedStudent(it);
                                                                    setStudentGradesVisible(true)} }/>

                                                                <Button icon="edit" onClick={ () => {
                                                                    setSelectedStudent(it);
                                                                    setModifyStudentVisible(true)} }/>

                                                                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ async () => {
                                                                    await instance.delete(`/students/${ it.id }`);
                                                                } }/>

                                                            </div>]}
                                                            showOnlyYear    //significa true
                                                            showCompleteName
                                                            styleType="flex justify-between gap-4 w-full bg-blue-400 p-2 text-white"
                            />)
                        }

                        {
                            studentGradesVisible &&
                            <StudentGradesDialog student={ selectedStudent as Student }
                                                 isVisible={ studentGradesVisible }
                                                 onClose={ () => setStudentGradesVisible(false) }/>
                        }

                        {
                            modifyStudentVisible &&
                            <ModifyStudentDialog student={ selectedStudent as Student }
                                                 isVisible={ modifyStudentVisible }
                                                 onClose={ () => setModifyStudentVisible(false) }
                                                 onModify={ it => {console.log(it);} }/>
                        }
                    </div>

            }
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateStudentVisible(true) }>
                    Aggiungi studente
                </Button>
            </div>
            {
                createStudentVisible &&
                <CreateStudentDialog isVisible={ createStudentVisible }
                                     onClose={ () => setCreateStudentVisible(false) }
                />
            }
        </div>
    );
};