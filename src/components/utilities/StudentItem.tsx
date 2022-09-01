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

interface Props {
    action: JSX.Element;
    student: Student;
    onRemoveStudent: (id: string) => void;
}


export const StudentItem = (props: Props) => {
    //console.log("StudentID-" + props.student.name + ": " + props.student.id);


    const [modifyStudentVisible, setModifyStudentVisible] = useState(false);
    const [studentGradesVisible, setStudentGradesVisible] = useState(false);

    return (
        <div className="grid grid-cols-3 gap-3 w-full bg-blue-400 p-2 text-white">
            <div>
                {
                    props.student.name + ' ' + props.student.surname
                }
            </div>
            <div>{
                props.student.birthDate
            }</div>
            <div>
                { props.action }
            </div>
        </div>
    );
};

