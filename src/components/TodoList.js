import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";


export default class TodoList extends React.Component {
    
    state = {
        todos: [],
        todosToShow: "all"
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    };
    
    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                } else {
                    return todo;
                }
            })
        })
    }


    updateTodoToShow = (filter) => {
        this.setState({
            todosToShow: filter
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    removeTodoComplete = () => {
        this.setState({
            todos: this.state.todos.filter(todo => !todo.complete)
        })
    }


    render() {

        let todos = [];

        if (this.state.todosToShow === "all") {
            todos = this.state.todos;
        } else if (this.state.todosToShow === "active") {
            todos = this.state.todos.filter(todo => !todo.complete)
        } else if (this.state.todosToShow === "complete") {
            todos = this.state.todos.filter(todo => todo.complete)
        }

        const buttonRemoveComplete = (this.state.todosToShow === "complete" ? 
        <button onClick={this.removeTodoComplete}>Remove Complete</button> : null
        )

        return (
            <div>
                <div>
                    Number of Task/s Left: {this.state.todos.filter(todo => !todo.complete).length}
                </div>
                <TodoForm onSubmit={this.addTodo} />
                
                <button onClick={() => this.updateTodoToShow('all')}>All</button>
                <button onClick={() => this.updateTodoToShow('active')}>Active</button>
                <button onClick={() => this.updateTodoToShow('complete')}> Complete</button>
                {buttonRemoveComplete}
                
                
                {todos.map((todo) => (
                    <Todo key={todo.id} onDelete={() => this.handleDeleteTodo(todo.id)} toggleComplete={() => {this.toggleComplete(todo.id)}} todo={todo}/>
                ))}
            </div>
        )
    }
}