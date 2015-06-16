import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('event', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('formatted date', function(assert) {
	var d = new Date('2014-01-01 13:00');
	var model = this.subject({date: d});
	assert.equal(model.get('formattedDate'), 'January 1, 2014');
});

test('twitter share text', function(assert) {
  var d = new Date('2014-01-01 13:00');
  var model = this.subject({date: d, title: 'foo bar concert'});
  assert.equal(model.get('twitterShareText'), 'foo bar concert - January 1, 2014');
});





