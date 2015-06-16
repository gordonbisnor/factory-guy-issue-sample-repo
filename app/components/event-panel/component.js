import Ember from 'ember';

export default Ember.Component.extend({
  
  upcomingEvents: function () {
  	return this.get('events').slice(0,5);
  }.property('events'),

  classNames: 'panel panel-default'
});