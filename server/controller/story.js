const Story = require("../model/story");

// Create a Story
createOne = async (req, res) => {
  try {
    const maxObj = await Story.aggregate([
      {
        $group: { _id: null, maxValue: { $max: '$storyId' } }
      }
    ]);

    console.log(maxObj)

    const storyId = maxObj.length === 0 ? 1 : maxObj[0].maxValue + 1;

    const newStory = new Story({
      storyId: storyId,
      title: req.body.title,
      text: req.body.storyDesc,
      destination: req.body.destination
    });

    const story = await newStory.save();
    res.status(200).json(story);
  } catch (err) {
    res.status(500).json(err)
  }
};

// Get All Stories
findAll = async (req, res) => {
  try {
    const story = await Story.find({});
    if (!story) return res.status(404).json("story not found");

    res.status(200).json(story)
  } catch (err) {
    res.status(500).json(err)
  }
};

// Retrieve a Single Story
findOneById = async (req, res) => {
  try {
    const story = await Story.findOne({ storyId: Number(req.params.storyId) });
    if (!story) return res.status(404).json("story not found");

    res.status(200).json(story)
  } catch (err) {
    res.status(500).json(err)
  }
};

module.exports = {
  createOne,
  findAll,
  findOneById
}
