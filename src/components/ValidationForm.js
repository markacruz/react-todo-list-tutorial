import React from "react";

const initialState = {
    name: "",
    email: "",
    password: "",
    nameError: "",
    emailError: "",
    passwordError: ""
}

export default class ValidationForm extends React.Component {
    
    state = initialState;
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    validate = () => {
        let nameError = "";
        let emailError = "";
        let passwordError = "";


        if (!this.state.name) {
            nameError = "Name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email";
        }

        if (!this.state.password) {
            passwordError = "Invalid Password";
        }

        if (nameError || emailError || passwordError) {
            this.setState({ nameError, emailError, passwordError});
            return false;
        }

        return true;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState( initialState )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                
                <input name="name" placeholder="name" value={this.state.name} onChange={this.handleChange}/><br />
                <div style={{font: 12, color: "red"}}>{this.state.nameError}</div>
                
                <input name="email" placeholder="email" value={this.state.email} onChange={this.handleChange}/><br/>
                <div style={{font: 12, color: "red"}}>{this.state.emailError}</div>
                
                <input name="password" placeholder="password" type="password" value={this.state.password} onChange={this.handleChange} /><br/>
                <div style={{font: 12, color: "red"}}>{this.state.passwordError}</div>

                <button type="submit">Submit</button>
            </form>
        )
    }
}