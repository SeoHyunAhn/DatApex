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

  // hexToBase64(str) {
  //   return 
  // }
  refreshList = () => {
    axios
      .get("http://localhost:8000/api/todos/")
      .then(res => this.setState({ todoList: res.data }))
      .catch(err => console.log(err));
  };
  handleSubmit(event) {
    // this.toggle();
    event.preventDefault();
    console.log("handling submit");
    console.log(this.fileInput.current.files);
    var formData = new FormData();
    // var imagefile = this.fileInput.current.files;
    console.log(this.fileInput.current.files[0]);
    formData.append("file", this.fileInput.current.files[0]);

    var display = document.querySelector(".image-display");
    var output = document.getElementById("image-output");
    // var imageOupput;
    axios
      .post("http://localhost:8000/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(res => this.setState({imgSrc: res.data}))

      // .then(function(e) {
      //   console.log(e);
      //   // var data = [];
      //   // data.push(e.data)
      //   self.setState({imgSrc: e.data});
      //   // display.innerHTML = e.data.forms[0].name;
      //   // output.src = "{require('"+e.data+"')}";

      //   // console.log(e.data);
      //   // var img = new Image();
      //   // img.onload = function() {
      //   //   myCanvasContext.drawImage(img, 0, 0);
      //   // };
      //   // img.src = e.data;
      //   // imageOupput = "data:image/png;base64, " + e.data;
      //   // console.log(img);

      //   // var node = document.createElement("img");
      //   // // var t = btoa(String.fromCharCode.apply(null, e.data.replace(/\r|\n/g, "").replace(/([\da-fA-F]{2}) ?/g, "0x$1 ").replace(/ +$/, "").split(" ")));
      //   // // node.src = 'data:image/jpeg;base64,' + t;
      //   // node.src = Buffer.from(e.data, 'binary').toString('base64');
      //   // document.getElementById("image").appendChild(node);
      // })
      .then(e =>

        console.log(this.state.imgSrc)
      )
      .catch(err => console.log(err));
    // if (item.id) {
    //   axios
    //     .put(`http://localhost:8000/api/todos/${item.id}/`, item)
    //     .then(res => this.refreshList());
    //   return;
    // }
    // axios
    // .post("http://localhost:8000/upload/csv/", this.fileInput.current.files)
    // .then(res => this.refreshList());
  }
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
          <div id="image-display">
            <img id= "image-output"
              onLoad={this.handleImageLoaded.bind(this)}
             src={this.state.imagesrc}></img>
          </div>
        </main>
      </Layout>
    );
  }
}
