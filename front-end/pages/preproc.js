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
// import { Components } from "@reactioncommerce/reaction-components";

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
    this.state = {
      outputCsv: "",
      selectedOption: "",
      paramNum: "",
      showResults: false
    };
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
      link = "preProc/OneHotEncoding/" + this.state.paramNum;
    } else if (this.path == "delete-rc") {
      console.log(this.state.selectedOption)
      if(this.state.selectedOption=="row"){
        link = "preProc/delRow/" + this.state.paramNum;
      }else if(this.state.selectedOption=="col"){
        link = "preProc/delCol/" + this.state.paramNum;
      }
    } else if (this.path == "replaceW") {
      link = "preProc/ReplaceW" + this.state.paramNum;
    } else if (this.path == "certain") {
      // selected params of each on of them
    }

    axios
      .post("http://localhost:8000/" + link, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(e => {
        console.log(e);
        console.log(e.data);
        this.setState({ outputCsv: e.data, showResults: true });
        div.innerHTML = "";
      })
      .catch(err => {
        console.log(err);

        var div = document.getElementById("result-display");
        div.innerText = "Please check your input and parameters";
      });
  }

  handleOptionChange(changeEvent) {
    console.log(changeEvent.target);
    this.setState({
      selectedOption: changeEvent.target.value
    });
  }
  onChange(event) {
    console.log(event.target);
    this.setState({ paramNum: event.target.value });
  }

  render() {
    // console.log(this.props.url.asPath.substring(9));
    this.path = this.props.url.asPath.substring(9);
    if (this.path == "label") {
      // List the params of each on of them
    } 
    else if (this.path == "one-hot") {
      // List the params of each on of them
      return (
        <Layout>
          <h1>{ this.path }</h1>
          <hr></hr>

          <div className="row">
            <div className="col-6">
              <form>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of Column: </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      placeholder="1,2,3"
                      type="text"
                      name="numCol"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                </div>
                
                <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
              </form>
            </div>
            <div className="col-6">
              <div id="result-display"></div>
              { this.state.showResults ? (
                <div id="download-csv">
                  <CSVLink
                    data={this.state.outputCsv}
                    filename="data.csv"
                    className="hidden"
                    target="_blank"
                  >
                    Download me
                  </CSVLink>
                </div>
              ) : null}
            </div>
          </div>
          



          {/* <main className="content">
            <div >
              <label>
                name of Column:
                <input
                  type="text"
                  name="numCol"
                  onChange={this.onChange.bind(this)}
                />
              </label>
            </div>
  
            <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
            <div id="result-display"></div>
            {this.state.showResults ? (
              <div id="download-csv">
                <CSVLink
                  data={this.state.outputCsv}
                  filename="data.csv"
                  className="hidden"
                  target="_blank"
                >
                  download me
                </CSVLink>
              </div>
            ) : null}
          </main> */}
        </Layout>
      );
    } else if (this.path == "delete-rc" || this.path == "replaceW") {
      // List the params of each on of them
      return (
        <Layout>

          <h1>{ this.path }</h1>
          <hr></hr>

          <div className="row">
            <div className="col-6">
              <form>
                <div className="form-check">
                  <label class="form-check-label">
                    <input
                      className="form-check-input"
                      type="radio"
                      value="row"
                      checked={this.state.selectedOption === "row"}
                      onChange={this.handleOptionChange}
                    />
                    Row
                  </label>
                </div>
                <div className="form-check">
                  <label>
                    <input
                      className="form-check-input"
                      type="radio"
                      value="col"
                      checked={this.state.selectedOption === "col"}
                      onChange={this.handleOptionChange}
                    />
                    Col
                  </label>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of Rows: </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      placeholder="1,2,3"
                      type="text"
                      name="numRow"
                      pattern="[0-9],*"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Number of Cols: </label>
                  <div className="col-sm-10">
                    <input
                      className="form-control"
                      placeholder="1,2,3"
                      type="text"
                      name="numCol"
                      pattern="[0-9],*"
                      onChange={this.onChange.bind(this)}
                    />
                  </div>
                </div>
                <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
              </form>
            </div>
            <div className="col-6">
              <div id="result-display"></div>
              {this.state.showResults ? (
                <div id="download-csv">
                  <CSVLink
                    data={this.state.outputCsv}
                    filename="data.csv"
                    className="hidden"
                    target="_blank"
                  >
                    <div className="text-center">
                      <button className="btn btn-info">
                        Download me
                      </button>
                    </div>
                  </CSVLink>
                </div>
              ) : null}
            </div>
          </div>
          


          {/* <main className="content">
            <div className="radio">
              <label class="form-check-label">
                <input
                  className="form-check-input"
                  type="radio"
                  value="row"
                  checked={this.state.selectedOption === "row"}
                  onChange={this.handleOptionChange}
                />
                Row
              </label>
              <label>
                <input
                  type="radio"
                  value="col"
                  checked={this.state.selectedOption === "col"}
                  onChange={this.handleOptionChange}
                />
                Col
              </label>
              <br></br>
              <label>
                number of rows:
                <input
                  type="text"
                  name="numRow"
                  pattern="[0-9],*"
                  onChange={this.onChange.bind(this)}
                />
              </label>
              <label>
                number of col:
                <input
                  type="text"
                  name="numCol"
                  pattern="[0-9],*"
                  onChange={this.onChange.bind(this)}
                />
              </label>
            </div>
  
            <UploadCSV onSubmit={this.handleSubmit}></UploadCSV>
            <div id="result-display"></div>
            {this.state.showResults ? (
              <div id="download-csv">
                <CSVLink
                  data={this.state.outputCsv}
                  filename="data.csv"
                  className="hidden"
                  target="_blank"
                >
                  download me
                </CSVLink>
              </div>
            ) : null}
          </main> */}
        </Layout>
      );
    // } else if (this.path == "replaceW") {
      // List the params of each on of them
      
    } else if (this.path == "certain") {
      // List the params of each on of them
    }
    
  }
}
