import {Classes, Dialog, Spinner} from "@blueprintjs/core";
import {useCallback, useEffect, useState} from "react";
import {instance} from "../../HomePage";
import {Grade, Student} from "../../../domain/Entities";
import {Cell, Column, Table2} from "@blueprintjs/table";
import {msToTime} from "../../utilities/functions/TsFuntions";

interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
}

export const StudentGradesDialog = (props: Props) => {
    const [grades, setGrades] = useState<Grade[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect( () => {
        (async () => {
            setIsLoading(true);

            const response = await instance.get(`/students/${ props.student.id }/grades`);
            setGrades(response.data);

            setIsLoading(false);
        })();
    }, [setIsLoading, setGrades]);


    const subjectColumn = (index: number) => {
        console.log("ciao");
        return <Cell>{grades[index].subject}</Cell>
    }
    const valueColumn = (index: number) => {
        console.log("ok");
        return <Cell>{grades[index].value}</Cell>
    }
    const dateColumn = (index: number) => {
        return <Cell>{msToTime(grades[index].dateTime)}</Cell>
    }
    const descriptionColumn = (index: number) => {
        return <Cell>{grades[index].description}</Cell>
    }


    const ascendingSorted = useCallback(() => {
        const arr = grades.slice();
        arr.sort((a, b) => (a.value < b.value ? -1 : 1));
        setGrades(arr);
        console.log(grades);

    }, [grades, setGrades]);


    return(
        <Dialog isOpen={ props.isVisible } title="Visualizzazione voti"
                onClose={ props.onClose } className="min-h-min min-w-min">
            <div className={ Classes.DIALOG_BODY }>

                    <nav className="button-group pb-3 flex justify-start">
                        <button  className="justify-self-start py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                            Materia</button>
                        <button onClick={ ascendingSorted } className="py-2 px-4 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                            Crescente</button>
                        <button className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-r-md border border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                            Decrescente</button>
                    </nav>

                <div className="flex-1">
                    {   //non si aggiorna la table
                        isLoading ? <Spinner/> :
                            <Table2 numRows={grades.length}>
                                <Column name="Materia" cellRenderer={subjectColumn} />
                                <Column name="Voto" cellRenderer={valueColumn}/>
                                <Column name="Data" cellRenderer={dateColumn}/>
                                <Column name="Descrizione" cellRenderer={descriptionColumn}/>
                            </Table2>
                    }
                </div>
            </div>
        </Dialog>
    )
    
}

/*
const handleGrades = useCallback(async () => {
        const response = await instance.get(`/students/${ props.student.id }/grades`);
        setGrades(response.data);
    }, [setGrades]);
 */

/*
                                <div className="grid grid-cols-4 gap-2 p-2">
                                    <div>Materia</div>
                                    <div>Voto</div>
                                    <div>Data</div>
                                    <div>Descrizione</div>
                                    <br/>
                                </div>
                                {
                                    grades.map(it => <GradeItem grade={ it }
                                                                      showSubject
                                                                      styleType="grid grid-cols-4 gap-2 p-2 text-black"
                                    />)
                                }
 */