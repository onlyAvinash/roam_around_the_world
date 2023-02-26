const express = require('express')

const Story = require('../controller/story')

const router = express.Router()

router.post('/create/', Story.createOne)
router.get('/', Story.findAll)
router.get('/:storyId', Story.findOneById)

module.exports = router