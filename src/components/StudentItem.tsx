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

import {Student} from '../domain/Entities';
import {Button, Intent} from '@blueprintjs/core';
import {instance} from './StudentsPage';
import {useEffect} from 'react';

interface Props {
  student: Student;
  onRemoveStudent: (id: string) => void;
}

export const StudentItem = (props: Props) => {
  useEffect(() => {
    const student = {
      name: 'Mimmo',
      surname: 'Lillo',
      birthDate: 543904358,
      tel: 'jfdkslajfd',
      email: 'gabri@mail.no'
    } as Student;

    instance.post("students", student).then(result => {
      console.log(result);
    })
  });

  return (
      <div className="flex justify-between w-1/2 bg-bpgray-300 p-2 text-white">
        <div>
          {
              props.student.name + ' ' + props.student.surname
          }
        </div>
        <div>{
          (new Date(props.student.birthDate * 1000)).getFullYear()
      }</div>
      <div>
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