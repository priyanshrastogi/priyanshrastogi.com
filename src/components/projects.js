import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchProjects } from '../actions';
import NavBar from './navbar';
class Projects extends Component {
    
    state = {
        displayFilter: false,
        selected: "All"
    }

    renderProjects() {
        return _.map(this.props.projects, project => {
            console.log(this.state.selected)
            console.log(this.state.selected in project.category);
            if(this.state.selected === 'All' || project.category.includes(this.state.selected))
                return (
                    <div>
                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-category">
                                    {project.tag === 'showcase' ? <span><span className="text-danger"><i class="fa fa-fire"></i> Showcase </span><span>&nbsp; &nbsp; &nbsp; &nbsp; </span></span>: '' }
                                    <span className="text-info">
                                        <i class="fa fa-tag"></i> {project.category.join(", ")}
                                    </span>
                                </h6>
                                <div className="row">
                                    <div>
                                        <h4 class="card-title"><Link to={`/projects/${project.id}`}>{project.title}</Link></h4>
                                        <p style={{fontWeight: 'normal'}}>{project.shortdescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            else
                return (
                    <div>

                    </div>
                )
        })
    }
    
    render() {
        return (
            <div>
                <NavBar changeColor={false}/>
                <div class="card">
                    <div class="card-body">
                        <div className="row">
                            <div className="col-md-8 offset-md-2" style={{ paddingTop: 50 }}>
                                <h3 className="text-center title">Projects</h3>
                                <button style={{position: 'absolute', 'right': 10, zIndex: 1000, bottom: 0, color: 'black'}} className="btn btn-link btn-just-icon d-sm-none" onClick={() => this.setState({displayFilter: !this.state.displayFilter})}><i className="fa fa-filter"></i></button>
                            </div>
                        </div>
                        <div className="row">
                            <div className={`col-md-3 ${this.state.displayFilter ? '' : 'd-none d-sm-block'}`} style={{ paddingTop: '20px' }}>
                                <div class="card card-nav-tabs">
                                    <p class="card-header card-header-info text-center" style={{fontWeight: 'bold'}}>Filters</p>
                                    <div class="card-body">
                                        <div>
                                            <select class="form-control" data-style="btn btn-link" id="filterSelect" onChange={(e) => { this.setState({selected: e.target.value})}}>
                                                <option selected value="All">All Categories</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Data Science">Data Science</option>
                                                <option value="Internet of Things">Internet of Things</option>
                                                <option value="App Development">App Development</option>
                                                <option value="DevOps">DevOps</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>      
                            </div>
                            <div className="col-md-9" style={{ paddingTop: '20px' }}>
                                <ul className="list-group list-group-flush">
                                    {this.renderProjects()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.props.fetchProjects();
    }
}

function mapStateToProps(state) {
    return { projects: state.projects };
}

export default connect(mapStateToProps, { fetchProjects })(Projects);