import {
    Button,
    Classes,
    Dialog,
    FormGroup,
    InputGroup,
    Intent
}                   from '@blueprintjs/core';
import { useState } from 'react';
import {instance} from "../../StudentsTeachersPage";
import {timeToMs} from "../../funtions";


interface Props {
    isVisible: boolean;
    onClose: () => void;
}

export const CreateTeacherDialog = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthDate, setBirthDate] = useState(1655805765113);
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    let [inputDate, setInputDate] = useState("1985-05-21");
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');


    const handleButtonAddTeacher = async () => {
        props.onClose();
        const teacher = { name, surname, email, birthDate, tel, address, subject };
        const response = await instance.post(`/teachers`, teacher);
    }

    return (
        <Dialog isOpen={ props.isVisible } title="Creazione insegnante"
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
                <div>
                    <FormGroup label="Indirizzo" labelFor="address-input">
                        <InputGroup id="address-input" placeholder=""
                                    onChange={ event => {
                                        setAddress(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Materia" labelFor="subject-input">
                        <InputGroup id="subject-input" placeholder="italiano"
                                    onChange={ event => {
                                        setSubject(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div className="flex justify-end space-x-2">
                    <Button onClick={ props.onClose }>Chiudi</Button>
                    <Button intent={ Intent.PRIMARY } icon="add" onClick={ handleButtonAddTeacher }>
                        Aggiungi
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};