/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: StudentsList.tsx
 * Project: school-register-webclient
 * Committed last: 2022/5/26 @ 1725
 * ---
 * Description:
 */

import { Student }     from '../domain/Entities';
import { StudentItem } from './StudentItem';

interface Props {
  students: Student[];
}

export const StudentsList = (props: Props) => {
  return (
    <div>
      {
        props.students.map(it => <StudentItem student={ it }/>)
      }
    </div>
  );
};