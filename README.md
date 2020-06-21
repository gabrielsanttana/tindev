<div align="center">
  <img src="https://raw.githubusercontent.com/gabrielsanttana/tindev/59dc977bedbf2f23d4a29793cfd6067b15886a5d/frontend/src/assets/logo.svg" />
</div>

#####

<p align="center">A Tinder clone that makes matches between developers 🔥</p>

## 🛠️ Technologies:

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://expressjs.com/">Express</a></li>
  <li><a href="https://reactjs.org/">React</a></li>
  <li><a href="https://reactnative.dev/">React Native</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  <li><a href="https://mongoosejs.com/">Mongoose</a></li>
  <li><a href="https://socket.io/">Socket.io</a></li>
</ul>

## ⚙️ Requirements:

<ul>
  <li><a href="https://nodejs.org/en/">Node.js</a></li>
  <li><a href="https://www.npmjs.com/">NPM</a></li>
  <li><a href="https://expo.io/">Expo</a></li>
  <li><a href="https://expo.io/">Expo CLI</a></li>
  <li><a href="https://www.mongodb.com/cloud/atlas">MongoDB Atlas Cluster</a></li>
</ul>

## 🚀 Installation:

```
$ git clone https://github.com/gabrielsanttana/tindev
```

#### API

Before running the API, it's necessary to have a database setup on a MongoDB Atlas Cluster. After getting it, create a .env file in the project root and put these keys in environment variables and they'll work on the mongoose connection string:

```
MONGODB_USERNAME=your_username
MONGODB_PASSWORD=your_password
MONGODB_CLUSTER_URL=your_cluster_url
```

If you prefer, just place your connection string on the server.js file:

```
mongoose.connect(`mongodb+srv...`)
```

Then:

```bash
$ cd tindev/backend
$ npm install
$ node src/server.js
```

The API will start serving on http://localhost:3333

#### Web

```bash
$ cd tindev/frontend
$ npm install
$ npm start 
```

The application will pop-up in the browser on http://localhost:3000

## ⚖️ License:

[MIT License](https://github.com/gabrielsanttana/tindev/blob/master/LICENSE)
