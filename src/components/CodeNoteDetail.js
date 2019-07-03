import React, { Component } from 'react';
import Highlight from 'react-highlight';
import { connect } from 'react-redux';
import { getCodeNote } from '../actions';

class CodeNoteDetail extends Component {

  componentDidMount() {
    if(!this.props.note || !this.props.note.code) {
      this.props.getCodeNote(this.props.match.params.link)
    }
  }

  render() {
    const { note } = this.props;
    if(note) {
      return (
        <div className='section' style={{marginBottom: 100}}>
          <div className='text-center'>
            <h5>{note.title}</h5>
          </div>
          <div>
            <Highlight className={note.lang}>{note.code}</Highlight>
          </div> 
        </div>
      );
    }
    else {
      return (
        <div className='section'  style={{marginBottom: 100}}>
          <div className='text-center'>
            <p>Fetching the code note for you...</p>
          </div>
        </div>
      );
    }
  }
  
}

const mapStateToProps = (state, props) => {
  return {note: state.notes[props.match.params.link]};
}

export default connect(mapStateToProps, { getCodeNote })(CodeNoteDetail);