import {Button, Classes, Dialog, FormGroup, InputGroup, Intent} from '@blueprintjs/core';
import {useCallback, useState} from 'react';
import {instance} from "../../HomePage";
import {timeToMs} from "../../utilities/functions/TsFuntions";
import {BaseDialogProps} from "./ModifyStudentDialog";

interface Props extends BaseDialogProps { }

export const CreateStudentDialog = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [birthDate, setBirthDate] = useState(1655805765113);
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    let [inputDate, setInputDate] = useState("2004-01-13");


    const handleButtonAddStudent = useCallback(async () => {
        const student = {name, surname, email, birthDate, tel};

        await instance.post(`/students`, student);

        props.onClose();
    }, [name, surname, email, birthDate, tel]);


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
                    <Button intent={ Intent.PRIMARY } icon="add" onClick={ handleButtonAddStudent }>
                        Aggiungi
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};