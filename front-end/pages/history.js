import React, { Component } from "react";
import Link from "next/link";
import firebase from "../common/firebase";
import { create } from "domain";

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dateOfFile: [],
        type: [],
      downloadURL: []
    };
  }

  async componentDidMount() {
    var storage = firebase.storage().ref();
    const user = firebase.auth().currentUser.uid;
    var t = await storage
      .child(user)
      .list()
      .then(function(urls) {
        return urls.items.map(url => url.location.path);
      });
    console.log(t);

    var temp = [];
    for (var i = 0; i < t.length; i++) {
      var s = await storage
        .child(t[i])
        .getDownloadURL()
        .then(e => {
          return e;
        });
      temp.push(s);
    }
    console.log(temp);

    var dates = t.map(a => {
        var as = a.split("_");
        var aa = as[0].split("/");
        return aa[1];
      });
      var types = t.map(a => {
        var as = a.split("_");
        return as[1];
      });
    this.setState({ dateOfFile: dates, type: types, downloadURL: temp });
  }

  render() {
    var items = [];
    console.log(this.state.dateOfFile);
    for (var i = 0; i < this.state.dateOfFile.length; i++) {
      items.push(
        <tr>
          <th scope="row">{this.state.dateOfFile[i]}</th>
          <td>{this.state.type[i]}</td>
          <td>
            <a href={this.state.downloadURL[i]} download>
              <button className="btn btn-primary">Download</button>
            </a>
          </td>
        </tr>
      );
    }

    return (
      <>
        <h1>History</h1>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Type</th>
                    <th scope="col">File Result</th>
                  </tr>
                </thead>
                <tbody>
                  {items}
                  {/* <tr>
                    <th scope="row">1/1/2019</th>
                    <td>ML</td>
                    <td>
                      <button className="btn btn-primary">Download</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1/1/2019</th>
                    <td>PRE</td>
                    <td>
                      <button className="btn btn-primary">Download</button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">1/1/2019</th>
                    <td>ML</td>
                    <td>
                      <button className="btn btn-primary">Download</button>
                    </td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default History;
