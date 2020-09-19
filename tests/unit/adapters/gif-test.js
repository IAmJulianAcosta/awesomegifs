import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'soapbox/config/environment';

module('Unit | Adapter | gif', function (hooks) {
  setupTest(hooks);

  test('builds url', function (assert) {
    assert.expect(4);
    let adapter = this.owner.lookup('adapter:gif');
    let query = {
      query: 'dogs',
      limit: 25,
      offset: 0,
      rating: 'g',
      lang: 'en',
    };
    const baseUrlWithQuery = `${ENV.API_URL}/v1/gifs/search?api_key=${ENV.API_KEY}&q=${query.query}`;

    let url = adapter.urlForQuery(query);
    assert.equal(
      url,
      `${baseUrlWithQuery}&limit=${query.limit}&offset=${query.offset}&rating=${query.rating}&lang=${query.lang}`,
      'Builds the URL with all the parameters'
      );

    try {
      query = {};
      adapter.urlForQuery(query);
    }
    catch(e) {
      assert.ok(`Fails if the required parameter 'query' is not passed`);
    }

    query = {
      query: 'dogs',
    };
    url = adapter.urlForQuery(query);
    assert.equal(
      url,
      `${baseUrlWithQuery}`,
      'Builds the URL without empty parameters'
    );

    query = {
      query: 'dogs',
      limit: 25,
      lang: 'en',
    };
    url = adapter.urlForQuery(query);
    assert.equal(
      url,
      `${baseUrlWithQuery}&limit=${query.limit}&lang=${query.lang}`,
      'Builds the URL with some parameters'
    );

  });
});
