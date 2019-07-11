import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getNote } from '../actions';
import CreateOrUpdateNote from '../components/CreateOrUpdateNote';

class EditNotePage extends Component {

  componentDidMount() {
    if(!this.props.note) {
      this.props.getNote(this.props.match.params.link)
    }
  }

  render() {
    const { note } = this.props;
    if(note) {
      return <CreateOrUpdateNote isPublished note={note}/>
    }
    else {
      return (
        <div className='section'  style={{marginBottom: 100}}>
          <div className='text-center'>
            <p>Fetching the note for you...</p>
          </div>
        </div>
      );
    }
  }
  
}

const mapStateToProps = (state, props) => {
  return {note: state.notes[props.match.params.link]};
}

export default connect(mapStateToProps, { getNote })(EditNotePage);