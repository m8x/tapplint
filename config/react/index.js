'use strict';

module.exports = {
  // Prevent passing children as props
  'react/no-children-prop': 'error',

  // Prevent usage of dangerous JSX properties
  'react/no-danger': 'off',

  // Prevent problem with children and props.dangerouslySetInnerHTML
  'react/no-danger-with-children': 'off',

  // Prevent usage of deprecated methods
  'react/no-deprecated': 'error',

  // Prevent usage of setState in componentDidMount
  'react/no-did-mount-set-state': 'error',

  // Prevent usage of setState in componentDidUpdate
  'react/no-did-update-set-state': 'error',

  // Prevent direct mutation of this.state
  'react/no-direct-mutation-state': 'error',

  // Prevent usage of findDOMNode
  'react/no-find-dom-node': 'off',

  // Prevent usage of isMounted
  'react/no-is-mounted': 'error',

  // Prevent multiple component definition per file
  'react/no-multi-comp': 'error',

  // Prevent usage of the return value of React.render
  'react/no-render-return-value': 'off',

  // Prevent usage of setState
  'react/no-set-state': 'off',

  // Prevent using string references in ref attribute
  'react/no-string-refs': 'off',

  // Prevent invalid characters from appearing in markup
  'react/no-unescaped-entities': 'off',

  // Prevent usage of unknown DOM property (fixable)
  'react/no-unknown-property': 'error',

  // Prevent definitions of unused prop types
  'react/no-unused-prop-types': 'error',

  // Enforce ES5 or ES6 class for React Components
  'react/prefer-es6-class': 'error',

  // Enforce stateless React Components to be written as a pure function
  'react/prefer-stateless-function': 'off',

  // Prevent missing props validation in a React component definition
  'react/prop-types': 'error',

  // Prevent missing React when using JSX
  'react/react-in-jsx-scope': 'error',

  // Enforce React components to have a shouldComponentUpdate method
  'react/require-optimization': 'off',

  // Enforce ES5 or ES6 class for returning value in render function
  'react/require-render-return': 'error',

  // Prevent extra closing tags for components without children
  'react/self-closing-comp': 'error',

  // Enforce component methods order
  'react/sort-comp': 'error',

  // Enforce propTypes declarations alphabetical sorting
  'react/sort-prop-types': 'off',

  // Enforce style prop value being an object
  'react/style-prop-object': 'off',

  // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
  'react/void-dom-elements-no-children': 'error',

  // Enforce boolean attributes notation in JSX (fixable)
  'react/jsx-boolean-value': ['error', 'never'],

  // Validate closing bracket location in JSX (fixable)
  'react/jsx-closing-bracket-location': ['error', 'after-props'],

  // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
  'react/jsx-curly-spacing': ['error', 'never'],

  // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
  'react/jsx-equals-spacing': ['error', 'never'],

  // Restrict file extensions that may contain JSX
  'react/jsx-filename-extension': 'off',

  // Enforce position of the first prop in JSX
  'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],

  // Enforce event handler naming conventions in JSX
  'react/jsx-handler-names': 'off',

  // Validate JSX indentation
  'react/jsx-indent': ['error', 2],

  // Validate props indentation in JSX (fixable)
  'react/jsx-indent-props': ['error', 2],

  // Validate JSX has key prop when in array or iterator
  'react/jsx-key': 'off',

  // Limit maximum of props on a single line in JSX
  'react/jsx-max-props-per-line': 'off',

  // Prevent usage of .bind() and arrow functions in JSX props
  'react/jsx-no-bind': 'error',

  // Prevent comments from being inserted as text nodes
  'react/no-comment-textnodes': 'off',

  // Prevent comments from being inserted as text nodes
  'react/jsx-no-comment-textnodes': 'error',

  // Prevent duplicate props in JSX
  'react/jsx-no-duplicate-props': 'error',

  // Prevent usage of unwrapped JSX strings
  'react/jsx-no-literals': 'off',

  // Prevent usage of unsafe target='_blank'
  'react/jsx-no-target-blank': 'error',

  // Disallow undeclared variables in JSX
  'react/jsx-no-undef': 'error',

  // Enforce PascalCase for user-defined JSX components
  'react/jsx-pascal-case': 'error',

  // Enforce props alphabetical sorting
  'react/jsx-sort-props': 'off',

  // Validate spacing before closing bracket in JSX (fixable)
  'react/jsx-space-before-closing': ['error', 'always'],

  // Validate whitespace in and around the JSX opening and closing brackets
  'react/jsx-tag-spacing': ['error'],

  // Prevent React to be incorrectly marked as unused
  'react/jsx-uses-react': 'error',

  // Prevent variables used in JSX to be incorrectly marked as unused
  'react/jsx-uses-vars': 'error',

  // Prevent missing parentheses around multilines JSX (fixable)
  'react/jsx-wrap-multilines': 'error'
};
