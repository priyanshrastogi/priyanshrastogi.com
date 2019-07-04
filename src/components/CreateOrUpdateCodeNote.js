import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { postCodeNote } from '../actions';
import CodeBlock from '../components/CodeBlock';
import Header from '../components/Header';

function CreateOrUpdateCodeNote(props) {
  
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [markdown, setMarkdown] = useState('');
  const [key, setKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.postCodeNote({title, link, markdown}, key, () => {
      props.history.push('/codenotes');
    });
  }

  return (
    <div className='row' style={{marginLeft: 10, marginRight: 10, minHeight: '100vh'}}>
      <div className='content col-md-6'>
      <Header name='# code notes'/>
      <h5 style={{textAlign: 'center', marginBottom: 20, marginTop: 30}}>Create A Code Note.</h5>
        <form onSubmit={handleSubmit}>
          <input 
            type='text'
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Title of Code Note'
            style={{width: '100%', marginBottom: 20, height: 40}}
          />
          <input 
            type='text'
            onChange={(e) => setLink(e.target.value)}
            placeholder='Unique Link of Code Note'
            style={{width: '100%', marginBottom: 20, height: 40}}
          />
          ​<textarea
            rows={20}
            onChange={(e) => setMarkdown(e.target.value)}
            style={{width: '100%', marginBottom: 15}}
            placeholder='Body of Code Note in Markdown'
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
              type='submit' 
              value='Update' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30, marginLeft: 20, marginRight: 20}}
            />
          </div>
          :
          <div className='text-center'>
            <input
              type='submit' 
              value='Publish' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30, marginLeft: 20, marginRight: 20}}
            />
            <input
              type='submit' 
              value='Save Draft' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30}}
            />
          </div>
          }
        </form>
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
  history: PropTypes.object.isRequired,
  isPublished: PropTypes.bool
}

CreateOrUpdateCodeNote.defaultProps = {
  isPublished: false
}

export default connect(null, { postCodeNote })(CreateOrUpdateCodeNote);