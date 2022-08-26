/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: Entities.ts
 * Project: school-register-webclient
 * Committed last: 2022/5/26 @ 177
 * ---
 * Description:
 */

export interface Student {
  id: string;
  name: string;
  surname: string;
  birthDate: number;
  tel: string;
  email: string;
}

export interface Teacher {
  id: string;
  name: string;
  surname: string;
  tel: string;
  email: string;
  address: string;
  subject: string;
}

export interface Grade {
  id: string;
  studentID: string;
  teacherID: string;
  value: number;
  subject: string;
  dateTime: number;
  description: string;
}