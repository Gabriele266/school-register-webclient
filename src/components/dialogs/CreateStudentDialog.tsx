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

import { Student }  from '../../domain/Entities';
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
import axios from "axios";

/*export const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});*/

interface Props {
    isVisible: boolean;
    onClose: () => void;
    onCreate: (student: Student) => void ;
}

export const CreateStudentDialog = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthDate, setBirthDate] = useState(new Date());
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    let [inputDate, setInputDate] = useState("2004-01-13");

    function msToTime(ms: number): string {
        const date = new Date(ms)
        const y = date.getFullYear()
        const m = date.getMonth()
        const d = date.getDay()

        return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`
    }

    return (
        <Dialog isOpen={ props.isVisible } title="Creazione studente"
                onClose={ props.onClose } className="h-69 w-69">
            <div className={ Classes.DIALOG_BODY }>
                <div>
                    <FormGroup label="Nome" labelFor="name-input">
                        <InputGroup id="name-input" placeholder="Pietro"
                                    onChange={ event => {
                                        setName(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Cognome" labelFor="surname-input">
                        <InputGroup id="surname-input" placeholder="Dalmasso"
                                    onChange={ event => {
                                        setSurname(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Anno di nascita" labelFor="birthDate-input">
                        <input type="date" id="start" name="trip-start"
                               value={inputDate}
                               min="1900-01-01" max="2022-06-13"
                               onChange={ event => {
                                   setInputDate(event.target.value);
                                   setBirthDate(new Date(event.target.value));
                               } }/>

                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Telefono" labelFor="tel-input">
                        <InputGroup id="tel-input" placeholder="3384495822"
                                    onChange={ event => {
                                        setTel(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Email" labelFor="email-input">
                        <InputGroup id="email-input" placeholder="nome.cognome@gmail.com"
                                    onChange={ event => {
                                        setEmail(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div className="flex justify-end space-x-2">
                    <Button onClick={ props.onClose }>Chiudi</Button>
                    <Button intent={ Intent.PRIMARY } icon="add" onClick={ () => {
                        const student = { name: name,
                            surname: surname,
                            email: email,
                            birthDate: birthDate.getTime()/1000,
                            tel: tel,
                            id: ''
                        };
                        //props.onCreate(student);
                        instance.post(`/students`, student).then(response => {
                            console.log('student added' + student.id);
                        });
                    } }>
                        Aggiungi
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};