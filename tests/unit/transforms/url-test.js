import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | url', function(hooks) {
  setupTest(hooks);

  test('deserialize', function(assert) {
    let transform = this.owner.lookup('transform:url');

    let url = 'https://julianacosta.me'
    assert.equal(transform.deserialize(url), url, 'return the url if is valid');

    url = 'not an url'
    assert.equal(transform.deserialize(url), null, 'return the null if url is invalid');
  });
});
