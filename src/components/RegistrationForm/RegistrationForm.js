import React, { Component } from "react";
import './style.css';
import { registerUser } from '../../requests';

export default class RegistrationForm extends Component {
    submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const object = {};

        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);

        registerUser(json)
            .then(answer => console.log(answer));
    }

    render() {
        return (
            <div>
                <h2>Registration form</h2>
                <br />

                <form onSubmit={this.submitForm}>
                    <div className="formGroup">
                        <label htmlFor="firstname">Firstname:</label>
                        <input id="firstname" name="firstName" type="text" defaultValue="Oleksanra" />
                    </div>
                    <div className="formGroup">
                        <label htmlFor="lasttname">Lasttname:</label>
                        <input id="lasttname" name="lastName" type="text" defaultValue="Kondratenko"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="email">E-mail:</label>
                        <input id="email" name="email" type="email" defaultValue="oleksandrakondratenko@gmail.com"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="password">Password:</label>
                        <input id="password" name="password" type="password" defaultValue="Aa12345!"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="pasportNumber">Pasport number:</label>
                        <input id="pasportNumber" name="passportNumber" type="text" defaultValue="aaa"/>
                    </div>
                    <div className="formGroup">
                        <label htmlFor="tin">Tin:</label>
                        <input id="tin" name="tin" type="text" defaultValue="aaa"/>
                    </div>

                    <button type="submit">Send</button>
                </form>
            </div>
        )
    }

}