'use strict';
const propertiesOrder = require('./properties-order.json');

module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-css-modules'
    ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'comment-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: [
          'after-comment',
          'stylelint-commands'
        ]
      }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['first-nested'],
        ignore: ['after-declaration']
      }
    ],
    'selector-max-specificity': '0,2,0',
    'import-notation': 'string',
    'order/order': [
      'custom-properties',
      'declarations'
    ],
    'order/properties-order': propertiesOrder,
    'selector-class-pattern': null,
    'alpha-value-notation': null,
    'color-function-notation': null,
    'value-keyword-case': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'keyframes-name-pattern': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
  }
};
