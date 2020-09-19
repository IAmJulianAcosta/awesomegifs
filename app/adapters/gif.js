import ApplicationAdapter from './application';
import ENV from 'soapbox/config/environment';
import { assert } from '@ember/debug';

export default class GifAdapter extends ApplicationAdapter {
  // The parameter name is accessed dynamically in the forEach below
  // eslint-disable-next-line no-unused-vars
  urlForQuery({ query, limit, offset, rating, lang }) {
    assert(`You must pass an object with a key named query in order to query a gif. Example: store.query('gif', { query: 'dogs'}`, query);

    let url = `${ENV.API_URL}/v1/gifs/search?api_key=${ENV.API_KEY}&q=${query}`;

    ['limit', 'offset', 'rating', 'lang'].forEach(parameterName => {
      const parameter = eval(parameterName);
      if ("undefined" !== typeof parameter) {
        url += `&${parameterName}=${parameter}`;
      }
    });

    return url;
  }
}
