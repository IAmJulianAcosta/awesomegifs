/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['API_KEY', 'API_URL'],
    fastbootAllowedKeys: ['API_KEY', 'API_URL'],
    failOnMissingKey: true,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
