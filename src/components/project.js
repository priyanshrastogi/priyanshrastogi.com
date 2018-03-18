import React, { Component } from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';
import { fetchProjects } from '../actions';
import _ from 'lodash';

class Project extends Component {
    
    renderTech(technologies) {
        return _.map(technologies, tech => {
            return <span className="badge badge-success" style={{margin: '5px',}} key={tech}>{tech}</span>
        })
    }

    render() {
        //could write it as const project = this.props.project, but thanks to ES6
        const { project } = this.props;

        if (!project) {
            return <div className="text-center">Loading...</div>
        }

        return (
            <div className="container text-center">
                <h4 style={{ fontWeight: 300, marginBottom:'25px', marginTop:'25px' }}>{project.title}</h4>
                <p>{project.shortdescription}</p>
                {this.renderTech(project.technologies)}
                <div style={{marginTop: '25px'}}>
                    <Markdown source={project.description} escapeHtml={false} />
                </div>
                {project.github ? 
                    <div style={{margin: '20px'}}>
                        <a className="card-link" target="_blank" href={project.github}>Github Repository</a>
                    </div> 
                    : ''
                }
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