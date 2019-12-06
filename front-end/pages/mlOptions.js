import React, { Component } from "react";
import Layout from "../components/layout";
// import Link from 'next/link';
import { Link, Router } from "../routes";

const styleCard = {
  marginBottom: "10px"
};

class MlOptions extends Component {
  render() {
    return (
      <>
        <h1>Machine Learning Algorithms</h1>
        <hr></hr>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">Naive Bayes Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/nba.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Naïve Bayes is a classification technique/algorithm based on
                    Bayes’ Theorem with an assumption of independence among the
                    predictors. Loosely translated, this means that a Naïve
                    Bayes classifier assumes that the presence of a particular
                    feature in a class is unrelated to the presence of any other
                    feature. This model is particularly useful for large data
                    sets – along with simplicity, Naïve Bayes is known to
                    outperform even highly sophisticated classification methods
                    in some cases. <br></br>The Naïve Bayes algorithm works by
                    converting the dataset into a frequency table, creating a
                    likelihood table by calculating probabilities & then using
                    the Naïve Bayes equation to calculate the posterior
                    probability for each class. The class with the highest
                    posterior probability is considered the outcome of the
                    prediction. This algorithm is typically used in text
                    classification & with problems having multiple classes.
                  </p>

                  <Link route="mlalgo" params={{ path: "nba" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>

                  {/* <Link href={{ pathname: 'mlalgo', query: { path: "nba" }}}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">Logistic Regression Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/lra.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Logistic Regression is a classification machine-learning
                    algorithm used to assign observations to a discrete set of
                    classes (binary or multiple classes). Logistic regression
                    transforms its output using the logistic sigmoid function to
                    return a probability value. Logistic Regression is a
                    predictive analysis algorithm as it is based on the concepts
                    of probability. It uses a more complex cost function than
                    linear regression (the logistic or sigmoid function).
                    <br></br>
                    In order to map predicted values to probabilities, we use
                    the Sigmoid function which maps any real value into another
                    value between 0 & 1.
                  </p>
                  <Link route="mlalgo" params={{ path: "lra" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">
                  Support Vector Machine Algorithm
                </div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/svm.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    SVM is a supervised machine learning algorithm which may be
                    used for either classification or regression problems.
                    However, in general, it is used predominantly for
                    classification problems. In this algorithm, we plot each
                    data item as a point in n-dimensional space (n being the
                    number of features) with the value of each feature being the
                    value of a particular coordinate. Subsequently,
                    classification is performed by finding the hyperplane (the
                    equivalent of a line in a 2-dimensional space) that
                    differentiates the two classes well. <br></br>Above image
                    shows, Support Vectors are simply the co-ordinates of
                    individual observations. SVM is a frontier which best
                    segregates the two classes.
                  </p>
                  <Link route="mlalgo" params={{ path: "svm" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">Bagging Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/bag.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Bagging algorithm is a simple yet powerful ensemble method.
                    An ensemble method is one that combines predictions from
                    multiple machine learning algorithms together to make more
                    accurate predictions than any individual method.
                    {/* <br /> */}
                    This method is especially helpful in reducing the variance
                    for algorithms which tend to have really high variance.
                    Bagging involves applying the Bootstrapping procedure to a
                    high-variance machine learning algorithm (typically decision
                    trees).
                    {/* <br />
                    <br />
                    Let’s assume we have a sample dataset of 1000 instances & we
                    are using the CART algorithm. Bagging would work as follows:
                    <br />- Create several (e.g. 100) random sub-samples of the
                    dataset with replacement.
                    <br />- Train a CART model on each sample.
                    <br />- Given a new dataset, calculate the average
                    prediction from each model.
                    <br />
                    <br /> */}
                    Bagging may be used for either classification or regression
                    problems.
                  </p>
                  <Link route="mlalgo" params={{ path: "bag" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">K-means Clustering Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/clus.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    K-means Clustering is one of the simplest and most popular
                    unsupervised machine learning algorithms. Typically,
                    unsupervised machine learning algorithms make inferences
                    from datasets using only input vectors without referring to
                    known/labelled outcomes.
                    <br />
                    A cluster, simply put, refers to a collection of data points
                    aggregated together because of certain similarities. The ‘k’
                    from the name refers to the number of centroids needed in
                    the dataset, and is defined by us. A centroid is the
                    imaginary or real location representing the center of the
                    cluster. The ‘means’ in the K-Means refers to the averaging
                    of data (i.e. finding the centroid).
                    <br />
                    <br />
                    The algorithm starts with a first group of randomly selected
                    centroids that are used as beginning points for every
                    cluster, and then performs iterative calculations to
                    optimize the positions of the centroids. It stops creating
                    or optimizing clusters when:
                    <br />- The centroids have stabilized, i.e. there is no
                    change in their values because the clustering has been
                    successful;
                    <br />- The defined number of iterations has been reached.
                  </p>
                  <Link route="mlalgo" params={{ path: "clus" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">Decision Tree Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/tree.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    Decision Tree algorithm belongs to the family of supervised
                    machine learning algorithms. Unlike other supervised
                    learning algorithms, this algorithm can be used for solving
                    regression & classification problems too. The general model
                    of Decision Trees algorithm is to create a training model
                    which can be used to predict the class or value of target
                    variables by learning decision rules inferred from the
                    training data.
                    <br />
                    <br />
                    As the name insinuates, this algorithm uses a tree
                    representation to solve the problem, wherein each internal
                    node corresponds to an attribute while each leaf node
                    corresponds to a class label. A rough outline of the
                    algorithm is as follows:
                    <br />- Place the best attribute of the dataset at the root
                    of the tree.
                    <br />- Split the training set into subsets in such a way
                    that each subset contains data with the same value for an
                    attribute.
                    <br />- Repeat the previous two steps on each subset until
                    leaf nodes are found in all branches of the tree.
                    <br />
                    <br />
                    With decision trees, one of the biggest challenges is to
                    identify which attributes need to be considered as the root
                    node and each level.
                  </p>
                  <Link route="mlalgo" params={{ path: "tree" }}>
                    <a className="btn btn-primary">Go somewhere</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card" style={{styleCard}}>
                <div className="card-header">Radom Forest Algorithm</div>
                <div className="card-body">
                  <img
                    className="card-img"
                    variant="top"
                    src="../static/tree.png"
                  />
                  <h5 className="card-title">Explanation: </h5>
                  <p className="card-text">
                    @Piyush needs to send and copy here 
                  </p>
                  <Link route="mlalgo" params={{ path: "forest" }}>
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

export default MlOptions;
