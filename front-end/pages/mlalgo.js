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
  }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  handleSubmit (event){
    // this.toggle();
    event.preventDefault();
    console.log("handling submit");
    console.log(this.fileInput.current.files);
    var formData = new FormData();
    // var imagefile = this.fileInput.current.files;
    console.log(this.fileInput.current.files[0])
    formData.append("file", this.fileInput.current.files[0]);
    axios.post('http://localhost:8000/upload/csv/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    // if (item.id) {
    //   axios
    //     .put(`http://localhost:8000/api/todos/${item.id}/`, item)
    //     .then(res => this.refreshList());
    //   return;
    // }
    // axios
      // .post("http://localhost:8000/upload/csv/", this.fileInput.current.files)
      // .then(res => this.refreshList());
  };
  createItem = () => {
    const item = { title: "", description: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
  editItem = item => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };
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
                  // class="col-md-3 col-sm-3 col-xs-12 control-label"
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
        </main>
      </Layout>
    );
  }
}
