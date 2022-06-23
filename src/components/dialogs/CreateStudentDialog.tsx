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

/*export const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 1000,
    headers: { 'X-Custom-Header': 'foobar' }
});*/

interface Props {
    isVisible: boolean;
    onClose: () => void;
}

export const CreateStudentDialog = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthDate, setBirthDate] = useState(1655805765113);
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    let [inputDate, setInputDate] = useState("2004-01-13");

    function timeToMs(time: Date): number {
        return time.getTime();
    }

    return (
        <Dialog isOpen={ props.isVisible } title="Creazione studente"
                onClose={ props.onClose } className="h-69 w-69">
            <div className={ Classes.DIALOG_BODY }>
                <div>
                    <FormGroup label="Nome" labelFor="name-input">
                        <InputGroup id="name-input" placeholder="name"
                                    onChange={ event => {
                                        setName(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Cognome" labelFor="surname-input">
                        <InputGroup id="surname-input" placeholder="surname"
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
                                   setBirthDate(timeToMs(new Date(event.target.value)));
                               } }/>

                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Telefono" labelFor="tel-input">
                        <InputGroup id="tel-input" placeholder="number"
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
                        props.onClose();
                        const student = { name, surname, email, birthDate, tel };
                        instance.post(`/students`, student).then(response => {
                            const id = response.data?.id;
                            console.log('student added with id of ' + id);
                        });
                    } }>
                        Aggiungi
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};