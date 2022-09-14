import {useEffect, useState} from "react";
import {instance} from "../StudentsTeachersPage";
import {Student} from "../../domain/Entities";
import {Button, Intent, Spinner} from "@blueprintjs/core";
import {AddButton} from "../utilities/buttons/AddButton";
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

    useEffect( () => {
        (async () => {
            //setIsLoading(true);   //TODO bug: rimane true per sempre

            const response = await instance.get('/students');
            setStudents(response.data);

            setIsLoading(false);
        })();
    });

    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <div>
                        {
                            students.map(it => <StudentItem student={it}
                                                            actions={[<div>
                                                                <Button icon="book" onClick={ () => setStudentGradesVisible(true) }/> {
                                                                studentGradesVisible &&
                                                                <StudentGradesDialog student={ it }
                                                                                     isVisible={ studentGradesVisible }
                                                                                     onClose={ () => setStudentGradesVisible(false) }/>
                                                            }
                                                                <Button icon="edit" onClick={ () => setModifyStudentVisible(true) }/> {
                                                                modifyStudentVisible &&
                                                                <ModifyStudentDialog student={ it }
                                                                                     isVisible={ modifyStudentVisible }
                                                                                     onClose={ () => setModifyStudentVisible(false) }
                                                                                     onModify={ it => {console.log(it);} }/>
                                                            }
                                                                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ async () => {
                                                                    await instance.delete(`/students/${ it.id }`);
                                                                } }/>

                                                            </div>]}
                                                            showOnlyYear    //significa true
                                                            showCompleteName
                                                            styleType="grid grid-cols-3 gap-3 w-full bg-blue-400 p-2 text-white"
                                                            //TODO bug: la griglia da 3 si presenta da 4 spazi con uno vuoto
                            />)
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