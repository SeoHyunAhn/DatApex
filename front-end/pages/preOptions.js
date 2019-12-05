import React, { Component } from "react";
import Layout from "../components/layout";
import { Link, Router } from "../routes";

const styleCard = {
  marginBottom: "10px", width: 525, height: 450
};

class PreOptions extends Component {
  render() {
    return (
      <>
        <h1>Preprocessing Options</h1>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card" style={styleCard}>
                <div className="card-header">Label Encoding</div>
                <div className="card-body">
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    In machine learning, we usually deal with datasets which
                    contain multiple labels in one or more than one of the
                    columns. Label Encoding converts the labels into numeric
                    form so as it make them into a machine-readable form.
                    Machine learning algorithms can then decide in a better way
                    on how those labels must be operated. Furthermore, label
                    encoding is easily reversible. <br></br> <br></br>Label
                    Encoding converts the data into machine-readable form, but
                    it assigns a unique number to each class of data. This may
                    potentially lead to the generation of a priority issue in
                    training of datasets, i.e. a label with a higher label might
                    be seen as having a higher priority while this may not
                    actually be the case.
                  </p>
                  <Link route="preproc" params={{ path: "label" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={styleCard}>
                <div className="card-header">One-hot Encoding</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/one-hot.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    For categorical variables where no ordinal relationship
                    exists, label encoding alone falls short because it may
                    assume a natural ordering among the different categories,
                    resulting in poor performance or unexpected results. In such
                    cases, one-hot encoding can be applied to the integer
                    representation: the integer encoded variable is removed & a
                    new binary variable is added for each unique integer value.
                  </p>
                  <Link route="preproc" params={{ path: "one-hot" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{marginBottom: "10px", width: 525, height: 230}}>
                <div className="card-header">Delete Row/Column</div>
                <div className="card-body">
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Delete the specified rows & columns from the dataset.
                    Use this for deleting rows & columns which are irrelevant for your purposes.
                  </p>
                  <Link route="preproc" params={{ path: "delete-rc" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{marginBottom: "10px", width: 525, height: 230}}>
                <div className="card-header">Replace W</div>
                <div className="card-body">
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Replace the specified word with another word, wherever the former occurs in the dataset.
                    This is especially helpful for removing words that are not readable to the ML algorithms.
                  </p>
                  <Link route="preproc" params={{ path: "replaceW" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{marginBottom: "10px", width: 525, height: 185}}>
                <div className="card-header">Select Certain</div>
                <div className="card-body">
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Select some information from the provided data
                  </p>
                  <Link route="preproc" params={{ path: "certain" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PreOptions;
