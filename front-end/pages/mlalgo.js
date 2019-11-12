import React from "react";
import axios from "axios";
import {
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import UploadCSV from "../components/Modal";
const posts = [
  { path: "nba", title: "Naive Bayes algorithm" },
  { path: "lra", title: "Logistic Regression algorithm" },
  { path: "svm", title: "Support Vector Machine algorithm" },
  { path: "bag", title: "Bagging algorithm" },
  { path: "clus", title: "Clustering algorithm" },
  { path: "tree", title: "Decision tree algorithm" }
];
import Layout from "../components/layout";

var backend_url = "";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { imgSrc: "", sos: "", lambda: "", maxit: "" };
    this.path = "";
  }

  onChange(event) {
    console.log(event.target.name);
    var param = event.target.name;
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(filename) {
    console.log("handling submit");
    var formData = new FormData();
    // console.log(this.fileInput.current.files[0]);
    formData.append("file", filename);
    var div = document.getElementById("image-display");
    div.innerHTML =
      "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";
    if (this.path == "nba") {
      backend_url = "http://localhost:8000/dataMining/NaiveBayes/";
    } else if (this.path == "lra") {
      backend_url = "http://localhost:8000/dataMining/LogisticRegression/";
      backend_url =
        backend_url +
        this.state.sos +
        "/" +
        this.state.lambda +
        "/" +
        this.state.maxit;
      console.log(backend_url);
    } else if (this.path == "svm") {
      backend_url = "http://localhost:8000/dataMining/SVM/";
      backend_url =
        backend_url +
        this.state.sos +
        "/" +
        this.state.lambda +
        "/" +
        this.state.maxit;
      console.log(backend_url);
    } else if (this.path == "bag") {
      backend_url = "http://localhost:8000/dataMining/Bagging/";
      // List the params of each on of them
    } else if (this.path == "clus") {
      backend_url = "http://localhost:8000/dataMining/Clustering/";
      // List the params of each on of them
    } else if (this.path == "tree") {
      backend_url = "http://localhost:8000/dataMining/decisionTree/";
      // List the params of each on of them
    }
    axios
      .post(backend_url, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(e => {
        // console.log(e);

        var div = document.getElementById("image-display");
        div.innerText = "";
        var imageOupput = "data:image/png;base64," + e.data;
        this.setState({ imgSrc: imageOupput });
      })
      .catch(err => {
        console.log(err);

        var div = document.getElementById("image-display");
        div.innerText = "Please check your input and parameters";
      });
  }
  render() {
    // console.log(this.props.url.asPath.substring(8));
    this.path = this.props.url.asPath.substring(8);
    const post = posts.find(p => p.path == this.path);
    if (this.path == "nba") {
      return (
        <Layout>
          <h1>{post.title}</h1>
          <hr></hr>
          <div className="row">
            <div className="col-6">
              <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
            </div>
            <div className="col-6">
              <div id="image-display"></div>
              <img id="image-output" src={this.state.imgSrc}></img>
            </div>
          </div>
        </Layout>
      );
    } else if (this.path == "lra") {
      return (
        <Layout>
          <h1>{post.title}</h1>
          <hr></hr>
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Size of Step: </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="sos"
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <label className="col-sm-2 col-form-label"> Lambda: </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="lambda"
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <label className="col-sm-2 col-form-label">
                {" "}
                Number of Max iteration:{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="maxit"
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
          </form>
          <div className="col-6">
            <div id="image-display"></div>
            <img id="image-output" src={this.state.imgSrc}></img>
          </div>
        </Layout>
      );
    } else if (this.path == "svm") {
      return (
        <Layout>
          <h1>{post.title}</h1>
          <hr></hr>
          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label"> Size of Step: </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="sos"
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <label className="col-sm-2 col-form-label"> Lambda: </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="lambda"
                  onChange={this.onChange.bind(this)}
                />
              </div>
              <label className="col-sm-2 col-form-label">
                {" "}
                Number of Max iteration:{" "}
              </label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  placeholder="1,2,3"
                  type="text"
                  name="maxit"
                  onChange={this.onChange.bind(this)}
                />
              </div>
            </div>
            <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
          </form>
          <div className="col-6">
            <div id="image-display"></div>
            <img id="image-output" src={this.state.imgSrc}></img>
          </div>
        </Layout>
      );
      // List the params of each on of them
    } else if (this.path == "bag") {
      backend_url = "http://localhost:8000/dataMining/Bagging/";
      // List the params of each on of them
    } else if (this.path == "clus") {
      backend_url = "http://localhost:8000/dataMining/Clustering/";
      // List the params of each on of them
    } else if (this.path == "tree") {
      backend_url = "http://localhost:8000/dataMining/decisionTree/";
      // List the params of each on of them
    }
    return (
      <Layout>
        <h1>{post.title}</h1>
        <hr></hr>
        <div className="row">
          <div className="col-6">
            <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
          </div>
          <div className="col-6">
            <div id="image-display"></div>
            <img id="image-output" src={this.state.imgSrc}></img>
          </div>
        </div>
      </Layout>
    );
  }
}
