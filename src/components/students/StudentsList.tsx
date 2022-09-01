import { Student }     from '../../domain/Entities';
import {StudentItem} from "../utilities/StudentItem";


interface Props {
  students: Student[];
  onRemoveStudent: (id: string) => void;
}

export const StudentsList = (props: Props) => {
  return (
      <div>
        {
          props.students.map(it => <StudentItem student={ it }
                                                itemType={ "Student" }
                                                />)
        }
      </div>
  );
};