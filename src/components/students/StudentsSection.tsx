import {useEffect, useState} from "react";
import {instance} from "../StudentsTeachersPage";
import {Student} from "../../domain/Entities";
import {Spinner} from "@blueprintjs/core";
import {AddButton} from "../utilities/buttons/AddButton";
import {StudentItem} from "../utilities/items/StudentItem";

export const StudentsSection = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        (async () => {
            //setIsLoading(true);   //bug: rimane true per sempre

            const response = await instance.get('/students');
            setStudents(response.data);

            setIsLoading(false);
        })();
    });

    return (
        <div className="flex-1">
            {
                isLoading ? <Spinner/> :
                    <div>
                        {
                            students.map(it => <StudentItem student={it}
                                                            actions={[<div>ciao</div>]} //TODO aggiungere i buttons
                                                            showOnlyYear    //significa true
                                                            showCompleteName
                                                            styleType="grid grid-cols-3 gap-3 w-full bg-blue-400 p-2 text-white"

                            />)
                        }
                    </div>

            }
            {
                // TODO: Togliere il componente a parte AddButton, è troppo specifico e non ci serve praticamente a nulla.
                // la sua logica verrà implementata direttamente qua dentro
            }
            <AddButton itemType={"Student"}/>
        </div>
    );
};