import ApplicationAdapter from './application';
import ENV from 'awesome-gifs/config/environment';
import { assert } from '@ember/debug';

export default class GifAdapter extends ApplicationAdapter {
  urlForFindRecord(id) {
    return `${ENV.API_URL}/${this.namespace}/gifs/${id}?api_key=${ENV.API_KEY}`;
  }

  urlForQuery({ query, type, limit, offset, rating, lang }) {
    assert(`You must pass an object with a key named type in order to query a gif. Example: store.query('gif', { type: 'trending'}`, type);

    switch (type) {
      case 'all':
        return this.urlForAll(query, limit, offset, rating, lang);
      case 'trending':
        return this.urlForTrending(limit, rating);
    }
  }

  // The parameter name is accessed dynamically in the forEach below
  // eslint-disable-next-line no-unused-vars
  urlForAll(query, limit, offset, rating, lang) {
    assert(`You must pass an object with a key named query in order to query a gif. Example: store.query('gif', { query: 'dogs'}`, query);

    let url = `${ENV.API_URL}/${this.namespace}/gifs/search?api_key=${ENV.API_KEY}&q=${query}`;

    ['limit', 'offset', 'rating', 'lang'].forEach(parameterName => {
      const parameter = eval(parameterName);
      if ('undefined' !== typeof parameter) {
        url += `&${parameterName}=${parameter}`;
      }
    });

    return url;
  }

  // The parameter name is accessed dynamically in the forEach below
  // eslint-disable-next-line no-unused-vars
  urlForTrending(limit, rating) {
    let url = `${ENV.API_URL}/${this.namespace}/gifs/trending?api_key=${ENV.API_KEY}`;

    ['limit', 'rating'].forEach(parameterName => {
      const parameter = eval(parameterName);
      if ('undefined' !== typeof parameter) {
        url += `&${parameterName}=${parameter}`;
      }
    });

    return url;
  }
}
