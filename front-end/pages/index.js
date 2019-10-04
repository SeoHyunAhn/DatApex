import React, { Component } from 'react';
import firebase from '../common/firebase';

import Layout from '../components/layout';
import Login from '../components/login';
import Main from './main';

import User from '../common/user';

class Index extends Component {
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

  render() {
    return (
      <div>
        <div>
          { this.state.user ? 
            ( <>
                <Layout user={ this.state.user }> 
                  <Main /> 
                </Layout>
              </>
            ) : ( <>
                    <Login />
                  </> 
                )
          }
        </div>
      </div>
    );
  }
}

export default Index;
