import {useEffect, useState} from "react";
import {Button, Spinner} from "@blueprintjs/core";
import {Teacher} from "../../domain/Entities";
import {instance} from "../StudentsTeachersPage";
import {TeachersList} from "./TeachersList";
import {CreateTeacherDialog} from "./dialogs/CreateTeacherDialog";

export const TeachersSection = () => {
    const [createTeacherVisible, setCreateTeacherVisible] = useState(false);
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const effectTeacher = async () => {
            const response = await instance.get('/teachers');

            console.log(response.data); //anche qua dovrei mettere 'await' ?
            setTeachers(response.data);
            setIsLoading(false);

            return response;
        }
        effectTeacher();

        setIsLoading(true);


    }, [setTeachers, setIsLoading]);

    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <TeachersList teachers={ teachers } onRemoveTeacher={ id => {
                        setTeachers(teachers.filter(it => it.id !== id));
                    }
                    }/>
            }
            <Button icon="plus" onClick={ () => setCreateTeacherVisible(true) }>
                Aggiungi insegnante
            </Button>
            {
                createTeacherVisible &&
                <CreateTeacherDialog isVisible={ createTeacherVisible }
                                     onClose={ () => setCreateTeacherVisible(false) }
                /> }
        </div>
    );
};