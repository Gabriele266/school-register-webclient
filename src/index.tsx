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

import ReactDOM         from 'react-dom';
import { StudentsPage } from './components/StudentsPage';

const students = [
  {
    name: 'Gabriele',
    surname: 'Cavallo',
    birthDate: 1653578458
  },
  {
    name: 'Giovanni',
    surname: 'Paolo',
    birthDate: 1653578458
  }
];

ReactDOM.render(<StudentsPage/>,
  document.querySelector('#root'));