/**
 * This template allows us to modify the generated React component template.
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
    // Currently documentation folks at LifeOmic use `data-icon` to identify
    // which icon is being used so they can import it in their app
    {
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'data-icon' },
      value: { type: 'StringLiteral', value: componentName.name },
    },
    // For our generated React components, we think this makes sense
    // to do by default: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-hidden_attribute
    {
      type: 'JSXAttribute',
      name: { type: 'JSXIdentifier', name: 'aria-hidden' },
      value: { type: 'StringLiteral', value: 'true' },
    },
  ];
  return template.ast`
    ${imports}
    const ${componentName} = (${props}) => ${jsx}
    ${exports}
  `;
}

module.exports = template;
