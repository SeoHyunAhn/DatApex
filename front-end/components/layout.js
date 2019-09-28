import React from "react";
import Link from "next/link";
import User from "../common/user";
import firebase from '../common/firebase';

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

        console.log(this.props.user)

        this.logout = this.logout.bind(this);
    }

    logout = () => {
        firebase.auth().signOut();
        window.location = 'http://localhost:3000/';
    };

    render() {
        return (
            <React.Fragment>
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
                        {/* <li className="nav-item active">
                            <Link href={"/main"}>
                                <a className={"nav-link"}>Home</a>
                            </Link>
                        </li> */}
                    </ul>
                    <div className="form-inline my-2 my-lg-0" style={ styleTextWhite }>
                        { this.state.user !== null && (
                            <>
                                <span style={ styleName }> Hi { this.state.user.displayName } </span>
                                <button className="btn btn-secondary" onClick={ this.logout }> Logout </button>
                            </>
                        )}
                    </div>
                </div>
                </nav>
                <div className="container mt-4">{this.props.children}</div>
            </React.Fragment>
        );
    }
}

export default Layout;