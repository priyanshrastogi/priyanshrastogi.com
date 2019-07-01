import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBlogPosts } from '../actions';

class BlogPosts extends Component {

  componentDidMount() {
    if(this.props.posts.length === 0) {
      this.props.getBlogPosts();
    }
  }

  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <div key={post.guid}>
          <p><a target='_blank' href={post.link} style={{color: 'inherit'}}>{post.title}</a></p>
        </div>
      )
    })
  }

  render() {
    if(this.props.posts.length === 0) {
      return (
        <div className='blogposts'>
          <h2># blog posts</h2>
          <p>Fetching posts for you...</p>
        </div>
      )
    }
    else {
      return (
        <div className='blogposts'>
          <h2># blog posts</h2>
          {this.renderList()}
        </div>
      )
    }
    
  }

}

const mapStateToProps = (state) => ({posts: state.posts});

export default connect(mapStateToProps, { getBlogPosts })(BlogPosts);