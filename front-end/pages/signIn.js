import React, { Component } from 'react';
import firebase from '../common/firebase';

class SignIn extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <br />
                        <h1>Log In</h1>
                        <hr></hr>
                        <SignInForm />
                    </div>
                </div>
                
            </div>
        );
    }
}

class SignInForm extends Component {
    state = {
        email: '',
        password: '',
        error: null,
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        
        const { email, password } = this.state;

        console.log(email);
        console.log(password);

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                window.location = "/";
            })
            .catch((error) => {
                alert(error);
                this.setState({ error: error });
            });
    };

    input;

    onRefInput = (c) => {
        this.input = c;
    };

    onChangeInputEmail  = (e) => {
        this.setState({
            email : e.target.value
        });
    };

    onChangeInputPassword  = (e) => {
        this.setState({
            password : e.target.value
        });
    };

    render() {
        
        return (
            <>
                <form onSubmit={ this.onSubmitForm }>
                    <div className="form-group">
                        <label>User Account</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="ID (Email)" ref={ this.onRefInput } value={ this.state.email } onChange={ this.onChangeInputEmail } />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="******" ref={ this.onRefInput } value={ this.state.password } onChange={this.onChangeInputPassword} />
                    </div>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary btn-block">Sign in</button>
                    </div>
                </form>
            </>
        );
    }
}

export default SignIn;
