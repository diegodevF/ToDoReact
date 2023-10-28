import { useState } from "react"
import Swal from "sweetalert2";

const Formulario = ({addTodo}) => {

    const [todo, setTodo] = useState({
        title: "toDo #1",
        description: "Descripcion #1",
        state: "",
        priority: true,
    });

    const {title, description, state, priority} = todo;

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!title.trim() || !description.trim() || !state.trim()){
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Ningun campo puede estar Vacio!',
              });
        }

        addTodo({
            id: Date.now(),
            ...todo,
            state: state === 'completado'
        })

        return Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'To do Agregado Correctamente',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const handleChange = (e) =>{
        const {name, type, checked, value} = e.target;

        setTodo({
            ...todo,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    return (
        <form action="POST" onSubmit={handleSubmit} >
            <input type="text" 
            placeholder="Ingrese Todo" 
            className="form-control mb-2" 
            name="title" 
            value={title} 
            onChange={handleChange} />

            <textarea className="form-control mb-2" 
            placeholder="Ingrese Descripcion" 
            name="description" 
            value={description} 
            onChange={handleChange}/>

            <div className="form-check mb-2">
                <input type="checkbox" 
                name="priority" 
                className="form-check-input" 
                id="inputCheck" 
                checked={priority}
                onChange={handleChange}
                />
                <label htmlFor="inputCheck">Dar Prioridad</label>
            </div>

            <select className="form-select mb-2" 
            name="state" 
            value={state} 
            onChange={handleChange}>
                <option value="">Seleccione</option>
                <option value="pendiente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>
            <button type="submit" name="btn btn-primary">Agregar toDo</button>
        </form>
    )

}
export default Formulario;