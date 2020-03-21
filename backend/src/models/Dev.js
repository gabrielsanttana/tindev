const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  user: {
      type: String,
      required: true
  },
  bio: String,
  avatar: {
      type: String,
      required: true
  },
  likes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev'
  }],
  dislikes: [{
      type: Schema.Types.ObjectId,
      ref: 'Dev'
  }]
  },{
  timestamps: true
});

module.exports = mongoose.model("Dev", DevSchema);
