import React, { Component } from 'react';
import Link from 'next/link';

class History extends Component {
    
    render() {
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
                                    <tr>
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
                                    </tr>
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
