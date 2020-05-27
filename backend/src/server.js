const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routes = require('./routes');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const connectedUsers = {};

io.on('connection', socket => {
  const {user} = socket.handshake.query;
  connectedUsers[user] = socket.id;
  console.log(`Connected user: ${user}`);
});

mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${MONGODB_CLUSTER_URL}/tindev`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;
  return next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333, () => {
  console.log('Server is running on port 3333');
});
