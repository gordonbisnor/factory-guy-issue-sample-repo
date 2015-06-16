import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'panel panel-default',
  chart: null,
	chartItems: function() {
   return this.get('chart.firstObject.chart_items').slice(0,10);
	}.property('chart.chart_items.@each')
});


