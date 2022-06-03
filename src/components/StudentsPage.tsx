/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: StudentsPage.tsx
 * Project: school-register-webclient
 * Committed last: 2022/6/3 @ 1620
 * ---
 * Description:
 */

import { StudentsList }        from './StudentsList';
import { useEffect, useState } from 'react';
import { Student }             from '../domain/Entities';
import axios                   from 'axios';
import { Spinner }             from '@blueprintjs/core';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export const StudentsPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    instance.get('/students').then(response => {

      setTimeout(() => {
        console.log(response.data);
        setStudents(response.data);
        setIsLoading(false);
      }, 1000);
    });

    console.log('Ciao');
  }, [setStudents, setIsLoading]);

  return (
    <div>
      {
        isLoading ? <Spinner/> : <StudentsList students={ students }/>
      }
    </div>
  );
};