import React, { Component } from 'react';
import firebase from '../common/firebase';

class SignUp extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <br />
                        <h1>Register</h1>
                        <hr></hr>
                        <SignUpForm />
                    </div>
                </div>
                
            </div>
        );
    }
}

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        rePassword: '',
        error: null,
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        
        const { id, email, password, rePassword } = this.state;

        if(password !== rePassword) {
            alert("Password does not match!!!");
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((user) => {
                    window.location = "/";
                })
                .catch((error) => {
                    alert(error);
                    this.setState({ error: error });
                });
        }
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    onChangeInputEmail = (e) => {
        this.setState({
            email : e.target.value
        });
    };

    onChangeInputPassword  = (e) => {
        this.setState({
            password : e.target.value
        });
    };

    onChangeInputRePassword  = (e) => {
        this.setState({
            rePassword : e.target.value
        });
    };

    render() {
        
        return (
            <>
                <form onSubmit={ this.onSubmitForm }>
                    <div className="form-group">
                        <label>Email:</label>
                        <input type="text" className="form-control" id="email" placeholder="Email" ref={ this.onRefInput } value={ this.state.email } onChange={ this.onChangeInputEmail } />
                    </div>

                    <div className="form-group">
                        <label>Password:</label>
                        <input type="text" className="form-control" id="password" placeholder="******" ref={ this.onRefInput } value={ this.state.password } onChange={this.onChangeInputPassword} />
                    </div>

                    <div className="form-group">
                        <label>Re-enter Password:</label>
                        <input type="text" className="form-control" id="password" placeholder="******" ref={ this.onRefInput } value={ this.state.rePassword } onChange={ this.onChangeInputRePassword } />
                    </div>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                    </div>
                </form>
            </>
        );
    }
}

export default SignUp;
