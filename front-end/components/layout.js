import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
// import source from './constants';
// import Link from "next/link";
import User from "../common/user";
import firebase from "../common/firebase";
import Main from "../pages/main";
import { Link, Router } from "../routes";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";

const styleTextWhite = {
  color: "white"
};

const styleName = {
  marginRight: "20px"
};

const source = [
  { path: "nba", title: "Naive Bayes algorithm", from: "mlalgo" },
  { path: "lra", title: "Logistic Regression algorithm", from: "mlalgo" },
  { path: "svm", title: "Support Vector Machine algorithm", from: "mlalgo" },
  { path: "bag", title: "Bagging algorithm", from: "mlalgo" },
  { path: "clus", title: "Clustering algorithm", from: "mlalgo" },
  { path: "tree", title: "Decision tree algorithm", from: "mlalgo" },

  { path: "label", title: "Label Encoding", from: "preproc" },
  { path: "one-hot", title: "One-Hot Encoding", from: "preproc" },
  { path: "delete-rc", title: "Delete Row/Column", from: "preproc" },
  { path: "replaceW", title: "Replace W", from: "preproc" },
  { path: "certain", title: "Select Certain", from: "preproc" }
];
const resultRenderer = ({ title }) => <Label content={title} />;

resultRenderer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};
// const initialState = { isLoading: false, results: [], value: "" };

class Layout extends React.Component {
  user = {};
  namesList = {};
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      isLoading: false,
      results: [""],
      bool: [],
      value: ""
    };

    this.user = this.state.user;
    this.namesList = "";
    console.log(this.user);
    this.logout = this.logout.bind(this);
  }

  logout = () => {
    firebase.auth().signOut();
    window.location = "http://localhost:3000/";
  };

  //   state = initialState;

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.title });

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });
    setTimeout(() => {
      if (this.state.value.length < 1)
        return this.setState({
          isLoading: false,
          bool: [],
          results: [""],
          value: ""
        });
      var t = source.filter(p => p.title.toLowerCase().includes(this.state.value.toLowerCase()));
      this.setState({
        isLoading: false,
        results: t,
        bool: true
      });

      var s = this.state.results.map(function(name) {
        console.log(name);
        return (
          <div>
            <Link route={name.from} params={{ path: name.path }}>
              <a>{name.title}</a>
            </Link>
            <br></br>
          </div>
        );
      });
      this.setState({ bool: s });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;
    var namesList = this.namesList;
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
                <a
                  className="nav-link dropdown-toggle"
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
                  <Link route="preproc" params={{ path: "label" }}>
                    <a className="dropdown-item">Labsel Encoding</a>
                  </Link>
                  <Link route="preproc" params={{ path: "one-hot" }}>
                    <a className="dropdown-item">One-hot Encoding</a>
                  </Link>
                  {/* <div className="dropdown-divider"></div> */}
                  <Link route="preproc" params={{ path: "delete-rc" }}>
                    <a className="dropdown-item">Delete Row/Column</a>
                  </Link>
                  <Link route="preproc" params={{ path: "replaceW" }}>
                    <a className="dropdown-item">Replace W</a>
                  </Link>
                  <Link route="preproc" params={{ path: "certain" }}>
                    <a className="dropdown-item" href="#">
                      Select Certain
                    </a>
                  </Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
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
                  <Link route="mlalgo" params={{ path: "nba" }}>
                    <a className="dropdown-item">Naive Bayes algorithm</a>
                  </Link>
                  <Link route="mlalgo" params={{ path: "lra" }}>
                    <a className="dropdown-item">
                      Logistic Regression algorithm
                    </a>
                  </Link>
                  {/* <div className="dropdown-divider"></div> */}
                  <Link route="mlalgo" params={{ path: "svm" }}>
                    <a className="dropdown-item">
                      Support Vector Machine algorithm
                    </a>
                  </Link>
                  <Link route="mlalgo" params={{ path: "bag" }}>
                    <a className="dropdown-item">Bagging algorithm</a>
                  </Link>
                  <Link route="mlalgo" params={{ path: "clus" }}>
                    <a className="dropdown-item">Clustering algorithm</a>
                  </Link>
                </div>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Searchs
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Search
                    loading={isLoading}
                    onResultSelect={this.handleResultSelect}
                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                      leading: true
                    })}
                    //   results={results}
                    value={value}
                    resultRenderer={resultRenderer}
                    {...this.props}
                  />
                  {this.state.bool ? (
                    <div>
                      <li>{this.state.bool}</li>
                      <br></br>
                    </div>
                  ) : null}
                </div>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0" style={styleTextWhite}>
              {this.state.user !== null && (
                <>
                  {/* <span style={ styleName }> Hi { User.user.displayName } </span> */}
                  <button className="btn btn-secondary" onClick={this.logout}>
                    {" "}
                    Logout{" "}
                  </button>
                </>
              )}
            </div>
          </div>
        </nav>
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">{this.props.children}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Layout;
