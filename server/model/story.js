const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const arrayLimit = (val) => val.length <= 4;

const StorySchema = new Schema({
  storyId: { type: Number, unique: true },

  title: {
    type: String,
    default: "",
    required: true
  },

  text: {
    type: String,
    default: "",
    required: true
  },

  CreatedAt: { type: String, default: Date.now() }
});

const Story = mongoose.model('Story', StorySchema);

module.exports = Story;
