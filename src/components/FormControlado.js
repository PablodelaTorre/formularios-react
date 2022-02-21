import { useState } from "react";

const Form = () => {
    const [todo, setTodo] = useState({
        todoNombre: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoCheck: false,
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        const { name, value, checked, type } = e.target;

        setTodo((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { todoNombre, todoDescripcion } = todo;

        // pequeña validación
        if (!todoNombre.trim() || !todoDescripcion.trim()) {
            console.log("campos vacíos");
            setError(true);
            return;
        } else {
            setError(false);
        }

        // Enviar todo a un array!
    };

    const PintarError = () => (
        <div className="alert alert-danger">Todos los campos obligatorios</div>
    );

    return (
        <div className="container mt-2">
            <h2>Formulario</h2>
            {error && <PintarError />}
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
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexCheckDefault"
                        checked={todo.todoCheck}
                        onChange={handleChange}
                        name="todoCheck"
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button className="btn btn-primary" type="submit">
                    Agregar
                </button>
            </form>
        </div>
    );
};

export default Form;