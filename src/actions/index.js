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

export const getNotes = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/notes`);
    dispatch({type: GET_CODE_NOTES, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const getNote = (link) => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/notes/${link}`);
    dispatch({type: GET_CODE_NOTE, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}

export const postNote = (note, key, callback) => async dispatch => {
  try {
    const res = await axios.post(`${API_ROOT_URL}/notes`, note, {
      headers: {'Authorization': key}
    });
    dispatch({type: GET_CODE_NOTE, payload: res.data});
    callback();  
  }
  catch(err) {
    console.log(err);
  }
}

export const updateNote = (id, note, key, callback) => async dispatch => {
  try {
    const res = await axios.put(`${API_ROOT_URL}/notes/${id}`, note, {
      headers: {'Authorization': key}
    });
    dispatch({type: GET_CODE_NOTE, payload: res.data});
    callback();  
  }
  catch(err) {
    console.log(err);
  }
}

export const getNotesDrafts = () => async dispatch => {
  try {
    const res = await axios.get(`${API_ROOT_URL}/notes/drafts`);
    dispatch({type: GET_CODE_NOTES_DRAFTS, payload: res.data}); 
  }
  catch(err) {
    console.log(err);
  }
}