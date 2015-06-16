import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('chart', {
  // Specify the other units that are required for this test.
  needs: ['model:chart_item']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
