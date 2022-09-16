
export {}
/*
export abstract class GenericList <T> {

    protected list(items) {
        return (
            <div>
                {
                    items.map(it => <TeacherItem teacher={ it }
                                                 onRemoveItem={ props.onRemoveTeacher
                                                          }/>)
                }
            </div>
        )
    }
}

class GradesList extends GenericList<Grade> {
    list(grade: Grade) {
        return (

        )
    }
}

/*
export abstract class BaseClass<TParam> {
  protected abstract process(param: TParam): void;
}
* */