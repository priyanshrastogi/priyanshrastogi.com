const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const morgan = require('morgan');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const cors = require('cors');
const database = require('./services/database');
const web = require('./services/web');
const mailer = require('./services/mailer');

const functionName = 'api';
const basePath = `/.netlify/functions/${functionName}/`;

const app = express(functionName);
const router = express.Router();

app.use(cors({origin: 'http://localhost:3000'}))
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
  res.send('priyanshrastogi.com Serverless API.')
});

router.get('/blogposts', async (req, res, next) => {
  try {
    const posts = await web.getBlogPosts();
    res.json(posts);
  }
  catch(err) {
    next(err);
  }
});

router.get('/githubrepos', async (req, res, next) => {
  try {
    const posts = await web.getGithubRepos();
    res.json(posts);
  }
  catch(err) {
    next(err);
  }
});

router.get('/notes', async (req, res, next) => {
  try {
    const notes = await database.getNotes();
    res.json(notes);
  }
  catch(err) {
    next(err);
  }
});

router.post('/notes', async (req, res, next) => {
  try {
    if(req.headers.authorization === process.env.ADMIN_KEY) {
      const note = await database.insertIntoNotes(req.body);
      res.json(note);
    }
    else {
      res.status(401).send('Unauthorized');
    }
  }
  catch(err) {
    next(err);
  }
});

router.get('/notes/drafts', async (req, res, next) => {
  try {
    //if(req.headers.authorization === process.env.ADMIN_KEY) {
      const note = await database.getNotesDrafts();
      res.json(note);
    //}
    //else {
      //res.status(401).send('Unauthorized');
    //}
  }
  catch(err) {
    next(err);
  }
});

router.post('/notes/drafts', async (req, res, next) => {
  try {
    if(req.headers.authorization === process.env.ADMIN_KEY) {
      const note = await database.insertIntoNotesDrafts(req.body);
      res.json(note);
    }
    else {
      res.status(401).send('Unauthorized');
    }
  }
  catch(err) {
    next(err);
  }
});

router.put('/notes/drafts/:id', async (req, res, next) => {
  try {
    if(req.headers.authorization === process.env.ADMIN_KEY) {
      const note = await database.updateNotesDraft(req.params.id, req.body);
      res.json(note);
    }
    else {
      res.status(401).send('Unauthorized');
    }
  }
  catch(err) {
    next(err);
  }
});

router.put('/notes/:id', async (req, res, next) => {
  try {
    if(req.headers.authorization === process.env.ADMIN_KEY) {
      const note = await database.updateNote(req.params.id ,req.body);
      res.json(note);
    }
    else {
      res.status(401).send('Unauthorized');
    }
  }
  catch(err) {
    next(err);
  }
});

router.get('/notes/:link', async (req, res, next) => {
  try {
    const note = await database.getNoteByLink(req.params.link);
    res.json(note);
  }
  catch(err) {
    next(err);
  }
});

router.post('/subscribe', async (req, res, next) => {
  try {
    const result = await database.insertIntoSubscribers(req.body.email);
    res.json(result);
  }
  catch(err) {
    next(err);
  }
});

router.get('/subscribers', async (req, res, next) => {
  if(req.headers.authorization === process.env.ADMIN_KEY) {
    const subscribers = await database.getSubscribers();
    res.json(subscribers);
  }
  else {
    res.status(401).send('Unauthorized');
  }
});

router.post('/sendmail', async (req, res, next) => {
  if(req.headers.authorization === process.env.ADMIN_KEY) {
    const result = await mailer.sendMail(req.body);
    res.json(result);
  }
  else {
    res.status(401).send('Unauthorized');
  }
})

app.use(basePath, router);

router.use(awsServerlessExpressMiddleware.eventContext());

if(process.env.REACT_APP_RUN_ON_LOCAL === '1') {
  app.listen(9000, () => {
    console.log('priyanshrastogi.com Serverless API listening on port 9000');
  });
}

// Initialize awsServerlessExpress
const server = awsServerlessExpress.createServer(app);

// Export lambda handler
exports.handler = (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  return awsServerlessExpress.proxy(server, event, context)
}