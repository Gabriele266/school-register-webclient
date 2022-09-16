import {useEffect, useState} from "react";
import {Button, Spinner} from "@blueprintjs/core";
import {Teacher} from "../../domain/Entities";
import {instance} from "../HomePage";
import {TeachersList} from "./TeachersList";
import {CreateTeacherDialog} from "./dialogs/CreateTeacherDialog";

export const TeachersSection = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const [createTeacherVisible, setCreateTeacherVisible] = useState(false);

    useEffect( () => {
        (async () => {
            //setIsLoading(true);   //TODO bug: rimane true per sempre

            const response = await instance.get('/teachers');
            setTeachers(response.data);

            setIsLoading(false);
        })();
    });


    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <TeachersList teachers={ teachers } onRemoveTeacher={ id => {
                        setTeachers(teachers.filter(it => it.id !== id));
                    }
                    }/>
            }
            <div className="p-2 flex justify-end">
                <Button icon="plus" onClick={ () => setCreateTeacherVisible(true) }>
                    Aggiungi insegnante
                </Button>
            </div>
            {
                createTeacherVisible &&
                <CreateTeacherDialog isVisible={ createTeacherVisible }
                                     onClose={ () => setCreateTeacherVisible(false) }
                /> }
        </div>
    );
};