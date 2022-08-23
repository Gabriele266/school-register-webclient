import { Student } from '../../domain/Entities';
import {
    Button,
    Classes,
    Dialog,
    FormGroup,
    InputGroup,
    Intent
}                   from '@blueprintjs/core';
import { useState } from 'react';
import {instance} from "../StudentsPage";

interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
    onModify: (student: Student) => void;
}

export const ModifyStudentDialog = (props: Props) => {

    const [name, setName] = useState(props.student.name);
    const [surname, setSurname] = useState(props.student.surname);
    const [birthDate, setBirthDate] = useState(props.student.birthDate);
    const [tel, setTel] = useState(props.student.tel);
    const [email, setEmail] = useState(props.student.email);
    let [inputDate, setInputDate] = useState(msToTime(props.student.birthDate));

    function msToTime(ms: number): string {
        const date = new Date(ms)
        const y = date.getFullYear()
        const m = date.getMonth()
        const d = date.getDay()

        return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`
    }

    function timeToMs(time: Date): number {
        return time.getTime();
    }

    const handleButtonModifyStudent = () => {
        props.onClose();
        const student = { id: props.student.id, name, surname, email, birthDate, tel };
        instance.post(`/students/update`, student).then(response => {
            console.log(student);
        });
    }

    return (
      <Dialog isOpen={ props.isVisible } title="Modifica studente"
              onClose={ props.onClose } className="h-69 w-69">
          <div className={ Classes.DIALOG_BODY }>
              <div>
                  <FormGroup label="Nome" labelFor="name-input">
                      <InputGroup id="name-input" value={ name }
                                  onChange={ event => {
                                      setName(event.target.value);
                                  } }/>
                  </FormGroup>
              </div>
              <div>
                  <FormGroup label="Cognome" labelFor="surname-input">
                      <InputGroup id="surname-input" value={ surname }
                                  onChange={ event => {
                                      setSurname(event.target.value);
                                  } }/>
                  </FormGroup>
              </div>
              <div>
                  <FormGroup label="Anno di nascita" labelFor="birthDate-input">
                      <input type="date" id="start" name="trip-start"
                             value={ inputDate }
                             min="1900-01-01" max="2022-06-13"
                             onChange={ event => {
                                 setInputDate(event.target.value);
                                 setBirthDate(timeToMs(new Date(event.target.value)));
                             } }/>
                  </FormGroup>
              </div>
              <div>
                  <FormGroup label="Telefono" labelFor="tel-input">
                      <InputGroup id="tel-input" value={ tel }
                                  onChange={ event => {
                                      setTel(event.target.value);
                                  } }/>
                  </FormGroup>
              </div>
              <div>
                  <FormGroup label="Email" labelFor="email-input">
                      <InputGroup id="email-input" value={ email }
                                  onChange={ event => {
                                      setEmail(event.target.value);
                                  } }/>
                  </FormGroup>
              </div>
              <div className="flex justify-end space-x-2">
                  <Button onClick={ props.onClose }>Chiudi</Button>
                  <Button intent={ Intent.PRIMARY } icon="edit" onClick={ handleButtonModifyStudent }>
                      Modifica
                  </Button>
              </div>
          </div>
      </Dialog>
    );
};
