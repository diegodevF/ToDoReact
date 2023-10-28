const Todo = ({todo, DeleteTodo, UpdateTodo}) =>{

    const {title, description, state, priority, id} = todo;

    console.log(priority)

    return(
        <li className="list-group-item mb-2 shadow p-3 mb-5 bg-body-tertiary rounded"> 
            <div className="d-flex justify-content-between align-items-start">
                <div>
                    <h5 className={`${state && 'text-decoration-line-through'}`}>{title}</h5>
                    <p className={`${state && 'text-decoration-line-through'}`}>{description}</p>
                    <div className="d-flex gap-2">
                        <button onClick={() => DeleteTodo(id)} className="btn btn-sm btn-danger">Eliminar</button>
                        <button onClick={() => UpdateTodo(id)} className="btn btn-sm btn-warning">Actualizar</button>
                    </div>
                </div>
                <span className="badge text-bg-dark float-sm-end">{priority && "Prioridad"}</span>
            </div>
        </li>
    );
}
export default Todo;