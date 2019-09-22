import React, { Component } from 'react';
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
    render() {
        return (
            <div className="App">
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        
                        <img src={ Logo } alt= "logo" style={ styleLogo } />
                        <Button type="primary" block style={ styleButton }>Sign In with Personal Email</Button>
                        <Button type="primary" block style={ styleButton }>Sign In with Google Account</Button>
                        <Button type="danger" block style={ styleButton }>Create new Account</Button>

                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        );
    }
}

export default Login;