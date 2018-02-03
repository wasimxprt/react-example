import React, { Component } from 'react';
import { FormErrors } from './FormErrors'

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
    }

    handleUserInput(e) {
        console.log("Here")
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {

        return (
            <div className="row">

                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>

                <form className="col-md-6">
                    <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" onChange={(event) => this.handleUserInput(event)} className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} />
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={(event) => this.handleUserInput(event)} className="form-control" id="password" name="password" placeholder="Password" />
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1"> &nbsp;&nbsp;Remember me</label>
                    </div>

                    <button type="submit" className="btn btn-primary"
                        disabled={!this.state.formValid}>Sign In</button>
                </form>
            </div >
        );
    }
};

export default Form;