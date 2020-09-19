/* eslint-env node */

'use strict';

const path = require('path');

module.exports = function(/* env */) {
  return {
    clientAllowedKeys: ['API_KEY', 'API_URL', 'API_NAMESPACE'],
    fastbootAllowedKeys: ['API_KEY', 'API_URL', 'API_NAMESPACE'],
    failOnMissingKey: true,
    path: path.join(path.dirname(__dirname), '.env')
  }
};
