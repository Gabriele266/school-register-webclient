import { Button, Intent } from '@blueprintjs/core';
import { instance } from '../StudentsTeachersPage';
import {useState} from "react";
import {Teacher} from "../../domain/Entities";
import {ModifyTeacherDialog} from "./dialogs/ModifyTeacherDialog";
import {StudentGradesDialog} from "../grades/studentsGrade/StudentGradesDialog";
import {TeacherGradesDialog} from "../grades/teachersGrade/TeacherGradesDialog";

interface Props {
    teacher: Teacher;
    onRemoveTeacher: (id: string) => void;
}



export const TeacherItem = (props: Props) => {
    console.log("TeacherID-" + props.teacher.name + ": " +  props.teacher.id);

    const handleButtonDeleteTeacher = async () => {
        const response = await instance.delete(`/teachers/${ props.teacher.id }`);
    }

    const [modifyTeacherVisible, setModifyTeacherVisible] = useState(false);
    const [teacherGradesVisible, setTeacherGradesVisible] = useState(false);

    //Inserire nello spazio vuoto un button contente i voti visualizzabili dall'insegnante
    return (
        <div className="flex justify-between w-full bg-red-400 p-2 text-white">
            <div>
                {
                    props.teacher.name + ' ' + props.teacher.surname
                }
            </div>
            <div> { props.teacher.subject }</div>
            <div>
                <Button icon="book" onClick={ () => setTeacherGradesVisible(true) }/> {
                teacherGradesVisible &&
                <TeacherGradesDialog teacher={ props.teacher }
                                     isVisible={ teacherGradesVisible }
                                     onClose={ () => setTeacherGradesVisible(false) }/>
            }
                <Button icon="edit" onClick={ () => setModifyTeacherVisible(true) }/>
                {
                    modifyTeacherVisible &&
                    <ModifyTeacherDialog teacher={ props.teacher }
                                         isVisible={ modifyTeacherVisible }
                                         onClose={ () => setModifyTeacherVisible(false) }
                                         onModify={ it => {console.log(it);} }/> }

                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ handleButtonDeleteTeacher }/>
            </div>
        </div>
    );
};