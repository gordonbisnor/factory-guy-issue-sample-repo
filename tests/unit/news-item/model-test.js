import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('news-item', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('twitter share text', function(assert) {
  var model = this.subject({title: 'foo bar is in the news again'});
  assert.equal(model.get('twitterShareText'), 'foo bar is in the news again');
});