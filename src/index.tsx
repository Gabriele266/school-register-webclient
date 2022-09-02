/*
 * Copyright (c) 2022. Revo Digital 
 * ---
 * Author: gabriele
 * File: index.tsx
 * Project: school-register-webclient 
 * Committed last: 2022/5/26 @ 1638
 * ---
 * Description:
 */

import './style/index.css';
import 'normalize.css/normalize.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';
import '@blueprintjs/select/lib/css/blueprint-select.css';
import '@blueprintjs/table/lib/css/table.css';

import ReactDOM from 'react-dom';
import {StudentsTeachersPage} from './components/StudentsTeachersPage';

const i = [4, 3, 2, 1]
const s = ['ciao', 'lillo']

const teachers = [
  {
    name: 'Piero',
    surname: 'Primo',
    subject: 'matematica'
  }
]

ReactDOM.render(<StudentsTeachersPage/>,
  document.querySelector('#root'));