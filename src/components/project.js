import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions';
import _ from 'lodash';
import NavBar from './navbar';
import { Link } from 'react-router-dom';

class Project extends Component {
    
    renderTech(technologies) {
        return _.map(technologies, tech => {
            return <span className="badge badge-dark" style={{margin: '5px',}} key={tech}>{tech}</span>
        })
    }

    render() {
        //could write it as const project = this.props.project, but thanks to ES6
        const { project } = this.props;

        if (!project) {
            return (
                <div>
                    <NavBar changeColor={false}/>
                    <div class="card">
                        <div class="card-body text-center" style={{ paddingTop: 100 }}>
                            <h1>Project Not Found</h1>
                            <Link className="btn btn-info" to="/projects">View All Projects</Link>
                        </div>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <NavBar changeColor={false}/>
                <div class="card">
                    <div class="card-body text-center" style={{ paddingTop: 60 }}>
                        <h6 class="card-category">
                            <span className="text-info">
                                <i class="fa fa-tag"></i> {project.category.join(", ")}
                            </span>
                        </h6>
                        <div className="row">
                            <div className="col-md-8 offset-md-2">
                                <h3 className="text-center title">{project.title}</h3>
                            </div>
                        </div>
                        <p style={{fontWeight: 'normal'}}>{project.shortdescription}</p>
                        {this.renderTech(project.technologies)}
                        <div style={{marginTop: '25px'}}>
                            <p style={{fontWeight: 'normal'}}>{project.description}</p>
                        </div>
                        {project.github ? 
                            <div style={{margin: '20px'}}>
                                <a className="btn btn-success" target="_blank" href={project.github}>Github Repository</a>
                            </div> 
                            : ''
                        }
                        {project.live ? 
                            <div style={{margin: '20px'}}>
                                <a className="btn btn-danger" target="_blank" href={project.live}>Live Demo</a>
                            </div> 
                            : ''
                        }
                        <Link to="/projects" style={{color: 'black'}}><i className="fa fa-chevron-left"></i> Back to All Projects</Link>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.project) {
            this.props.fetchProjects();
        }
    }
}

function mapStateToProps({ projects }, ownProps) {
    return { project: projects[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchProjects })(Project);