import Ember from 'ember';

export default Ember.Route.extend({
	
	/* this hook loads all data for site, just once */
	beforeModel: function() {
		this.store.find('event');
		this.store.find('show');
		this.store.find('person');
		this.store.find('news_item');
		this.store.find('time_slot');
		this.store.find('chart');
		this.store.find('carousel_item');
	},
	setupController: function (controller) {
		controller.set('slots', this.store.all('time_slot'));
	},
	
	actions: {
  
  	openPopout: function() {}
  }

});

Ember.Route.reopen({
  activate: function() {
    this._super();
    window.scrollTo(0,0);
  }
});
