import Ember from 'ember';

export default Ember.Component.extend({
	now: null,
	previous: null,
	next: null,
	playerIsPlaying: null,	
	popout: null,

	popoutContainer: function () {
		if(this.get('popout') !== null) { return 'popout-player'; }
	}.property('popout'),

	actions: {

		playerPlaying: function () {
			this.set('playerIsPlaying', 'player-playing');
		},

		playerStopped: function () {
			this.set('playerIsPlaying');
		}
	}
	
});

  
