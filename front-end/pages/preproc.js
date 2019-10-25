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
import { CSVLink, CSVDownload } from "react-csv";
import UploadCSV from "../components/Modal";

const posts = [
  { path: "label", title: "Label Encoding" },
  { path: "one-hot", title: "One-Hot Encoding" },
  { path: "delete-rc", title: "Delete Row/Column" },
  { path: "replaceW", title: "Replace W" },
  { path: "certain", title: "Select Certain" }
];
import Layout from "../components/layout";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    // this.csvLink = React.createRef();
    this.state = { outputCsv: "", selectedOption: "", paramNum: "" };
    this.path = "";
  }
  handleSubmit(filename) {
    event.preventDefault();
    var formData = new FormData();
    // console.log(this.fileInput.current.files[0]);
    formData.append("file", filename);
    var div = document.getElementById("result-display");
    div.innerHTML =
      "<Spinner animation='border' role='status'> <span className='sr-only'>Loading...</span></Spinner>";

    var link = "";
    console.log(this.state.selectedOption);
    if (this.path == "label") {
      //  selected params of each on of them
    } else if (this.path == "one-hot") {
      // selected  params of each on of them
    } else if (this.path == "delete-rc") {
      // selected  params of each on of them
      link = "preProc/delRow/"+this.state.paramNum;
    } else if (this.path == "replaceW") {
      // selected params of each on of them
    } else if (this.path == "certain") {
      // selected params of each on of them
    }

    axios
      .post("http://localhost:8000/" + link, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(data => {
        this.setState({ data }, () => {
          // click the CSVLink component to trigger the CSV download
          this.csvLink.current.link.click();
        });
        div.style = "visibility: visible;";
      })
      .catch(err => {
        console.log(err);

        var div = document.getElementById("result-display");
        div.innerText = "Please provide a valid csv file";
      });
  }

  handleOptionChange(changeEvent) {
    console.log(changeEvent.target);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  onChange(event){
    console.log(event.target)
    this.setState({paramNum: event.target.value});
  }

  render() {
    // console.log(this.props.url.asPath.substring(9));
    this.path = this.props.url.asPath.substring(9);
    const params = [];
    if (this.path == "label") {
      // List the params of each on of them
    } else if (this.path == "one-hot") {
      // List the params of each on of them
    } else if (this.path == "delete-rc") {
      // List the params of each on of them
    } else if (this.path == "replaceW") {
      // List the params of each on of them
    } else if (this.path == "certain") {
      // List the params of each on of them
    }
    return (
      <Layout>
        <main className="content">
          <div className="radio">
            <label>
              <input
                type="radio"
                value="row"
                checked={this.state.selectedOption === "row"}
                onChange={this.handleOptionChange}
              />
              row
            </label>

            <label>
              number of rows:
              <input type="text" name="numRow" pattern="[0-9]*" onChange={this.onChange.bind(this)}/>
            </label>
          </div>
          <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
          <div id="result-display"></div>
          {/* <div id="download-csv" >
            <button onClick={this.fetchData}>Download CSV</button>

            <CSVLink
              data={this.state.data}
              filename="data.csv"
              className="hidden"
              ref={this.csvLink}
              target="_blank"
            />
          </div> */}
        </main>
      </Layout>
    );
  }
}
