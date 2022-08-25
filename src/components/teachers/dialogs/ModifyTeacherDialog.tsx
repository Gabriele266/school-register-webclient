import {Button, Classes, Dialog, FormGroup, InputGroup, Intent} from "@blueprintjs/core";
import {instance} from "../../StudentsTeachersPage";
import {Teacher} from "../../../domain/Entities";
import {useState} from "react";
import {msToTime, timeToMs} from "../../funtions";


interface Props {
    teacher: Teacher;
    isVisible: boolean;
    onClose: () => void;
    onModify: (teacher: Teacher) => void;
}

export const ModifyTeacherDialog = (props: Props) => {

    const [name, setName] = useState(props.teacher.name);
    const [surname, setSurname] = useState(props.teacher.surname);
    const [birthDate, setBirthDate] = useState(props.teacher.birthDate);
    const [tel, setTel] = useState(props.teacher.tel);
    const [email, setEmail] = useState(props.teacher.email);
    let [inputDate, setInputDate] = useState(msToTime(props.teacher.birthDate));
    const [address, setAddress] = useState(props.teacher.address);
    const [subject, setSubject] = useState(props.teacher.subject);



    const handleButtonModifyTeacher = async () => {
        props.onClose();
        const teacher = { id: props.teacher.id, name, surname, email, birthDate, tel, address, subject };
        const response = await instance.post(`/teachers/update`, teacher);
    }

    return (
        <Dialog isOpen={ props.isVisible } title="Modifica teachere"
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
                <div>
                    <FormGroup label="Indirizzo" labelFor="address-input">
                        <InputGroup id="address-input" value={ address }
                                    onChange={ event => {
                                        setAddress(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup label="Materia" labelFor="subject-input">
                        <InputGroup id="subject-input" value={ subject }
                                    onChange={ event => {
                                        setSubject(event.target.value);
                                    } }/>
                    </FormGroup>
                </div>
                <div className="flex justify-end space-x-2">
                    <Button onClick={ props.onClose }>Chiudi</Button>
                    <Button intent={ Intent.PRIMARY } icon="edit" onClick={ handleButtonModifyTeacher }>
                        Modifica
                    </Button>
                </div>
            </div>
        </Dialog>
    );
};
