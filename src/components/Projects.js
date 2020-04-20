import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import projects from '../data/projects.json';

export default function Projects(props) {

  console.log(projects)

  const renderList = () => {
    return _.map(projects, (project) => {
      return (
        <div key={project.id}>
          <p><Link to={`/work/${project.id}`} style={{color: 'inherit'}}>{project.name}</Link></p>
        </div>
      )
    })
  }

  const renderButton = () => {
    return (
      <div>
        <Link to='/work' style={{textAlign: 'center', color: 'inherit'}}>View All Work</Link>
      </div>
    )
  }

  
  return (
    <div className='section'>
    {props.showHeader ? <h2><span className='topic-highlight'># work</span></h2>: null}
      <div className='content'>
        {renderList()}
      </div>
      {props.showGotoPageButton ? renderButton() : null}
    </div>
  )
    

}

Projects.propTypes = {
  showGotoPageButton: PropTypes.bool
}

Projects.defaultProps = {
  showGotoPageButton: true,
  showHeader: true
}
