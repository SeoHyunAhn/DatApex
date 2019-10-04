import React from "react";
// import Link from "next/link";
import User from "../common/user";
import firebase from '../common/firebase';
import Main from '../pages/main';
import { Link, Router } from '../routes'

const styleTextWhite = {
    color: 'white',
};

const styleName = {
    marginRight: '20px',
}

class Layout extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = ({
            user: this.props.user,
        });

        this.logout = this.logout.bind(this);
    }

    logout = () => {
        firebase.auth().signOut();
        window.location = 'http://localhost:3000/';
    };

    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="/">
                        DatApex
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            
                            <li className="nav-item dropdown">
                                <a  className="nav-link dropdown-toggle" 
                                    href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                >
                                    Pre Process Data
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link route='preproc' params={{ path: 'labsel' }}>
                                        <a className="dropdown-item">Labsel Encoding</a>
                                    </Link>
                                    <Link route='preproc' params={{ path: 'one-hot' }}>
                                        <a className="dropdown-item">One-hot Encoding</a>
                                    </Link>
                                    {/* <div className="dropdown-divider"></div> */}
                                    <Link route='preproc' params={{ path: 'delete-rc' }}>
                                        <a className="dropdown-item">Delete Row/Column</a>
                                    </Link>
                                    <Link route='preproc' params={{ path: 'replaceW' }}>
                                        <a className="dropdown-item">Replace W</a>
                                    </Link>
                                    <Link route='preproc' params={{ path: 'certain' }}>
                                        <a className="dropdown-item" href="#">Select Certain</a>
                                    </Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a  className="nav-link dropdown-toggle" 
                                    href="#" 
                                    id="navbarDropdown" 
                                    role="button" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false"
                                >
                                    ML Algorithm
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link route='mlalgo' params={{ path: 'nba' }}>
                                        <a className="dropdown-item">Naive Bayes algorithm</a>
                                    </Link>
                                    <Link route='mlalgo' params={{ path: 'lra' }}>
                                        <a className="dropdown-item">Logistic Regression algorithm</a>
                                    </Link>
                                    {/* <div className="dropdown-divider"></div> */}
                                    <Link route='mlalgo' params={{ path: 'svm' }}>
                                        <a className="dropdown-item">Support Vector Machine algorithm</a>
                                    </Link>
                                    <Link route='mlalgo' params={{ path: 'bag' }}>
                                        <a className="dropdown-item">Bagging algorithm</a>
                                    </Link>
                                    <Link route='mlalgo' params={{ path: 'clus' }}>
                                        <a className="dropdown-item">Clustering algorithm</a>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <div className="form-inline my-2 my-lg-0" style={ styleTextWhite }>
                            { this.state.user !== null && (
                                <>
                                    {/* <span style={ styleName }> Hi { User.user.displayName } </span> */}
                                    <button className="btn btn-secondary" onClick={ this.logout }> Logout </button>
                                </>
                            )}
                        </div>
                    </div>
                </nav>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12">
                            { this.props.children }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;