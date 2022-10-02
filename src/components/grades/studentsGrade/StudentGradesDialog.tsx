import {Classes, Dialog, MenuItem, Spinner} from "@blueprintjs/core";
import {useEffect, useState} from "react";
import {instance} from "../../HomePage";
import {Grade, Student} from "../../../domain/Entities";
import {msToTime} from "../../utilities/functions/TsFuntions";
import {ItemRenderer, Select2} from "@blueprintjs/select";
import DataTable from 'react-data-table-component';


interface Props {
    student: Student;
    isVisible: boolean;
    onClose: () => void;
}

export const StudentGradesDialog = (props: Props) => {
    const [isLoading, setIsLoading] = useState(false);

    const [grades, setGrades] = useState<Grade[]>([]);
    const [subjects, setSubjects] = useState<string[]>([]);
    const [menuName, setMenuName] = useState("Mostra per materia");
    const [data, setData] = useState<Grade[]>([]);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const response = await instance.get(`/students/${props.student.id}/grades`);
            setGrades(response.data);
            setData(response.data);
            setSubjects(getSubjects(response.data)); // string[] da usare nel dropdown

            setIsLoading(false);
        })();
    }, [setIsLoading, setGrades]);

    // Funzione stupenda che restituisce un array di materie(string[]) prese una sola volta per voto
    function getSubjects(grades: Grade[]): string[] {
        let arr: string[] = [];
        let check: boolean = true;
        grades.forEach(function(element: Grade) {
            arr.forEach(function (subject: string) {
                if(subject == element.subject) check = false;
            });
            if(check) arr.push(element.subject);
            check = true;
        });
        console.log(arr);
        return arr;
    }

    // Creazione colonne per tabella voti
    const columns = [
        {
            name: 'Materia',
            selector: (row: any) => row.subject,
        },
        {
            name: 'Voto',
            selector: (row: any) => row.value,
            sortable: true,
            //sortFunction: ascendingSort
        },
        {
            name: 'Data',
            selector: (row: any) => msToTime(row.dateTime)
        },
        {
            name: 'Descrizione',
            selector: (row: any) => row.description
        }
    ];

    // Creazione dropdown menu per la selezione della materia
    const SubjectsSelect = Select2.ofType<string>();

    const renderSubjects: ItemRenderer<string> = (subject, {handleClick}) => {
        return (
            <MenuItem
                text={subject}
                onClick={handleClick}
            />
        );
    };

    const handleValueChange = (subject: string) => {
        let array = [];
        for(let i = 0; i < grades.length; i++) {
            if(subject == grades[i].subject) array.push(grades[i]);
        }
        setMenuName(subject);
        setData(array);
    };

    return (
        <Dialog isOpen={props.isVisible} title="Visualizzazione voti"
                onClose={props.onClose} className="min-h-min min-w-min">
            <div className={Classes.DIALOG_BODY}>
                <nav className="button-group pb-3 flex justify-between">
                    <div>
                        <button
                            onClick={() => {
                                setData(grades)
                                setMenuName("Mostra per materia");
                            }} className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg rounded-r-md border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                            Tutti i voti
                        </button>
                    </div>
                    <div>
                        <SubjectsSelect items={ subjects }
                                        itemRenderer={renderSubjects}
                                        noResults={<MenuItem disabled={true} text="No results."  roleStructure="listoption" />}
                                        onItemSelect={handleValueChange}>
                            <button
                                className="py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-l-lg rounded-r-md border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700">
                                { menuName }
                            </button>
                        </SubjectsSelect>
                    </div>
                </nav>

                <div className="flex-1">
                    {
                        isLoading ? <Spinner/> :
                            <DataTable
                                columns={columns}
                                data={data}
                            />
                    }
                </div>
            </div>
        </Dialog>
    );
}
/*  OLD TABLE2 NOT WORKING :(

COLUMNS
const subjectColumn = (index: number) => {
        return <Cell>{grades[index].subject}</Cell>
    }
    const valueColumn = (index: number) => {
        return <Cell>{grades[index].value}</Cell>
    }
    const dateColumn = (index: number) => {
        return <Cell>{msToTime(grades[index].dateTime)}</Cell>
    }
    const descriptionColumn = (index: number) => {
        return <Cell>{grades[index].description}</Cell>
    }

SORTING FUNCTIONS

    const ascendingSort = (rowA: any, rowB: any) => {
        const a = rowA.value;
        const b = rowB.value;

        if (a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }

        return 0;
    };
const ascendingSorted = useCallback(() => {
        const arr = grades.slice();
        arr.sort((a, b) => (a.value < b.value ? -1 : 1));
        setGrades(arr);
        console.log(grades);

    }, [grades, setGrades]);

    const descendingSorted = useCallback(() => {
        const arr = grades.slice();
        arr.sort((a, b) => (a.value > b.value ? -1 : 1));
        setGrades(arr);
        console.log(grades);
    }, [grades, setGrades]);

<Table2 numRows={grades.length}>
                                <Column name="Materia" cellRenderer={subjectColumn}/>
                                <Column name="Voto" cellRenderer={valueColumn}/>
                                <Column name="Data" cellRenderer={dateColumn}/>
                                <Column name="Descrizione" cellRenderer={descriptionColumn}/>
                            </Table2>

DROPDOWN MENU
    <SubjectSelect
    items={Films.items}
    itemPredicate={Films.itemPredicate}
    itemRenderer={Films.itemRenderer}
    noResults={<MenuItem disabled={true} text="No results."  roleStructure="listoption" />}
    onItemSelect={...}
        >
        {// children become the popover target; render value here }
    <Button text={Films.items[0].title} rightIcon="double-caret-vertical" />
</SubjectSelect>,
    
}
*/

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