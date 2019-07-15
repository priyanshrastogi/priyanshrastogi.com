import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNotesDrafts } from '../actions';
import CreateOrUpdateNote from '../components/CreateOrUpdateNote';

class NoteDetail extends Component {

  componentDidMount() {
    if(!this.props.note) {
      this.props.getNotesDrafts();
    }
  }

  render() {
    const { note } = this.props;
    if(note) {
      return <CreateOrUpdateNote note={note}/>
    }
    else {
      return (
        <div className='section'  style={{marginBottom: 100}}>
          <div className='text-center'>
            <p>Fetching the draft for you...</p>
          </div>
        </div>
      );
    }
  }
  
}

const mapStateToProps = (state, props) => {
  return {note: state.drafts[props.match.params.id]};
}

export default connect(mapStateToProps, { getNotesDrafts })(NoteDetail);