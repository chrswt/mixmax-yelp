const generateTemplate = (name, rating, address) => {


  // Generate template for search predictions
  return `
    <div style="font-weight: 300; font-family: 'Helvetica Neue', sans-serif;">
      <div style="font-size: 16px">
        ${name}
        <img src="${rating}" align="right"></img>
      </div>
      <div style="font-size: 11px">${address}</div>
    </div>`;
};

module.exports = {
  generateTemplate: generateTemplate
};
