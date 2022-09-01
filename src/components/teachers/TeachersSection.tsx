import {useEffect, useState} from "react";
import {Button, Spinner} from "@blueprintjs/core";
import {Teacher} from "../../domain/Entities";
import {instance} from "../StudentsTeachersPage";
import {TeachersList} from "./TeachersList";
import {AddButton} from "../utilities/buttons/AddButton";

export const TeachersSection = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const effectTeacher = async () => {
            const response = await instance.get('/teachers');

            console.log(response.data);
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
            <AddButton itemType={ "Teacher" }/>
        </div>
    );
};