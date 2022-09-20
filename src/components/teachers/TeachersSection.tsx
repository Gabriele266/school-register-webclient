import {useEffect, useState} from "react";
import {Button, Intent, Spinner} from "@blueprintjs/core";
import {Teacher} from "../../domain/Entities";
import {instance} from "../HomePage";
import {CreateTeacherDialog} from "./dialogs/CreateTeacherDialog";
import {TeacherItem} from "./TeachersItem";
import {TeacherGradesDialog} from "../grades/teachersGrade/TeacherGradesDialog";
import {ModifyTeacherDialog} from "./dialogs/ModifyTeacherDialog";

export const TeachersSection = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [createTeacherVisible, setCreateTeacherVisible] = useState(false);
    const [teacherGradesVisible, setTeacherGradesVisible] = useState(false);
    const [modifyTeacherVisible, setModifyTeacherVisible] = useState(false);

    const [selectedTeacher, setSelectedTeacher] = useState<Teacher>();

    useEffect( () => {
        (async () => {
            setIsLoading(true);

            const response = await instance.get('/teachers');
            setTeachers(response.data);

            setIsLoading(false);
        })();
    }, [setIsLoading, setTeachers]);


    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <div>
                        {
                            teachers.map(it => <TeacherItem teacher={ it }
                                                            actions={[<div>
                                                                <Button icon="book" onClick={ () => {
                                                                    setSelectedTeacher(it);
                                                                    setTeacherGradesVisible(true) } }/>

                                                                <Button icon="edit" onClick={ () => {
                                                                    setSelectedTeacher(it);
                                                                    setModifyTeacherVisible(true);
                                                                } }/>

                                                                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ async () => {
                                                                    await instance.delete(`/teachers/${ it.id }`);
                                                                } }/>
                                                            </div> ]}
                            />)
                        }

                        {
                            teacherGradesVisible &&
                            <TeacherGradesDialog teacher={ selectedTeacher as Teacher }
                                                 isVisible={ teacherGradesVisible }
                                                 onClose={ () => setTeacherGradesVisible(false) }/>
                        }

                        {
                            modifyTeacherVisible &&
                            <ModifyTeacherDialog teacher={ selectedTeacher as Teacher }
                                                 isVisible={ modifyTeacherVisible }
                                                 onClose={ () => setModifyTeacherVisible(false) }
                                                 onModify={ it => {console.log(it);} }/>
                        }
                    </div>
            }
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateTeacherVisible(true) }>
                    Aggiungi insegnante
                </Button>
            </div>
            {
                createTeacherVisible &&
                <CreateTeacherDialog isVisible={ createTeacherVisible }
                                     onClose={ () => setCreateTeacherVisible(false) }
                /> }
        </div>
    );
};