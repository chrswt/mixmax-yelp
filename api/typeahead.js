const yelp = require('../utils/yelp');

module.exports = (req, res) => {
  // Extract trailing query term after slash command is resolved
  const term = req.query.text.trim();

  // Default behavior before field is dirty
  if (!term) {
    res.json([{
      title: '<i>(Enter a restauraunt or business name)</i>',
      text: ''
    }]);
    return;

  // Handle Yelp Search API call
  } else {
    // TODO: Handle auto-detection of geolocation
    yelp.search({
      term: term,
      location: 'United States'
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error');
    });
  }
};
