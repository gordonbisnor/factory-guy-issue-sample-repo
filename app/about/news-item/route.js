import Ember from 'ember';

export default Ember.Route.extend({
	model: function (news_item) {
		return this.store.find('news_item', news_item.news_item_id);
	}
});