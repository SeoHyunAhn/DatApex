import React, { Component } from 'react';
import firebase from '../common/firebase';

class Profile extends Component {
    
    constructor(){
        super();
        this.state = {  
            isClickedPassword: false,
            isClickedName: false,
        }
    }
    
    handleResetPassword = (e) => {
        this.setState({
            isClickedPassword: true,
        });        
    }

    handleEditName = (e) => {
        this.setState({
            isClickedName: true,
        });        
    }
    
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Profile</h1>
                        <hr></hr>
                        <h5>* Please make sure that you log in with the public account, and not your Google account.</h5>
                        <br />

                        <div>
                            <label>Email:</label> <span> { firebase.auth().currentUser.email }</span>
                        </div>
                        <div>
                            <label>Name:</label> <span> { firebase.auth().currentUser.displayName }</span>
                        </div>
                        <br />

                        { this.state.isClickedName ? (   <>
                                                    <ChangeName />
                                                </>
                            ) : (   <div>
                                        <button className="btn btn-info btn-block" onClick={ this.handleEditName }>Edit User Name</button>
                                    </div>
                            )
                        }
                        <br />

                        { this.state.isClickedPassword ? (   <>
                                                    <ChangePassword />
                                                </>
                            ) : (   <div>
                                        <button className="btn btn-danger btn-block" onClick={ this.handleResetPassword }>Reset Password</button>
                                    </div>
                            )
                        }
                    </div>
                </div>
                
            </div>
        );
    }
}

class ChangeName extends Component {
    state = {
        name: '',
        error: null,
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        
        const { name } = this.state;

        let updateUser = firebase.auth().currentUser;

        updateUser.updateProfile({
            displayName: name,
        }).then((user) => {
            window.location = "/main";
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

    onChangeInputName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    render() {
        return (
            <>
                <form onSubmit={ this.onSubmitForm }>
                    <div className="form-group">
                        <label>Enter new User Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="New Name" ref={ this.onRefInput } value={ this.state.name } onChange={ this.onChangeInputName } />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-info btn-block">Edit UserName</button>
                    </div>
                </form>
            </>
        );
    }
}


class ChangePassword extends Component {
    state = {
        oldPassword: '',
        password1: '',
        password2: '',
        error: null,
    };
    
    onSubmitForm = (e) => {
        e.preventDefault();
        
        const { oldPassword, password1, password2 } = this.state;

        if(password1 !== password2) {
            alert("Password does not match!!!");
        }
        else {

            let updateUser = firebase.auth().currentUser;

            updateUser.updatePassword(password1)
                .then((user) => {
                    window.location = "/main";
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

    onChangeInputOldPassword = (e) => {
        this.setState({
            oldPassword: e.target.value
        });
    };

    onChangeInputPassword1  = (e) => {
        this.setState({
            password1: e.target.value
        });
    };

    onChangeInputPassword2  = (e) => {
        this.setState({
            password2: e.target.value
        });
    };

    render() {
        return (
            <>
                <form onSubmit={ this.onSubmitForm }>
                    {/* <div className="form-group">
                        <label>Enter current Password:</label>
                        <input type="text" className="form-control" id="oldPassword" placeholder="******" ref={ this.onRefInput } value={ this.state.oldPassword } onChange={ this.onChangeInputOldPassword } />
                    </div> */}
                    <div className="form-group">
                        <label>Enter new Password:</label>
                        <input type="text" className="form-control" id="password1" placeholder="******" ref={ this.onRefInput } value={ this.state.password1 } onChange={ this.onChangeInputPassword1 } />
                    </div>
                    <div className="form-group">
                        <label>Re-enter new Password:</label>
                        <input type="text" className="form-control" id="password2" placeholder="******" ref={ this.onRefInput } value={ this.state.password2 } onChange={ this.onChangeInputPassword2 } />
                    </div>
                    <br />
                    <div className="text-center">
                        <button type="submit" className="btn btn-danger btn-block">Reset Password</button>
                    </div>
                </form>
            </>
        );
    }
}

export default Profile;
