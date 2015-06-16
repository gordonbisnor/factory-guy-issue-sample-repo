import Ember from 'ember';

export default Ember.Component.extend({
	
	slot: null,

	textSize: function() {
		var size;
		
		var x = parseInt(this.slot.get('duration'));

		if (x <= 30) { 
			size = 'text-xs'; 
		} else if (x <= 60) { 
			size = 'text-sm'; 
		}
		
		return size;

	}.property('duration'),
	
	actions: {

		openShowModal: function (id) {
			this.sendAction('action', id);
		}
		
	}
	
});
