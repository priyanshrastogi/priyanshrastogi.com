import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCodeNote } from '../actions';
import CreateOrUpdateCodeNote from '../components/CreateOrUpdateCodeNote';

class EditCodeNotePage extends Component {

  componentDidMount() {
    if(!this.props.note) {
      this.props.getCodeNote(this.props.match.params.link)
    }
  }

  render() {
    const { note } = this.props;
    if(note) {
      return <CreateOrUpdateCodeNote isPublished note={note}/>
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

export default connect(mapStateToProps, { getCodeNote })(EditCodeNotePage);