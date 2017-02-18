const yelp     = require('../utils/yelp');
const template = require('../templates/full').generateTemplate;

module.exports = (req, res) => {
  const term = req.query.text.trim();

  // Use Yelp Business API to retrieve specific information for selected place
  yelp.business(term)
    .then((data) => {
      // Generate html template via templating function
      const html = template(data.name,
                            data.rating_img_url,
                            data.review_count,
                            data.image_url,
                            data.location.display_address.join(', '),
                            data.url);
      
      // Render generated html template with Yelp business info
      res.json({
        body: html
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send('Error');
    });
};
