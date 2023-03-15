import express from 'express';
import cookieParser from 'cookie-parser';
const app = express();
const port = 8080;

app.use(cookieParser())

app.listen(port, () => console.log(`Cookie app listening at http://localhost:${port}`))

app.get('/login', (request, response) => {

  var opts = {
    maxAge: 900000,
    httpOnly: true,
    sameSite: 'strict',
  };

  response.cookie('username', { name: 'brandon'}, opts);

  response.status(200).send("login")
})

app.get('/hello', (request, response) => {
  response.status(200).send(`Welcome ${request.cookies.username.name}!`)
})