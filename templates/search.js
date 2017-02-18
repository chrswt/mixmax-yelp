const generateTemplate = (name, rating, address) => {
  // Generate template for search predictions
  return `
    <div style="font-weight: 300; font-family: 'Helvetica Neue', sans-serif; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">
      <div style="font-size: 16px; max-height: 24px">
        <div style="max-width: 200px; display: inline-block; text-overflow: ellipsis; overflow: hidden;">
          ${name}
        </div>
        <img src="${rating}" align="right"></img>
      </div>
      <div style="font-size: 11px;">
        ${address}
      </div>
    </div>`;
};

module.exports = {
  generateTemplate: generateTemplate
};
