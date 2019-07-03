const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient;

let db = null;
const url = process.env.MONGODB_URL;

exports.insertIntoSubscribers = (email) => new Promise(async (resolve, reject) => {
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
    const inserted = await subscribers.insertOne({email, subscribedOn: new Date(), active: true});
    resolve(inserted.ops[0]);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.insertIntoCodeNotes = (note) => new Promise(async (resolve, reject) => {
  let notes;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url,  { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      notes = db.collection('notes');
    }
    else {
      notes = db.collection('notes');
    }
    const inserted = await notes.insertOne(notes);
    resolve(inserted.ops[0]);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.insertIntoCodeNotes = (note) => new Promise(async (resolve, reject) => {
  let notes;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      notes = db.collection('notes');
    }
    else {
      notes = db.collection('notes');
    }
    const inserted = await notes.insertOne(note);
    resolve(inserted.ops[0]);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getCodeNotes = () => new Promise(async (resolve, reject) => {
  let notes;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      notes = db.collection('notes');
    }
    else {
      notes = db.collection('notes');
    }
    const result = await notes.find({});
    resolve(await result.toArray());
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getCodeNoteByLink = (link) => new Promise(async (resolve, reject) => {
  let notes;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      notes = db.collection('notes');
    }
    else {
      notes = db.collection('notes');
    }
    const result = await notes.findOne({link});
    resolve(result);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});