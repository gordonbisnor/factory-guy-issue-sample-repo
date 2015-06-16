import Ember from 'ember';

export default Ember.Route.extend({
	model: function (chart) {
		return this.store.find('chart', chart.chart_id);
	}
});
