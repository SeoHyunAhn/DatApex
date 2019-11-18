import React from 'react';
import App from 'next/app';
import Layout from "../components/layout";
import firebase from '../common/firebase';

class MyApp extends App {
    constructor() {
        super();
    
        this.state = ({
            user: null,
        });
    
        this.authListener = this.authListener.bind(this);
    }
    
    componentDidMount() {
        this.authListener();
    }
    
    authListener() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
            } else {
                this.setState({ user: null });
            }
        });
    }
    
    render () {
        const { Component, pageProps } = this.props
        
        return (
            <Layout user={ this.state.user }>
                <Component { ...pageProps } />
            </Layout>
        )
    }
}

export default MyApp;