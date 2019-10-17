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
  { path: 'label', title: 'Label Encoding' },
  { path: 'one-hot', title: 'One-Hot Encoding' },
  { path: 'delete-rc', title: 'Delete Row/Column' },
  { path: 'replaceW', title: 'Replace W' },
  { path: 'certain', title: 'Select Certain' },
]
import Layout from '../components/layout';


export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.csvLink = React.createRef()
    this.state = {outputCsv: "", paramter: []}
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log("handling submit");
    console.log(this.fileInput.current.files);
    var formData = new FormData();
    console.log(this.fileInput.current.files[0]);
    formData.append("file", this.fileInput.current.files[0]);
    var div = document.getElementById("image-display");
    div.innerHTML = "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>"
    axios
      .post("http://localhost:8000/upload/csv/", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then((data => {
        this.setState({ data }, () => {
          // click the CSVLink component to trigger the CSV download
          this.csvLink.current.link.click()
        })
        div.style="visibility: visible;"
      }))
      .catch(err => {
        console.log(err)

        var div = document.getElementById("download-csv");
        div.innerText = "Please provide a valid csv file"
      });

  }
  render() {
    // if (!post) return (
    //   <Layout>
    //     <h1>Page not found</h1>
    //   </Layout>
    // )

    // return (
    //   <Layout>
    //     <h1>{post.title}</h1>
    //     <hr />
    //   </Layout>
    // )
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
          <div id="download-csv" style="visibility: hidden">
        <button onClick={this.fetchData}>Download CSV</button>

        <CSVLink
          data={this.state.data}
          filename="data.csv"
          className="hidden"
          ref={this.csvLink}
          target="_blank" 
       />
          </div>
        </main>
      </Layout>
    );
  }
}
