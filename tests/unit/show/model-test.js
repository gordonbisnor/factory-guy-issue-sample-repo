import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('show', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});

test('share text', function(assert) {
	var model = this.subject({show_name: 'foo bar'});
	assert.equal(model.get('share_text'), 'Check out foo bar on CKDU 88.1 FM');
});

test('twitter share text', function(assert) {
	var model = this.subject({show_name: 'foo bar'});
	assert.equal(model.get('twitterShareText'), 'Check out foo bar on CKDU 88.1 FM');
});

test('short desc', function(assert) {
	var model = this.subject({description: 'Aliquam et nisl vel ligula consectetuer suscipit. Morbi euismod enim eget neque. Donec sagittis massa. Vestibulum quis augue sit amet ipsum laoreet pretium. Nulla facilisi. Duis tincidunt, felis et luctus placerat, ipsum libero vestibulum sem, vitae elementum wisi ipsum a metus. Nulla a enim sed dui hendrerit lobortis. Donec lacinia vulputate magna. Vivamus suscipit lectus at quam. In lectus est, viverra a, ultricies ut, pulvinar vitae, tellus. Donec et lectus et sem rutrum sodales. Morbi cursus. Aliquam a odio. Sed tortor velit, convallis eget, porta interdum, convallis sed, tortor. Phasellus ac libero a lorem auctor mattis. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.'});
 	assert.equal(model.get('short_description'), 'Aliquam et nisl vel ligula consectetuer suscipit. Morbi euismod enim eget neque. Donec sagittis massa. Vestibulum quis augue sit a...');
});  
