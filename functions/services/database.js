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
    const existing = await subscribers.findOne({email})
    if(existing) {
      resolve({false: true, message: 'This email is already subscribed'});
    }
    else {
      const inserted = await subscribers.insertOne({email, subscribedOn: new Date()});
      resolve({success: true, message: 'Subscription successful'});
    }
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getSubscribers = () => new Promise(async (resolve, reject) => {
  let subscribers;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      subscribers = db.collection('subscribers');
    }
    else {
      subscribers = db.collection('subscribers');
    }
    const result = await subscribers.find({});
    resolve(await result.toArray());
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.insertIntoNotes = (note) => new Promise(async (resolve, reject) => {
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

exports.insertIntoNotes = (note) => new Promise(async (resolve, reject) => {
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
    note['createdOn'] = new Date();
    const inserted = await notes.insertOne(note);
    resolve(inserted.ops[0]);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.updateNote = (id, note) => new Promise(async (resolve, reject) => {
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
    const result = await notes.findOneAndUpdate({_id: mongodb.ObjectID(id)}, {$set: note}, { returnOriginal: false });
    resolve(await result.value);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getNotes = () => new Promise(async (resolve, reject) => {
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
    const result = await notes.find({}).sort({createdOn: -1});
    resolve(await result.toArray());
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getNoteByLink = (link) => new Promise(async (resolve, reject) => {
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

exports.insertIntoNotesDrafts = (note) => new Promise(async (resolve, reject) => {
  let drafts;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      drafts = db.collection('notes_drafts');
    }
    else {
      drafts = db.collection('notes_drafts');
    }
    note['createdOn'] = new Date();
    const inserted = await drafts.insertOne(note);
    resolve(inserted.ops[0]);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.updateNotesDraft = (id, note) => new Promise(async (resolve, reject) => {
  let drafts;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      drafts = db.collection('notes_drafts');
    }
    else {
      drafts = db.collection('notes_drafts');
    }
    const result = await drafts.findOneAndUpdate({_id: mongodb.ObjectID(id)}, {$set: note}, { returnOriginal: false });
    resolve(await result.value);
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});

exports.getNotesDrafts = () => new Promise(async (resolve, reject) => {
  let drafts;
  try {
    if(db === null) {
      const conn = await mongoClient.connect(url, { useNewUrlParser: true });
      db = conn.db('priyanshrastogidotcom');
      drafts = db.collection('notes_drafts');
    }
    else {
      drafts = db.collection('notes_drafts');
    }
    const result = await drafts.find({});
    resolve(await result.toArray());
  }
  catch(err) {
    console.log(err);
    reject(err)
  }
});