import React, { Component } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

const styleCard = {
    marginBottom: '10px',
};

class MlOptions extends Component {
    
    render() {
        return (
            <Layout>
                <h1>MLOptions</h1>
                <hr></hr>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Naive Bayes algorithm
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">
                                        Probabilistic classifier that makes classifications using the Maximum A Posteriori decision rule in a Bayesian setting
                                    </p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Logistic Regression algorithm
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Predictive analysis algorithm and based on the concept of probability</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Support Vector Machine algorithm
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">Find a hyperplane in an N-dimensional space that distinctly classifies the data points.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Bagging algorithm
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p>aka. Bootstrap aggregating</p>
                                    <p className="card-text">Improve the stability and accuracy of machine learning algorithms used in statistical classification and regression.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="card" style={ styleCard }>
                                <div className="card-header">
                                    Clustering algorithm
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Explanation: </h5>
                                    <p className="card-text">
                                        Grouping a set of objects in a way that objects in the same group are more similar to each other than to those in other group
                                    </p>
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

export default MlOptions;
