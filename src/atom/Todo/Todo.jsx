import React, { Component } from 'react';
import Axios from 'axios';
import '../Table/Table.css';
import './Todo.css';

class Todo extends Component{

    constructor(){
        super();
        this.state = {
            name:'React'
        }
        this.getTodos = this.getTodos.bind(this);
    }

    async getTodos () {
        let data = await Axios
                .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
                .then(function(response){
                    return response;
                })
                .catch(function(error){
                    console.log(error);
                })
        this.setState({todos: data.data});
    }

    componentDidMount(){
        this.getTodos();
    }

    render(){
        const { todos } = this.state;
        return(
            <div className="tableFixHead wrapper-table">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Todo</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {
                                todos &&
                                    todos.map(todo => {
                                        return(
                                            <tr>
                                                <td>{ todo.id }</td>
                                                <td><p key={ todo.id } >{ todo.title }</p></td>
                                            </tr>
                                        );
                                    })
                                }
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default Todo;