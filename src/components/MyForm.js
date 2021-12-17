import React from "react";

export default class MyForm extends React.Component {
    
    state = {
        name: "mark",
        favoritePet: "marcus",
        rememberMe: false,
        title: 'Mr.'
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" value={this.state.name} onChange={this.handleChange}/>
                <textarea name="favoritePet" value={this.state.favoritePet} onChange={this.handleChange}/>
                <input name="rememberMe" type="checkbox" checked={this.state.rememberMe} onChange={this.handleChange} />
            
                <div>
                    <select name="title" value={this.state.title} onChange={(event) => this.handleChange(event, "title")}>
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                    </select>
                </div>
            
                <button type="submit">Submit</button>

            </form>

            

        )
    }
}