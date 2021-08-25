import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { singInLead } from '../../../requests';
import styles from '../style.module.css';

export default class SingINForm extends Component {
    submitForm(e) {
        e.preventDefault();

        const formData = new FormData(e.target);
        const object = {};

        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);

        singInLead(json)
            .then(answer => console.log(answer));
    }

    render() {
        return (
            <div className={ styles.formBlock }>
                <h2 className={ styles.formTitle }>Login form</h2>

                <form onSubmit={this.submitForm}>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="E-mail" 
                        className={ styles.formControl }
                    />
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        className={ styles.formControl }
                    />

                    <div className={ styles.bottomButtons }>
                        <button type="submit" className={ 'btn ' + styles.sendButton }>
                            Sign in
                        </button>
                        
                        <Link to='/register'>
                            <button className={ 'btn ' + styles.sendButton }>
                                Sign up
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        )
    }

}