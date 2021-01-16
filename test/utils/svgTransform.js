'use strict';

module.exports = {
  // render: () => {},
  template: '<svg></svg>',
};

// TODO: investigate why this not works
// const vueJest = require('vue-jest/lib/template-compiler');

// module.exports = {
//   process (content) {
//     console.log('Content: ', content);
//     const render = function () {
//       vueJest({
//         content,
//         attrs: {
//           functional: false,
//         },
//       });
//     };

//     return `module.exports = { render: ${render} }`;
//   },
// };
