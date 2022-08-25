import {useEffect, useState} from "react";
import {instance} from "../StudentsTeachersPage";
import {Student} from "../../domain/Entities";
import {Button, Spinner} from "@blueprintjs/core";
import {StudentsList} from "./StudentsList";
import {CreateStudentDialog} from "./dialogs/CreateStudentDialog";

export const StudentsSection = () => {
    const [createStudentVisible, setCreateStudentVisible] = useState(false);
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const effectStudent = async () => {
            const response = await instance.get('/students');

            console.log(response.data); //anche qua dovrei mettere 'await' ?
            setStudents(response.data);
            setIsLoading(false);

            return response;
        }
        effectStudent();

        setIsLoading(true);


    }, [setStudents, setIsLoading]);

    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <StudentsList students={ students } onRemoveStudent={ id => {
                        setStudents(students.filter(it => it.id !== id));
                    }
                    }/>
            }
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateStudentVisible(true) }>
                    Aggiungi studente
                </Button>
            </div>
            {
                createStudentVisible &&
                <CreateStudentDialog isVisible={ createStudentVisible }
                                     onClose={ () => setCreateStudentVisible(false) }
                /> }
        </div>
    );
};