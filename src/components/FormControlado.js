import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(todo);
    };

    const handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // setTodo({ ...todo, [e.target.name]: e.target.value });
        setTodo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    // console.log(todo);

    return (
        <div className="container mt-2">
            <h2>Formulario Controlado</h2>
            <form onSubmit={handleSubmit}>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todo.todoNombre}
                    onChange={handleChange}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todo.todoDescripcion}
                    onChange={handleChange}
                />
                <select
                    className="form-control mb-2"
                    name="todoEstado"
                    value={todo.todoEstado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Form;