import React from "react";
import shortid from "shortid";

export default class TodoForm extends React.Component {
    
    state = {
        text: ""
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false
        })
        this.setState({
            text: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="To-do" value={this.state.text} onChange={this.handleChange}/>
            </form>
            
        )
    }
}