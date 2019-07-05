import axios from 'axios';

export const GET_BLOG_POSTS = 'get_blog_posts';
export const GET_GITHUB_REPOS = 'get_github_repos';
export const GET_CODE_NOTES = 'get_code_notes';
export const GET_CODE_NOTE = 'get_code_note';
export const GET_CODE_NOTES_DRAFTS = 'get_code_notes_drafts';

let API_ROOT_URL;
if(process.env.REACT_APP_RUN_ON_LOCAL === '1') {
  API_ROOT_URL = 'http://localhost:9000/.netlify/functions/api';
}
else {
  API_ROOT_URL = '/.netlify/functions/api';
}

export const getBlogPosts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/blogposts`);
    dispatch({type: GET_BLOG_POSTS, payload: res.data.items}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const getGithubRepos = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/githubrepos`);
    dispatch({type: GET_GITHUB_REPOS, payload: res.data});
  }
  catch(err) {
    console.log(err);
  }
}

export const getCodeNotes = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/codenotes`);
    dispatch({type: GET_CODE_NOTES, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const getCodeNote = (link) => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/codenotes/${link}`);
    dispatch({type: GET_CODE_NOTE, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const postCodeNote = (note, key, callback) => async dispatch => {
  try {
    const res = await axios.post(`${API_ROOT_URL}/codenotes`, note, {
      headers: {'Authorization': key}
    });
    dispatch({type: GET_CODE_NOTE, payload: res.data});
    callback();  
  }
  catch(err) {
    console.log(err);
  }
}

export const getCodeNotesDrafts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/codenotes/drafts`);
    dispatch({type: GET_CODE_NOTES_DRAFTS, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}