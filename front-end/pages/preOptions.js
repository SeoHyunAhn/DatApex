import React, { Component } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const styleCard = {
    marginBottom: '10px',
};

class PreOptions extends Component {
    
    render() {
        return (
            <Layout>
                <h1>PreOptions</h1>
                <hr></hr>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Labsel Encoding
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Converting the labels into numeric form so as to convert it into the machine-readable form</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    One-hot Encoding
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Converting into a form that could be provided to ML algorithms to do a better job in prediction</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Delete Row/Column
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Remove some information from row/column that is not needed for ML</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Replace W
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Remove white spaces for better processing of ML</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Select Certain
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Select some information from the provided data</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default PreOptions;
