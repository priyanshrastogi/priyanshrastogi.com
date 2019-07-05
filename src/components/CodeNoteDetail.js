import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import moment from 'moment';
import CodeBlock from './CodeBlock';
import { getCodeNote } from '../actions';

class CodeNoteDetail extends Component {

  componentDidMount() {
    if(!this.props.note) {
      this.props.getCodeNote(this.props.match.params.link)
    }
  }

  render() {
    const { note } = this.props;
    console.log(note ? note.markdown: null);
    if(note) {
      return (
        <div className='section' style={{marginBottom: 100}}>
          <div>
            <p>Published {moment(note.createdOn).fromNow()}</p>
            <ReactMarkdown
              source={note.markdown}
              escapeHtml={false}
              renderers={{
                code: CodeBlock
              }}
            />
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