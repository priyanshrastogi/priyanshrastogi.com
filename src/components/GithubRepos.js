import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGithubRepos } from '../actions';

class GithubRepos extends Component {

  componentDidMount() {
    if(this.props.repos.length === 0) {
      this.props.getGithubRepos();
    }
  }

  renderList = () => {
    return this.props.repos.map((repo) => {
      return (
        <div key={repo.id}>
          <p><a target='_blank' href={repo.url} style={{color: 'inherit'}}>{repo.fullName}</a></p>
        </div>
      )
    })
  }

  render() {
    if(this.props.repos.length === 0) {
      return (
        <div className='section'>
          <h2><span className='topic-highlight'># github repos</span></h2>
          <div className='content'>
            <p>Fetching repos for you...</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='section'>
          <h2><span className='topic-highlight'># github repos</span></h2>
          <div className='content'>
            {this.renderList()}
          </div>
        </div>
      )
    }
    
  }

}

const mapStateToProps = (state) => ({repos: state.repos});

export default connect(mapStateToProps, { getGithubRepos })(GithubRepos);