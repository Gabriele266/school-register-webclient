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

import { Student }        from '../domain/Entities';
import { Button, Intent } from '@blueprintjs/core';
import { instance }       from './StudentsPage';
import {CreateStudentDialog} from "./dialogs/CreateStudentDialog";
import {useState} from "react";
import {ModifyStudentDialog} from "./dialogs/ModifyStudentDialog";

interface Props {
    student: Student;
    onRemoveStudent: (id: string) => void;
}

export const StudentItem = (props: Props) => {
    const [modifyStudentVisible, setModifyStudentVisible] = useState(false);

    return (
        <div className="flex justify-between w-1/2 bg-blue-200 p-2 text-white">
            <div>
                {
                    props.student.name + ' ' + props.student.surname
                }
            </div>
            <div>{
                (new Date(props.student.birthDate)).getFullYear()
            }</div>
            <div>
                <Button icon="edit" onClick={ () => setModifyStudentVisible(true) }/>
                {
                    modifyStudentVisible &&
                    <ModifyStudentDialog student={ props.student }
                                         isVisible={ modifyStudentVisible }
                                         onClose={ () => setModifyStudentVisible(false) }
                                         onModify={ it => {console.log(it);} }/> }

                <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ () => {
                    instance.delete(`/students/${ props.student.id }`).then(response => {
                        console.log(response);
                        props.onRemoveStudent(props.student.id);
                    });
                } }/>
            </div>
        </div>
    );
};