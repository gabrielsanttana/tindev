const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async index() {

  },

  async store(req, res) {
    const {username} = req.body;

    const userExists = Dev.find({user: username});

    if(userExists) {
      console.log(`User ${username} already exists`);

      return res.json(userExists);
    }

    const githubResponse = await axios.get(`https://api.github.com/users/${username}`);

    const {name, bio, avatar_url: avatar} = githubResponse.data;

    const dev = Dev.create({
      name,
      user: username,
      bio,
      avatar,
    });

    console.log('User successfully created!');

    return res.json(dev);
  },
};