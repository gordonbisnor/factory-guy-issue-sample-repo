import Ember from 'ember';

export default Ember.Component.extend({
  classNames: 'carousel_box',
  
  carouselItems: function () {
  	return this.get('carousel').slice(0,5);
  }.property('carousel'),

  didInsertElement: function () {
	  Ember.$('#' + this.elementId).someFrillsCarousel({delay:6000,speed:750}); 
  }
});
