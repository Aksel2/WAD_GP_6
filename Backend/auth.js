const jwt = require("jsonwebtoken");

const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret

// auth middleware
const authenticate = async (req, res, next) => {
  console.log("authentication request has been arrived");
  const token = req.cookies.jwt; // assign the token named jwt to the token const

  //console.log("token " + token);
  let authenticated = false; // a user is not authenticated until proven the opposite
  try {
    if (!token) {
      return res.status(400).send("No token provided");
    }
    //checks if the token exists
    //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
    await jwt.verify(token, secret, (err) => {
      //token exists, now we try to verify it
      if (err) {
        // not verified, redirect to login page
        console.log(err.message);
        console.log("token is not verified");
        return res.status(401).send("Invalid Token");
        //   res.send({ authenticated: authenticated }); // authenticated = false
      } else {
        // token exists and it is verified
        console.log("author is authenticated");
        authenticated = true;
        return next();
        //   res.send({ authenticated: authenticated }); // authenticated = true
      }
    });
    // validate the token and call next() to allow other routes to execute,
    // or send response / error if token is not valid
  } catch (err) {
    console.error(err.message);
    return ies.status(400).send(err.message);
  }
};

module.exports = authenticate;
