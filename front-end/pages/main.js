import React, { Component } from 'react';
import Layout from '../components/layout';
import Link from 'next/link';

class Main extends Component {
    
    render() {
        return (
            <>
                <h1>Main</h1>
                <hr></hr>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6">
                            <Link href="/preOptions">
                                <a className="btn btn-primary btn-lg btn-block">Pre Process Data</a>
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link href="/mlOptions">
                                <a className="btn btn-primary btn-lg btn-block"> ML algorithm </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
