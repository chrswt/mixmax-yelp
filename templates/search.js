const generateTemplate = (name, address, rating) => {
  return `
    <div style="font-weight: 200; font-family: 'Helvetica Neue';"
      <div>
        ${name}
        <img src="${rating}" align="right"></img>
      </div>
      <div>${address}</div>
    </div>
  `;
};

module.exports = {
  generateTemplate: generateTemplate
};
