const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const {userID} = req.headers;

    const loggedDev = await Dev.findById(userID);

    const devList = await Dev.find({
      $and: [
        {_id: {$ne: userID } },
        {_id: {$nin: loggedDev. likes}},
        {_id: {$nin: loggedDev. dislikes}}
      ]
    }).sort({_id: -1});

    return res.json(devList);
  },

  async store(req, res) {
    const {username} = req.body;

    console.log({username});
    
    const userExists = await Dev.findOne({user: username});

    if(userExists) {
      console.log(`User ${username} already exists`);

      return res.json(userExists);
    }

    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);

    const {name, bio, avatar_url: avatar} = githubResponse.data;

    const dev = await Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    console.log('User successfully created!');

    return res.json(dev);
  },
};