import {useEffect, useState} from "react";
import {instance} from "../StudentsTeachersPage";
import {Student} from "../../domain/Entities";
import {Spinner} from "@blueprintjs/core";
import {StudentsList} from "./StudentsList";
import {AddButton} from "../utilities/buttons/AddButton";

export const StudentsSection = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        const effectStudent = async () => {
            const response = await instance.get('/students');

            console.log(response.data);
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
            <AddButton itemType={ "Student"}/>
        </div>
    );
};