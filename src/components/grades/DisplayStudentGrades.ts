import {
    Button,
    Classes,
    Dialog,
    FormGroup,
    InputGroup,
    Intent
}                   from '@blueprintjs/core';
import { useState } from 'react';
import {instance} from "../StudentsTeachersPage";
import { Student } from "../../domain/Entities";

interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
}

export const DisplayStudentGrade = (props: Props) => {


}