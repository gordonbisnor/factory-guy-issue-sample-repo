import Ember from 'ember';

export default Ember.Component.extend({
	
	actions: {
	
		selectCategory: function (cat) {
			this.sendAction('action', cat);
		}
		
	}

});
