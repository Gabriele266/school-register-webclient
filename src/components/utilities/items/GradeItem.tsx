import {Grade} from "../../../domain/Entities";
import {msToTime} from "../functions/TsFuntions";
import {Cell, Column, Table2} from "@blueprintjs/table";

interface Props {
    grades: Grade[];
    showSubject?: boolean;
    styleType?: string;
}

export const GradeItem = (props: Props) => {
    const subjectColumn = (index: number) => {
        return <Cell>{props.grades[index].subject}</Cell>
    }
    const valueColumn = (index: number) => {
        return <Cell>{props.grades[index].value}</Cell>
    }
    const dateColumn = (index: number) => {
        return <Cell>{msToTime(props.grades[index].dateTime)}</Cell>
    }
    const descriptionColumn = (index: number) => {
        return <Cell>{props.grades[index].description}</Cell>
    }

    const getColumns = () => {
        if(props.showSubject == true) return (
            <Table2 numRows={props.grades.length}>
                <Column name="Materia" cellRenderer={subjectColumn} />
                <Column name="Voto" cellRenderer={valueColumn}/>
                <Column name="Data" cellRenderer={dateColumn}/>
                <Column name="Descrizione" cellRenderer={descriptionColumn}/>
            </Table2>
        );
        else return (
            <Table2 numRows={props.grades.length}>
                <Column name="Voto" cellRenderer={valueColumn}/>
                <Column name="Data" cellRenderer={dateColumn}/>
                <Column name="Descrizione" cellRenderer={descriptionColumn}/>
            </Table2>
        )
    }

    return (    // mettere o no il div in showSubject?
        <div className={props.styleType}>
            {getColumns()}
        </div>
    );
}
/*
{ props.showSubject && props.grade.subject }
            <div>{ checkInsufficientGrade( props.grade.value ) }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
            <div>{ props.grade.description }</div>
 */