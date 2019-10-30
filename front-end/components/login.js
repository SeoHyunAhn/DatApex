import React, { Component } from 'react';
import Link from 'next/link';
import User from '../common/user';
import firebase from '../common/firebase';

const styleLogo = {
    height: '500px',
    width: '700px',
};

class Login extends Component {
    
    loginWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup( provider )
            .then( res => {
                console.log( "res.credential : ", res.credential );
                console.log( "res.user : ", res.user );

                console.log( "res.user.displayName : ", res.user.displayName );
                console.log( "res.user.photoURL : ", res.user.photoURL );
                console.log( "res.user.email : ", res.user.email );
                console.log( "res.user.uid : ", res.user.uid );

                const token = res.credential.accessToken;
                const name = res.user.displayName;
                const email = res.user.email;
                const avatar = res.user.photoURL;
                const uid = res.user.uid;

                User.user = {
                    token,
                    uid,
                    name,
                    email,
                    avatar,
                };

                console.log(User.user);
            })
            .catch( err => {
                alert('Login failed : ' , err.message );
                console.log(err);
            })
    };


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        {/* <h1>Log In</h1>
                        <hr></hr> */}
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <img src="../static/Logo.png" alt="logo" />
                        <br />
                        
                        <Link href="/signIn">
                            <a className="btn btn-primary">Sign In with Personal Account</a>
                        </Link>

                        <br />
                        <br />

                        <button className="btn btn-primary" onClick={ this.loginWithGoogle }>
                            Sign In with Google Account
                        </button>

                        <br />
                        <br />

                        <Link href="/signUp">
                            <a className="btn btn-primary">Sign Up</a>
                        </Link>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
