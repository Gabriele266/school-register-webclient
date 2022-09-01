import {instance} from "../../StudentsTeachersPage";
import {Student, Teacher} from "../../../domain/Entities";
import {Button, Intent} from "@blueprintjs/core";

interface Props {
    item: Student | Teacher;
    itemType: string;
}

export const DeleteButton = (props: Props) => {

    const handleButtonDeleteItem = async () => {
        return await instance.delete(`/${props.itemType.toLowerCase() + "s"}/${props.item.id}`);
    }
    return (
        <div>
            <Button icon="trash" minimal intent={ Intent.DANGER } onClick={ handleButtonDeleteItem }/>
        </div>
    )

}