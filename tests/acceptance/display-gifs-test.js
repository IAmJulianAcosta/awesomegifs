import { module, test } from 'qunit';
import { visit, currentURL, click, currentRouteName, fillIn } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | display gifs', function (hooks) {
  setupApplicationTest(hooks);

  test('redirection', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/gifs');
  });

  test('renders gifs', async function (assert) {
    await visit('/gifs');

    assert.equal(document.querySelectorAll('.gif').length, 25, 'loads favorites gifs');
    assert.ok(document.querySelector('.gif figcaption').textContent.trim(), 'displays gif information');
  });

  test('navigation to single gif', async function (assert) {
    await visit('/gifs');

    await click('.gif');

    assert.equal(currentRouteName(), 'gifs.gif');

    assert.ok(document.querySelector('.single-gif'), 'loads gif');
    assert.ok(document.querySelector('.gif-information').textContent.trim(), 'loads gif information');
  });

  test('search', async function (assert) {
    await visit('/gifs');
    await click('.search-button');
    assert.ok(document.querySelector('.search-button').classList.contains('active'), 'search class changes');

    const limit = 15;
    const offset = 10;
    const query = 'dogs';

    await fillIn('.search-input', query);
    await fillIn('input[name="limit"]', limit);
    await fillIn('input[name="offset"]', offset);

    await click('.search-button');

    assert.equal(currentURL(), `/gifs?limit=${limit}&offset=${offset}&query=${query}&rating=g`);
    assert.equal(document.querySelector('h1.title').textContent.trim(), `${query} GIFs [x]`, 'Search form works');

    await click('.close');
    assert.equal(document.querySelector('h1.title').textContent.trim(), `Trending GIFs`, 'Clear button works');
  });
});
