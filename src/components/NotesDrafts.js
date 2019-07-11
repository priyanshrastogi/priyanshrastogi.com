import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getNotesDrafts } from '../actions';

class NotesDrafts extends Component {

  componentDidMount() {
    this.props.getNotesDrafts();
  }

  renderList = () => {
    return _.map(this.props.drafts, (note) => {
      return (
        <div key={note._id}>
          <p><Link to={`/notes/drafts/${note._id}`} style={{color: 'inherit'}}>{note.title}</Link></p>
        </div>
      )
    })
  }

  render() {
    if(Object.entries(this.props.drafts).length === 0) {
      return (
        <div className='section'>
          <div className='content'>
            <p>Fetching drafts for you...</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='section'>
          <div className='content'>
            {this.renderList()}
          </div>
        </div>
      )
    } 
  }
}

const mapStateToProps = (state) => ({drafts: state.drafts});

export default connect(mapStateToProps, { getNotesDrafts })(NotesDrafts);