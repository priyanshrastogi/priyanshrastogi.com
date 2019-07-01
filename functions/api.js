const express = require('express');
const awsServerlessExpress = require('aws-serverless-express');
const morgan = require('morgan');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const cors = require('cors');
const database = require('./services/database');
const medium = require('./services/medium');

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

router.get('/blog/posts', async (req, res, next) => {
  try {
    const posts = await medium.getBlogPosts();
    res.json(posts);
  }
  catch(err) {
    next(err);
  }
});

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
  return awsServerlessExpress.proxy(server, event, context)
}