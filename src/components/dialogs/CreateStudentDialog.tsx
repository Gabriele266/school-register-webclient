/*
 * Copyright (c) 2022. Revo Digital
 * ---
 * Author: gabriele
 * File: CreateStudentDialog.tsx
 * Project: school-register-webclient
 * Committed last: 2022/6/10 @ 1623
 * ---
 * Description:
 */

import {Student} from '../../domain/Entities';
import {Button, Classes, Dialog, FormGroup, InputGroup, Intent} from '@blueprintjs/core';
import {useState} from 'react';

interface Props {
  isVisible: boolean;
  onClose: () => void;
  onCreate: (student: Student) => void;
}

export const CreateStudentDialog = (props: Props) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');

  const handleButtonClick = useCallback(() => {
    props.onCreate({
      name: name,
      surname: surname,
      email: email,
      birthDate: birthDate.getDate(),
      tel: tel,
      id: ''
    });
  }, [name, surname, email, birthDate, tel])

  return (
      <Dialog isOpen={props.isVisible} title="Creazione studente"
              onClose={props.onClose} className="h-72 w-69">
        <div className={Classes.DIALOG_BODY}>
          <div className="flex flex-col justify-between h-full">
            <p>Test dialogo</p>
            <div>
              <FormGroup label="Nome" labelFor="name-input">
                <InputGroup id="name-input" placeholder="Giovanni"
                          onChange={ event => {
                            setName(event.target.value);
                          } }/>
            </FormGroup>
          </div>
          <div className="flex justify-end space-x-2">
            <Button onClick={props.onClose}>Chiudi</Button>
            <Button intent={Intent.PRIMARY} icon="add" onClick={handleButtonClick}>
              Aggiungi
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};