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
                            {/* <img src="../static/main1.png" alt="data preprocessing" className="img-thumbnail" />
                            <br />
                            <br /> */}

                            <Link href="/preOptions">
                                <a className="btn btn-primary btn-lg btn-block">Pre Process Data</a>
                            </Link>
                        </div>
                        <div className="col-6">
                            {/* <img src="../static/datamining.jpg" alt="data mining" className="img-thumbnail" />
                            <br />
                            <br /> */}
                            
                            <Link href="/mlOptions">
                                <a className="btn btn-primary btn-lg btn-block"> ML algorithm </a>
                            </Link>
                        </div>
                    </div>

                    {/* <div class="btn-group" data-toggle="buttons">
                        <label class="btn btn-primary active thisweek">
                            <input type="radio" name="options" id="option1" autocomplete="off" checked>
                                <img src="https://placehold.it/200x200" />
                            </input>
                        </label>
                        <label class="btn btn-primary">
                            <input type="radio" name="options" id="option2" autocomplete="off"><img src="https://placehold.it/150x150">
                        </label>
                    </div> */}

                </div>
            </>
        );
    }
}

export default Main;
