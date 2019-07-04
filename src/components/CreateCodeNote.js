import React, { useState } from 'react';
import { connect } from 'react-redux';
import { postCodeNote } from '../actions';

function CreateCodeNote(props) {
  
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
    <div className='section'>
      <div className='content col-md-8 offset-md-2'>
        <h5 style={{textAlign: 'center', marginBottom: 20}}>Create A Code Note.</h5>
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
          <div className='text-center'>
            <input
              type='submit' 
              value='Post' 
              style={{backgroundColor: '#3366FF', borderColor: '#3366FF', color: 'white', boxShadow: '5px 5px #888888', height: 40, paddingLeft: 30, paddingRight: 30}}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default connect(null, { postCodeNote })(CreateCodeNote);