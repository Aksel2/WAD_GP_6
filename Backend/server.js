const express = require("express");
const pool = require("./database");
const cors = require("cors");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const auth = require("./auth");

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:8080", credentials: true }));
app.use(cookieParser()); // Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

//The express.json() function is a built-in middleware function in Express.
//It parses incoming requests with JSON payloads and is based on body-parser.

const secret = "gdgdhdbcb770785rgdzqws"; // use a stronger secret
const maxAge = 60 * 60; //unlike cookies, the expiresIn in jwt token is calculated by seconds not milliseconds

const generateJWT = (id) => {
  return jwt.sign({ id }, secret, { expiresIn: maxAge });
  //jwt.sign(payload, secret, [options, callback]), and it returns the JWT as string
};
//"async and await make promises easier to write"
// async makes a function return a Promise
// The keyword async before a function makes the function return a promise.
// Syntax:  "async(req, res) => {}"
// await makes a function wait for a Promise
// The await keyword can only be used inside an async function.
// The await keyword makes the function pause the execution and wait for a resolved promise before it continues
// Syntax:  "async(req, res) => {let value = await promise}"

// is used to check whether a user is autheinticated
app.get("/auth/authenticate", async (req, res) => {
  console.log("authentication request has been arrived");
  const token = req.cookies.jwt; // assign the token named jwt to the token const
  //console.log("token " + token);
  let authenticated = false; // a user is not authenticated until proven the opposite
  try {
    if (token) {
      //checks if the token exists
      //jwt.verify(token, secretOrPublicKey, [options, callback]) verify a token
      await jwt.verify(token, secret, (err) => {
        //token exists, now we try to verify it
        if (err) {
          // not verified, redirect to login page
          console.log(err.message);
          console.log("token is not verified");
          res.send({ authenticated: authenticated }); // authenticated = false
        } else {
          // token exists and it is verified
          console.log("author is authenticated");
          authenticated = true;
          res.send({ authenticated: authenticated }); // authenticated = true
        }
      });
    } else {
      //applies when the token does not exist
      console.log("author is not authinticated");
      res.send({ authenticated: authenticated }); // authenticated = false
    }
  } catch (err) {
    console.error(err.message);
    res.status(400).send(err.message);
  }
});

// signup a user
app.post("/auth/signup", async (req, res) => {
  try {
    console.log("a signup request has arrived");
    //console.log(req.body);
    const { email, password } = req.body;

    const salt = await bcrypt.genSalt(); //  generates the salt, i.e., a random string
    const bcryptPassword = await bcrypt.hash(password, salt); // hash the password and the salt
    const authUser = await pool.query(
      // insert the user and the hashed password into the database
      "INSERT INTO users(email, password) values ($1, $2) RETURNING*",
      [email, bcryptPassword]
    );
    console.log(authUser.rows[0].id);
    const token = await generateJWT(authUser.rows[0].id); // generates a JWT by taking the user id as an input (payload)
    //console.log(token);
    //res.cookie("isAuthorized", true, { maxAge: 1000 * 60, httpOnly: true });
    //res.cookie('jwt', token, { maxAge: 6000000, httpOnly: true });
    res.status(201).cookie("jwt", token, { maxAge: 6000000, httpOnly: true }).json({ user_id: authUser.rows[0].id }).send;
  } catch (err) {
    console.error(err.message);
    res.status(400).send(err.message);
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    console.log("a login request has arrived");
    const { email, password } = req.body;
    const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    if (user.rows.length === 0) return res.status(401).json({ error: "User is not registered" });

    /* 
        To authenticate users, you will need to compare the password they provide with the one in the database. 
        bcrypt.compare() accepts the plain text password and the hash that you stored, along with a callback function. 
        That callback supplies an object containing any errors that occurred, and the overall result from the comparison. 
        If the password matches the hash, the result is true.
        bcrypt.compare method takes the first argument as a plain text and the second argument as a hash password. 
        If both are equal then it returns true else returns false.
        */

    //Checking if the password is correct
    const validPassword = await bcrypt.compare(password, user.rows[0].password);
    //console.log("validPassword:" + validPassword);
    if (!validPassword) return res.status(401).json({ error: "Incorrect password" });

    const token = await generateJWT(user.rows[0].id);
    res.status(201).cookie("jwt", token, { maxAge: 6000000, httpOnly: true }).json({ user_id: user.rows[0].id }).send;
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

//logout a user = deletes the jwt
app.get("/auth/logout", (req, res) => {
  console.log("delete jwt request arrived");
  res.status(202).clearCookie("jwt").json({ Msg: "cookie cleared" }).send;
});

// Inserts a new post - auth needed
app.post("/auth/posts", auth, async (req, res) => {
  try {
    console.log("a post request has arrived");
    const post = req.body;
    const newpost = await pool.query(
      "INSERT INTO posts (date, message) values ($2, $1)    RETURNING*",
      [post.message, post.date]
      // $1, $2, $3 are mapped to the first, second and third element of the passed array (post.title, post.body, post.urllink)
      // The RETURNING keyword in PostgreSQL allows returning a value from the insert or update statement.
      // using "*" after the RETURNING keyword in PostgreSQL, will return everything
    );
    console.log('restart')
    res.json(newpost);
  } catch (err) {
    console.error(err.message);
  }
});

// Returns all posts, no auth needed
app.get("/posts", async (req, res) => {
  try {
    console.log("get posts request has arrived");
    const posts = await pool.query("SELECT * FROM posts ORDER BY date DESC");
    // console.log(posts);
    // res.json(posts.rows);
    console.log('done')
  } catch (err) {
    console.error(err.message);
  }
});

// Returns a post by id - is auth needed? 
app.get("/auth/posts/:id", auth, async (req, res) => {
  try {
    console.log("get a post with route parameter request has arrived");
    // The req.params property is an object containing properties mapped to the named route "parameters".
    // For example, if you have the route /posts/:id, then the "id" property is available as req.params.id.
    const { id } = req.params; // assigning all route "parameters" to the id "object"
    const posts = await pool.query(
      // pool.query runs a single query on the database.
      //$1 is mapped to the first element of { id } (which is just the value of id).
      "SELECT * FROM posts WHERE id = $1",
      [id]
    );
    res.json(posts.rows[0]); // we already know that the row array contains a single element, and here we are trying to access it
    // The res.json() function sends a JSON response.
    // This method sends a response (with the correct content-type) that is the parameter converted to a JSON string using the JSON.stringify() method.
  } catch (err) {
    console.error(err.message);
  }
});

app.put("/auth/posts/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    const post = req.body;
    console.log("update request has arrived");
    const updatepost = await pool.query("UPDATE posts SET (date, message) = ($3, $2) WHERE id = $1", [
      id,
      post.message,
      post.date,
    ]);
    res.json(updatepost);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/auth/posts/:id", auth, async (req, res) => {
  try {
    const { id } = req.params;
    //const post = req.body; // we do not need a body for a delete request
    console.log("delete a post request has arrived");
    const deletepost = await pool.query("DELETE FROM posts WHERE id = $1", [id]);
    res.json(deletepost);
  } catch (err) {
    console.error(err.message);
  }
});

// No need for deleting all the posts
app.delete("/auth/posts", auth, async (req, res) => {
  try {
    console.log("delete all posts request has arrived");
    const deleteAllposts = await pool.query("TRUNCATE TABLE posts");
    res.json(deleteAllposts);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(port, () => {
  console.log("Server is listening to port " + port);
});


