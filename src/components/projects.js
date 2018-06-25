import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { fetchProjects } from '../actions';

class Projects extends Component {
    
    renderProjects() {
        return _.map(this.props.projects, project => {
            return (
                <div className="col-md-4" key={project.id}>
                    <div className='card text-white bg-dark mb-3' style={{padding: 20, marginBottom: 20}}>
                        <h5>{project.title}</h5>
                        <p>{project.shortdescription}</p>
                        <Link to={`/projects/${project.id}`} className="card-link">View Project</Link>
                    </div>
                </div>
            );
        });
    }
    
    render() {
        return (
            <div className="container text-center">
                <h4 style={{ fontWeight: 300, marginBottom:'25px', marginTop:'25px' }}>Projects</h4>
                <div className="row">
                        {this.renderProjects()}
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