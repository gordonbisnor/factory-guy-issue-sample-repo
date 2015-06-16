import Ember from 'ember';

export default Ember.Component.extend({
	
	actions: {

		openShowModal: function (id) {
			this.sendAction('action', id);
		}
		
	}
	
});
