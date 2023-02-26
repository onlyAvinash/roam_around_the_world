const findAll = async (req, res) => {
    try {
      const documents = await MyModel.find({});
      res.status(200).json(documents);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };