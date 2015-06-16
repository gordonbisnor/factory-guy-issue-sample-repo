import Ember from 'ember';

export default Ember.Route.extend({
  
  model: function () {
  	return Ember.RSVP.hash({
  		events: this.store.find('event'),
  		carousel: this.store.find('carousel_item'),
  		chart: this.store.find('chart')
  	});
  },
  });
