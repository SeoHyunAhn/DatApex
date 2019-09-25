import React, { Component } from 'react';

import firebase from '../common/firebase';

import { Row, Col } from 'antd';
import Button from 'antd/es/button';

import Logo from "../images/Logo.jpeg";


const styleLogo = {
    marginTop : '40px',
};

const styleButton = {
    marginTop : '25px',
};

class Login extends Component {
    login = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup( provider )
            .then( res => {
                console.log( "res.credential : ", res.credential );
                console.log( "res.user : ", res.user );

                console.log( "res.user.displayName : ", res.user.displayName );
                console.log( "res.user.photoURL : ", res.user.photoURL );
                console.log( "res.user.email : ", res.user.email );
                console.log( "res.user.uid : ", res.user.uid );
            })
            .catch( err => {
                alert('login failed : ' , err.message );
                console.log(err)
            })
        
        
    };
    
    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        
                        <img src={ Logo } alt= "logo" style={ styleLogo } />
                        <Button type="primary" block style={ styleButton }>Sign In with Personal Email</Button>
                        <Button type="primary" block style={ styleButton } onClick={ this.login }>Sign In with Google Account</Button>
                        <Button type="danger" block style={ styleButton }>Create new Account</Button>

                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}

export default Login;