import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('time_slot', {
  // Specify the other units that are required for this test.
  needs: ['model:show']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('left pos', function(assert) {
	var model = this.subject({schedule_day: 4});
	assert.equal(model.get('left_pos'), 50);
});
