const generateTemplate = (name, rating, reviewCount, imageUrl, location, url) => {
  // Prevent text overflow on address line
  if (location.length >= 48) {
    location = location.slice(0, 49) + '...';
  }

  // Generate html template of business listing
  return `
    <div style="font-weight: 200; font-family: 'Helvetica Neue';
      height: 100px; width: 500px; cursor: pointer">
      <div style="display: inline; float: left; margin-right: 10px">
        <img src="${imageUrl}"></img>
      </div>
      <div style="display: inline-block; max-width: 390px;">
        <div style="font-size: 32px">${name}</div>
        <div>${location}</div>
        <div style="margin-top: 5px">
          <div style="display: inline;">
            <img src="${rating}"></img>
          </div>
          <div style="display: inline-block; float: right">
            <a href="${url}">
              <img src="https://cdn.pbrd.co/images/zCZjssQJX.png" 
                style="height: 43px">
              </img>
            </a>
          </div>
        </div>
        <div style="display: block; float: left;">
          Based on ${reviewCount} reviews
        </div>
      </div>
    </div>
  `;
};

module.exports = {
  generateTemplate: generateTemplate
};
