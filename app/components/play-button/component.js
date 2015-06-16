import Ember from "ember";

export default Ember.Component.extend({
	playState: 'player-stopped',
	text: 'CKDU Live Stream',	
	audio_player: null,
	detente_text: 'CKDU Live Stream',
	loading_text: 'Loading stream, please wait...',

	didInsertElement: function () {
		this.set('audio_player', document.getElementById("audio_player"));
		var _this = this;
		this.get('audio_player').addEventListener('playing', function () {
			console.log('Stream playing');
			_this.set('playState', 'player-playing');
			_this.set('text', _this.get('detente_text'));
			_this.sendAction('playerPlaying');
		});
	},

  _register: function() {
    this.set('register-as', this); // register-as is a new property
  }.on('init'),

	actions: {
	
		click: function () {
			switch(this.get('playState')) {
	    	case 'player-stopped':
	        this.startStream();
	        break;
	    	case 'player-playing':
	        this.stopStream();
	        break;
       case 'player-loading':
	       return false;
	      }
		}
	
	},

	startStream: function () {
		console.log('Start stream');
		this.get('audio_player').play();
		this.set('playState', 'player-playing');
		this.set('text', this.get('loading_text'));
		this.set('playState', 'player-loading');
	},

	stopStream: function () {
		console.log('Stop stream');
		var liveStream = this.get('audio_player');
		liveStream.pause();
		var src = liveStream.src;
		liveStream.src = '';
		liveStream.src = src;
		this.set('playState', 'player-stopped');
		this.set('text', this.get('detente_text'));
		this.sendAction('playerStopped');
	}

});