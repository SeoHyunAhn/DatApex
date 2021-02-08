import React from "react";
// import Link from "next/link";
import User from "../common/user";
import firebase from "../common/firebase";
import Main from "../pages/main";
import { Link, Router } from "../routes";
import Layout from "./layout";

const styleTextWhite = {
  color: "white"
};

const styleName = {
  marginRight: "20px"
};

class Template extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="input-group">
            <div className="custom-file">
              {/* <label>Upload a cvs file </label> */}
              {/* <hr></hr> */}
              <form>
              <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        </div>
              {/* <input type="submit"></input> */}
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Template;
