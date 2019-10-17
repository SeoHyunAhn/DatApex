import React from "react";
import axios from "axios";
import Modal from "../components/Modal";
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
    this.state = {imgSrc: ""}
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit");
    console.log(this.fileInput.current.files);
    var formData = new FormData();
    console.log(this.fileInput.current.files[0]);
    formData.append("file", this.fileInput.current.files[0]);
    axios
      .post("http://localhost:8000/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((e) => {
        console.log(e);
        var imageOupput = "data:image/png;base64," + e.data ;
        this.setState({imgSrc: imageOupput});
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Layout>
        <main className="content">
          <h1 className="text-white text-uppercase text-center my-4">
            Todo app
          </h1>
          <Form enctype="multipart/form-data" onSubmit={this.handleSubmit}>
            <FormGroup>
              <div class="form-group">
                <label
                  for="name"
                >
                  File:{" "}
                </label>
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
          <div id="image-display">
            <img id= "image-output"
             src={this.state.imgSrc}></img>
          </div>
        </main>
      </Layout>
    );
  }
}
