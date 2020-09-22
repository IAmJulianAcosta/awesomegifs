import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | gifs', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:gifs');
    assert.ok(route);
  });
});
