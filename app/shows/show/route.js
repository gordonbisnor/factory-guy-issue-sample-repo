import Ember from 'ember';

export default Ember.Route.extend({
	model: function (show) {
		return this.store.find('show', show.show_id);
	}
});
