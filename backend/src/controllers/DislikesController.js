const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    const {devID} = req.params;
    const {userID} = req.headers;

    const loggedDev = await Dev.findById(userID);
    const targetDev = await Dev.findById(devID);

    if(!targetDev) {
      return res.status(400).json({error: 'Target dev not found'});
    }

    loggedDev.dislikes.push(targetDev._id);

    await loggedDev.save();

    console.log(`User ${loggedDev.user} dislikes ${targetDev.user}`);
    
    return res.json(loggedDev);
  },
};