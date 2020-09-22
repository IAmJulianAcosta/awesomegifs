import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import ENV from 'awesome-gifs/config/environment';

module('Unit | Adapter | gif', function (hooks) {
  setupTest(hooks);

  test('builds url for all', function (assert) {
    assert.expect(5);
    let adapter = this.owner.lookup('adapter:gif');
    let query = {
      type: 'all',
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
      query = {
        type: 'all'
      };
      adapter.urlForQuery(query);
    } catch (e) {
      assert.ok(true, `Fails if the required parameter 'query' is not passed`);
    }

    try {
      query = {
        query: 'dogs',
      };
      adapter.urlForQuery(query);
    } catch (e) {
      assert.ok(true, `Fails if the required parameter 'type' is not passed`);
    }

    query = {
      query: 'dogs',
      type: 'all'
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
      type: 'all'
    };
    url = adapter.urlForQuery(query);
    assert.equal(
      url,
      `${baseUrlWithQuery}&limit=${query.limit}&lang=${query.lang}`,
      'Builds the URL with some parameters'
    );

  });

  test('builds url for trending', function (assert) {
    let adapter = this.owner.lookup('adapter:gif');
    let query = {
      type: 'trending',
      limit: 25,
      rating: 'g',
    };
    const baseUrl = `${ENV.API_URL}/v1/gifs/trending?api_key=${ENV.API_KEY}`;

    let url = adapter.urlForQuery(query);
    assert.equal(
      url,
      `${baseUrl}&limit=${query.limit}&rating=${query.rating}`,
      'Builds the URL with all the parameters'
    );
  });
});
