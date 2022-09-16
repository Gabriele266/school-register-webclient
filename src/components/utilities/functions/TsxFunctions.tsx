export function checkInsufficientGrade(value: number) {
    if(value < 6) return ( <div className="text-red-700">{ value }</div>);
    else return ( <div className="text-green-700">{ value }</div>);
}