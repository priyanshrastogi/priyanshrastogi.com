const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;

let db = null;
const url = process.env.MONGODB_URL;

const insertIntoSubscribers = (email) => new Promise(async (resolve, reject) => {
  let subscribers;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url,  { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      subscribers =  db.collection('subscribers');
    }
    else {
      subscribers =  db.collection('subscribers');
    }
    const existing = await subscribers.findOne({email});
    if(existing) {
      resolve({success: false, message: 'This email is already subscribed.'});
    }
    else {
      const inserted = await subscribers.insertOne({email, subscribedOn: new Date()});
      resolve({success: true, message: 'Done! Subscription successful.'});
    }
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

export default async (req, res) => {
  try {
    const result = await insertIntoSubscribers(req.body.email);
    res.json(result);
  }
  catch(err) {
    next(err);
  }
}