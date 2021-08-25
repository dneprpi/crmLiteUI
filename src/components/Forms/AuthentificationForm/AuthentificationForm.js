import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { singInUser } from '../../../requests';
import styles from '../style.module.css';

export default class SingINForm extends Component {

    constructor(){
        super();
    
        this.state = {
            fields: {},
            errors: {}
        }
    }
        
    submitForm(e) {
        e.preventDefault();

        if(this.handleValidation()){
            alert("Form submitted");
         }else{
            alert("Form has errors.")
         }

        const formData = new FormData(e.target);
        const object = {};

        formData.forEach((value, key) => object[key] = value);
        const json = JSON.stringify(object);

        singInUser(json)
            .then(answer => console.log(answer));
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
      
        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Cannot be empty";
        }
      
        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');
      
           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }

            //password
        if(!fields["password"]){
            formIsValid = false;
            errors["password"] = "Cannot be empty";
         }
         
         if(typeof fields["password"] !== "undefined"){
            if(!fields["password"].match(/^(?=.*?[A-Z])(?=.*?[a-z])((?=.*?[0-9])|(?=.*?[#?!@$%^&*-]))/)){
               formIsValid = false;
               errors["password"] = "Only letters";
            }        
         }
       }  
      
       this.setState({errors: errors});
       return formIsValid;
      }
      
    
      handleChange(field, e){         
        let fields = this.state.fields;
        fields[field] = e.target.value;        
        this.setState({fields});
      }
    

    render() {
        return (
            <div className={ styles.formBlock }>
                <h2 className={ styles.formTitle }>Login form</h2>

                <form onSubmit={this.submitForm.bind(this)}>
                    <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="E-mail" 
                        className={ styles.formControl }
                        onChange={this.handleChange.bind(this, "email")} 
                        value={this.state.fields["email"]}
                    />
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        className={ styles.formControl }
                        onChange={this.handleChange.bind(this, "password")} 
                        value={this.state.fields["password"]}
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