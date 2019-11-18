import React, { Component } from 'react';
import Link from 'next/link';

class Main extends Component {
    
    render() {
        return (
            <>
                <h1>What would you like to run?</h1>
                <hr></hr>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <Link href="/preOptions">
                                <a className="btn btn-primary btn-lg btn-block">Pre-processing Algorithms</a>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link href="/mlOptions">
                                <a className="btn btn-primary btn-lg btn-block">Machine Learning Algorithms</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
