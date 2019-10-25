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

const posts = [
  { path: "nba", title: "Naive Bayes algorithm" },
  { path: "lra", title: "Logistic Regression algorithm" },
  { path: "svm", title: "Support Vector Machine algorithm" },
  { path: "bag", title: "Bagging algorithm" },
  { path: "clus", title: "Clustering algorithm" }
];
import Layout from "../components/layout";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = { imgSrc: "" };
    this.path = "";
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit");
    // console.log(this.fileInput.current.files);
    var formData = new FormData();
    // console.log(this.fileInput.current.files[0]);
    formData.append("file", this.fileInput.current.files[0]);
    var div = document.getElementById("image-display");
    div.innerHTML =
      "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";

    axios
      .post("http://localhost:8000/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(e => {
        console.log(e);

        var div = document.getElementById("image-display");
        div.innerText = "";
        var imageOupput = "data:image/png;base64," + e.data;
        this.setState({ imgSrc: imageOupput });
      })
      .catch(err => {
        console.log(err);

        var div = document.getElementById("image-display");
        div.innerText = "Please provide a valid csv file";
      });
  }
  render() {
    // console.log(this.props.url.asPath.substring(8));
    this.path = this.props.url.asPath.substring(8);
    if (this.path == "nba") {
      // List the params of each on of them
    } else if (this.path == "lra") {
      // List the params of each on of them
    } else if (this.path == "svm") {
      // List the params of each on of them
    } else if (this.path == "bag") {
      // List the params of each on of them
    } else if (this.path == "clus") {
      // List the params of each on of them
    }
    return (
      <Layout>
        <main className="content">
          <Form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
            <FormGroup>
              <div class="form-group">
                <label for="name">File: </label>
                <div class="col-md-8">
                  <input
                    type="file"
                    name="csv_file"
                    id="csv_file"
                    required="True"
                    class="form-control"
                    ref={this.fileInput}
                  />
                </div>
              </div>
              <input type="submit" value="Submit" />
            </FormGroup>
          </Form>
          <div id="image-display"></div>
          <img id="image-output" src={this.state.imgSrc}></img>
        </main>
      </Layout>
    );
  }
}
