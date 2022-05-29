import React from 'react';
import Todo from "./Todo";

function Todos(props) {
    const style = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={style}>
            <h3 className="my-3">Todos List</h3>
            {
                props.todos.length === 0
                    ? "No todos to display"
                    : props.todos.map((todo) => {
                        return <Todo key={todo.sno} todo={todo} onDelete={props.onDelete}/>
                    })
            }
        </div>
    );
}

export default Todos;