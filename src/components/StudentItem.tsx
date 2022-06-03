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

interface Props {
  student: Student;
}

export const StudentItem = (props: Props) => {
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
          console.log('Mi hai premuto ', props.student.name);
        } }/>
      </div>
    </div>
  );
};