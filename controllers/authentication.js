const User = require('../models/user');

exports.signup = function(req, res, next) {
  // res.send({success:'true'})

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({email:email}, function(err, existingUser) {
    if(err) {return next(err)}
    if(existingUser) {
      return res.status(422).send({error:'Email is in use'});
    }
    // create user object
    const user = new User({
      email: email,
      password: password
    });

    user.save(function(err) {
      if(err) {return next(err)}
      res.json(user);

    });
  });

}
