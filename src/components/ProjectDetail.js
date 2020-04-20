import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import projects from '../data/projects.json';

export default function ProjectDetail(props) {

  const project = projects[props.match.params.id];
  
  console.log(project);

  return (
    <div className='section'>
      <h4>{project.name}</h4>
      <p style={{marginTop: 20, marginBottom: 20}}>{project.description}</p>
      <p>{`Built with ${project.builtWith.join(', ')}`}</p>
      {project.website ? <div><a href={project.website} target="__blank">Website</a></div>: <span></span>}
      {project.github ? <div><a href={project.github} target="__blank">Github Repo</a></div>: <span></span>}
    </div>
  )
    

}

ProjectDetail.propTypes = {
  match: PropTypes.object.isRequired
}
