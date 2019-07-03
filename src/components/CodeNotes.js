import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { getCodeNotes } from '../actions';

class CodeNotes extends Component {

  componentDidMount() {
    this.props.getCodeNotes();
  }

  renderList = () => {
    return _.map(this.props.notes, (note) => {
      return (
        <div key={note._id}>
          <p><Link to={`/codenotes/${note.link}`} style={{color: 'inherit'}}>{note.title}</Link></p>
        </div>
      )
    })
  }

  renderButton = () => {
    return (
      <div>
        <Link to='/codenotes' style={{textAlign: 'center', color: 'inherit'}}>View All Code Notes</Link>
      </div>
    )
  }

  render() {
    if(Object.entries(this.props.notes).length === 0) {
      return (
        <div className='section'>
          {this.props.showHeader ? <h2><span className='topic-highlight'># code notes</span></h2>: null}
          <div className='content'>
            <p>Fetching notes for you...</p>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className='section'>
         {this.props.showHeader ? <h2><span className='topic-highlight'># code notes</span></h2>: null}
          <div className='content'>
            {this.renderList()}
          </div>
          {this.props.showGotoPageButton ? this.renderButton() : null}
        </div>
      )
    }
    
  }

}

CodeNotes.propTypes = {
  showGotoPageButton: PropTypes.bool

}

CodeNotes.defaultProps = {
  showGotoPageButton: true,
  showHeader: true
}

const mapStateToProps = (state) => ({notes: state.notes});

export default connect(mapStateToProps, { getCodeNotes })(CodeNotes);