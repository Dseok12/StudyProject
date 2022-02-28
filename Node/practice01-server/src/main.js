// @ts-check
const express = require('express')
// const bodyParser = require('body-parser')
// const fs = require('fs');
const userRouter = express.Router()

const app = express()
app.use(express.json())

const PORT = 5000

/*

app.use(
  '/',
  async (req, res, next) => {
    console.log('Middleware 1-1');
    const requestedAt = new Date();

    const fileContent = await fs.promises.readFile('.gitignore');
    // @ts-ignore
    req.requestedAt = requestedAt;
    // @ts-ignore
    req.fileContent = fileContent;

    setTimeout(() => {
      next();
    }, 1000);
  },
  (req, res, next) => {
    console.log('Middleware 1-2');
    next();
  }
);

app.use((req, res, next) => {
  console.log('Middleware 2');
  // @ts-ignore
  res.send(`Request at ${req.requestedAt}, ${req.fileContent}`);
  next();
});
*/
userRouter.get('/', (req, res) => {
  res.send('Root - GET - User List')
})

userRouter.param('id', (req, res, next, value) => {
  console.log(`User ID Parameter`, value)
  // @ts-ignore
  res.user = USERS[value]
  next()
})

const USERS = {
  15: {
    nickname: 'foo',
  },
}

userRouter.get('/:id', (req, res) => {
  console.log(`User Router Get ID`)

  // @ts-ignore
  res.send(res.user)
})

userRouter.post('/', (req, res) => {
  res.send('Root - POST')
})

userRouter.post('/:id/nickname', (req, res) => {
  // @ts-ignore
  const { user } = req
  const { nickname } = req.body
  user.nickname = nickname
  res.send(`User Nickname Updated: ${nickname}`)
})

app.use('/users', userRouter)

/*
app.post('/', (req, res) => {
  res.send('Root - POST');
});
*/

app.listen(PORT, () => {
  console.log(`${PORT}서버를 성공적으로 열었습니다.`)
})
