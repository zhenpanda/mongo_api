

// This is the schema.  Note the types, validation and trim
// statements.  They enforce useful constraints on the data.
var userSchema = new mongoose.Schema({
  name: {
    first: String,
    last: { type: String, trim: true }
  },
  age: { type: Number, min: 0}
});

// Compiles the schema into a model, opening (or creating, if
// nonexistent) the 'PowerUsers' collection in the MongoDB database
var PUser = mongoose.model('PowerUsers', userSchema);

// Clear out old data
PUser.remove({}, function(err) {
  if (err) {
    console.log ('error deleting old data.');
  }
});

// Creating one user.
var johndoe = new PUser ({
  name: { first: 'John', last: 'Doe' },
  age: 25
});

// Saving it to the database.
johndoe.save(function (err) {if (err) console.log ('Error on save!')});

// Creating more users manually
var janedoe = new PUser ({
  name: { first: 'Jane', last: 'Doe' },
  age: 65
});
janedoe.save(function (err) {if (err) console.log ('Error on save!')});

// Creating more users manually
var alicesmith = new PUser ({
  name: { first: 'Alice', last: 'Smith' },
  age: 45
});
alicesmith.save(function (err) {if (err) console.log ('Error on save!')});


// In case the browser connects before the database is connected, the
// user will see this message.
var found = ['DB Connection not yet established.  Try again later.  Check the console output for error messages if this persists.'];

// Create a rudimentary http server.  (Note, a real web application
// would use a complete web framework and router like express.js).
// This is effectively the main interaction loop for the application.
// As new http requests arrive, the callback function gets invoked.
