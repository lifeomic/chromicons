/**
 * Current use case is adding the `data-icon` attribute to each SVG when
 * exported as a React component.
 */

function template(
  { template },
  _,
  { imports, componentName, props, jsx, exports }
) {
  jsx.openingElement.attributes = [
    ...jsx.openingElement.attributes,
    {
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'viewBox' },
      value: { type: 'StringLiteral', value: '0 0 24 24' },
    },
    {
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'data-icon' },
      value: { type: 'StringLiteral', value: componentName.name },
    },
  ];
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = template;
