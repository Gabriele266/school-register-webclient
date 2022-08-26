import {Grade} from "../../domain/Entities";
import {msToTime} from "../funtions";
import {instance} from "../StudentsTeachersPage";
import {useState} from "react";

interface Props {
    grade: Grade;
}

//DA FARE GRAFICA VOTI

export const GradeItem = (props: Props) => {
    const checkInsufficientGrade = () => {
        const grade = props.grade.value;
        if(grade < 6) return ( <div className="text-red-700">{ grade }</div>);
        else return ( <div className="text-green-700">{ grade }</div>);
    }

    const [teacherName, setTeacherName] = useState("");
    const getTeacherByID = async() => {
        const response = await instance.get(`/teachers/${ props.grade.teacherID }`);
        setTeacherName(response.data.name);
        console.log(teacherName);
    }
    getTeacherByID();
    //codice utile
    //mettere una axios get request dei voti per student

    return (
        <div className="flex justify-between w-full p-2 text-black">
            <div>{ props.grade.subject }</div>
            <div>{ checkInsufficientGrade() }</div>
            <div>{ teacherName }</div>
            <div>{ msToTime(props.grade.dateTime) }</div>
        </div>
    )
}