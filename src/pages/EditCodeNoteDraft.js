import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCodeNotesDrafts } from '../actions';
import CreateOrUpdateCodeNote from '../components/CreateOrUpdateCodeNote';

class CodeNoteDetail extends Component {

  componentDidMount() {
    if(!this.props.note) {
      this.props.getCodeNotesDrafts();
    }
  }

  render() {
    const { note } = this.props;
    if(note) {
      return <CreateOrUpdateCodeNote note={note}/>
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

export default connect(mapStateToProps, { getCodeNotesDrafts })(CodeNoteDetail);