import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchProjects } from '../actions';
import NavBar from './navbar';

class BookShelf extends Component {
    
    render() {
        return (
            <div>
                <NavBar changeColor={false}/>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-8 offset-md-2" style={{ paddingTop: 50 }}>
                                <h3 className="text-center title">BookShelf</h3>
                                <h3 className="text-center">Coming Soon</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect(null, null)(BookShelf);