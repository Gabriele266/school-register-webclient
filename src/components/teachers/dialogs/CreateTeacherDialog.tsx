import {Button, Classes, Dialog, FormGroup, InputGroup, Intent} from '@blueprintjs/core';
import {useCallback, useState} from 'react';
import {instance} from "../../HomePage";
import {BaseDialogProps} from "../../students/dialogs/ModifyStudentDialog";


interface Props extends BaseDialogProps { }

export const CreateTeacherDialog = (props: Props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [subject, setSubject] = useState('');

    const handleButtonAddTeacher = useCallback(async () => {
        const teacher = [{ name, surname, email, tel, address, subject }];  //provare senza lista

        await instance.post(`/teachers`, teacher);
        //console.log(response.data);

        props.onClose();    // onClose lo chiamiamo dopo che abbiamo finito di fare tutto, altrimenti con elaborazioni lunghe rischia di crashare
    }, [name, surname, email, tel, address, subject]);

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