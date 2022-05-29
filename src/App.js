import './App.css';
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, {useEffect, useState} from "react";
import AddTodo from "./MyComponents/AddTodo";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import About from "./MyComponents/About";

function App() {
    const savedTodos = localStorage.getItem("todos")
    const [todos, setTodos] = useState(savedTodos ? JSON.parse(savedTodos) : [])
    useEffect(() => localStorage.setItem("todos", JSON.stringify(todos)), [todos])

    const addTodo = (title, desc) => {
        const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1
        const todo = {
            sno: sno,
            title: title,
            desc: desc
        }
        setTodos([...todos, todo])
    }

    const onDelete = (todo) => {
        setTodos(todos.filter((_todo) => {
            return _todo !== todo
        }))
    }

    return (
        <BrowserRouter>
            <Header title="Todos List" searchBar={false}/>
            <Routes>
                <Route path="/">
                    <Route index element={
                        <>
                            <AddTodo addTodo={addTodo}/>
                            <Todos todos={todos} onDelete={onDelete}/>
                        </>
                    }/>
                    <Route path="about" element={<About/>}/>
                </Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
