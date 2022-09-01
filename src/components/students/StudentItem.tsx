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
import {DeleteButton} from "../utilities/buttons/DeleteButton";
import {ModifyButton} from "../utilities/buttons/ModifyButton";
import {GradesButton} from "../utilities/buttons/GradesButton";

interface Props {
    //action: JSX.Element;
    student: Student;
    onRemoveStudent: (id: string) => void;
}



export const StudentItem = (props: Props) => {
    //console.log("StudentID-" + props.student.name + ": " + props.student.id);
    return (
        <div className="flex justify-between gap-4 w-full bg-blue-400 p-2 text-white">
            <div>
                {
                    props.student.name + ' ' + props.student.surname
                }
            </div>
            <div >{
                (new Date(props.student.birthDate)).getFullYear()
            }</div>
            <div className="flex flex-row">
                <GradesButton item={ props.student } itemType={ "Student" } />
                <ModifyButton item={ props.student } itemType={ "Student" } />
                <DeleteButton item={ props.student } itemType={ "Student" }/>
            </div>
        </div>
    );
};

