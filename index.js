'use strict';
const propertiesOrder = require('./properties-order.json');

module.exports = {
  extends: ['stylelint-config-standard'],
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
    // CSS Modules @value constants are not valid CSS values.
    'declaration-property-value-no-unknown': null,
    'keyframes-name-pattern': null,
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    // CSS Modules syntax support is inlined until stylelint-config-css-modules supports Stylelint 18.
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['export', 'import', 'global', 'local', 'external']
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements'],
        ignoreTypes: ['from']
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes', 'compose-with'],
        ignoreSelectors: [':export', /^:import/]
      }
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['value']
      }
    ],
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['global']
      }
    ],
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['blockless-after-same-name-blockless', 'first-nested'],
        ignore: ['after-comment'],
        ignoreAtRules: ['value']
      }
    ]
  },
  overrides: [
    {
      files: '**/*.scss',
      plugins: ['stylelint-scss'],
      rules: {
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': [
          true,
          {
            ignoreAtRules: ['value']
          }
        ],
        'function-no-unknown': null,
        'scss/function-no-unknown': [
          true,
          {
            ignoreFunctions: ['global']
          }
        ],
        'at-rule-empty-line-before': [
          'always',
          {
            except: ['blockless-after-blockless', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['else', 'value']
          }
        ]
      }
    }
  ]
};
