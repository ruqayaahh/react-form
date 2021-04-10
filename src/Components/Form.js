import React, { Component } from 'react';
import '../Form.css';

class Form extends Component {
    constructor(properties) {
        super(properties);
        this.state = {
            fullname: '',
            phone: '',
            email: '',
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            fullname: event.target.value,
        })
    }
    handlePhoneChange(event) {
        this.setState({
            phone: event.target.value,
        })
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value,
        })
    }

    handleSubmit(event) {
        alert(`You have submitted the following: ${this.state.fullname}, ${this.state.phone}, ${this.state.email}`);
        event.preventDefault();
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                    <h3>Contact Form</h3>
                    <div>
                        <label>
                            Fullname:
                            <input type="text" name="fullName" value={this.state.fullname} onChange={this.handleNameChange} placeholder="john doe"></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Phone Number:
                            <input type="tel" name="phoneNumber" value={this.state.phone} onChange={this.handlePhoneChange} placeholder="+234 8189706105"></input>
                        </label>
                    </div>
                    <div>
                        <label>
                            Email address:
                            <input type="email" name="emailAddress" value={this.state.email} onChange={this.handleEmailChange} placeholder="aderinolaruqayaah@gmail.com"></input>
                        </label>
                    </div>
                    <div>
                        <button type="submit" value="Submit">Submit</button>
                    </div>
                </form>
            </div>
        );
    };
}

export default Form;