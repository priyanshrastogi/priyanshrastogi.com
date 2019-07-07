import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { postCodeNote, updateCodeNote } from '../actions';
import { saveDraft } from '../services'; 
import CodeBlock from '../components/CodeBlock';
import Header from '../components/Header';

function CreateOrUpdateCodeNote(props) {
  
  const [id, setId] = useState(props.note ? props.note._id : '');
  const [title, setTitle] = useState(props.note ?  props.note.title: '');
  const [link, setLink] = useState(props.note ? props.note.link : '');
  const [markdown, setMarkdown] = useState(props.note ? props.note.markdown : '');
  const [key, setKey] = useState('');
  const [message, setMessage] = useState('');

  const _publishNote = (e) => {
    e.preventDefault();
    props.postCodeNote({title, link, markdown}, key, () => {
      props.history.push(`/notes/${link}`);
    });
  }

  const _saveDraft = async (e) => {
    e.preventDefault();
    try {
      const note = await saveDraft(id, {title, link, markdown}, key);
      setId(note._id);
      setMessage(`Draft saved on ${new Date().toString()}`)
    }
    catch(err) {
      console.log(err);
    }
  }

  const _updateNote = (e) => {
    e.preventDefault();
    props.updateCodeNote(id, {title, link, markdown}, key, () => {
      props.history.push(`/notes/${link}`);
    })
  }

  return (
    <div className='row' style={{marginLeft: 10, marginRight: 10, minHeight: '100vh'}}>
      <div className='content col-md-6'>
      <Header name='# notes'/>
      <h5 style={{textAlign: 'center', marginBottom: 20, marginTop: 30}}>{`${props.isPublished ? 'Update' : 'Create'} A Note.`}</h5>
        <form onSubmit={(e) => e.preventDefault()}>
          <input 
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title of Note'
            style={{width: '100%', marginBottom: 20, height: 40}}
          />
          <input 
            type='text'
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder='Unique Link of Note'
            style={{width: '100%', marginBottom: 20, height: 40}}
          />
          ​<textarea
            value={markdown}
            rows={20}
            onChange={(e) => setMarkdown(e.target.value)}
            style={{width: '100%', marginBottom: 15}}
            placeholder='Body of Note in Markdown'
          />
          <input 
            type='text'
            onChange={(e) => setKey(e.target.value)}
            placeholder='Admin Key'
            style={{width: '100%', marginBottom: 20, height: 40}}
          />
          {props.isPublished ?
          <div className='text-center'>
            <input
              onClick={_updateNote}
              type='submit' 
              value='Update Note' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30, marginLeft: 20, marginRight: 20}}
            />
          </div>
          :
          <div className='text-center'>
            <input
              onClick={_publishNote}
              type='submit' 
              value='Publish' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30, marginLeft: 20, marginRight: 20}}
            />
            <input
              onClick={_saveDraft}
              type='submit' 
              value='Save Draft' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30}}
            />
          </div>
          }
        </form>
        {<p className='text-success' style={{marginTop: 5}}>{message}</p>}
      </div>
      <div className='content col-md-6 scroll' style={{maxHeight: '100vh', overflow: 'scroll'}}>
        <p>Markdown Preview</p>
          <ReactMarkdown
            source={markdown}
            escapeHtml={false}
            renderers={{
              code: CodeBlock
            }}
          />
        </div>
    </div>
  );
}

CreateOrUpdateCodeNote.propTypes = {
  isPublished: PropTypes.bool
}

CreateOrUpdateCodeNote.defaultProps = {
  isPublished: false
}

export default withRouter(connect(null, { postCodeNote, updateCodeNote })(CreateOrUpdateCodeNote));