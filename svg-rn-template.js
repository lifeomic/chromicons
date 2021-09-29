/**
 * This template allows us to modify the generated React Native component template.
 */

function template(
  { template },
  _,
  { imports, componentName, props, jsx, exports }
) {
  jsx.openingElement.attributes = [
    ...jsx.openingElement.attributes.filter(
      ({ name: { name } }) => name !== 'xmlns'
    ),
    {
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'viewBox' },
      value: { type: 'StringLiteral', value: '0 0 24 24' },
    },
  ];
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = template;
