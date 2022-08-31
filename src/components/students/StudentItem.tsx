/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: StudentItem.tsx
 * Project: school-register-webclient
 * Committed last: 2022/5/26 @ 1711
 * ---
 * Description:
 */

import { Student }        from '../../domain/Entities';
import { Button, Intent } from '@blueprintjs/core';
import { instance }       from '../StudentsTeachersPage';
import {useState} from "react";
import {ModifyStudentDialog} from "./dialogs/ModifyStudentDialog";
import {StudentGradesDialog} from "../grades/studentsGrade/StudentGradesDialog";

interface Props {
    student: Student;
    onRemoveStudent: (id: string) => void;
}



export const StudentItem = (props: Props) => {
    console.log("StudentID-" + props.student.name + ": " + props.student.id);

    const handleButtonDeleteStudent = async () => {
        const response = await instance.delete(`/students/${ props.student.id }`);
    }

    const [modifyStudentVisible, setModifyStudentVisible] = useState(false);
    const [studentGradesVisible, setStudentGradesVisible] = useState(false);

    return (
        <div className="flex justify-between w-full bg-blue-400 p-2 text-white">
            <div>
                {
                    props.student.name + ' ' + props.student.surname
                }
            </div>
            <div>{
                (new Date(props.student.birthDate)).getFullYear()
            }</div>
            <div>
                <Button icon="book" onClick={ () => setStudentGradesVisible(true) }/> {
                    studentGradesVisible &&
                    <StudentGradesDialog student={ props.student }
                                         isVisible={ studentGradesVisible }
                                         onClose={ () => setStudentGradesVisible(false) }/>
                }
                <Button icon="edit" onClick={ () => setModifyStudentVisible(true) }/> {
                    modifyStudentVisible &&
                    <ModifyStudentDialog student={ props.student }
                                         isVisible={ modifyStudentVisible }
                                         onClose={ () => setModifyStudentVisible(false) }
                                         onModify={ it => {console.log(it);} }/>
                }

                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ handleButtonDeleteStudent }/>
            </div>
        </div>
    );
};

