import {Grade} from "../../domain/Entities";

export function msToTime(ms: number): string {
        const date = new Date(ms)
        const y = date.getFullYear()
        const m = date.getMonth()+1
        const d = date.getDay()

        return `${y}-${m < 10 ? `0${m}` : m}-${d < 10 ? `0${d}` : d}`
    }

export function timeToMs(time: Date): number {
        return time.getTime();
}

export function getSubjectGrades(grades: Grade[], subject: string): Grade[] {
    let array = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject === subject) {
            //console.log(grades[i].value);
            array.push(grades[i]);
        }
        //else console.log("nothing yet_" + i);
    }
    return array as Grade[];
}