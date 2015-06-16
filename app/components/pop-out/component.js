import Ember from "ember";

export default Ember.Component.extend({

	actions: {

		openPopout: function () {
			window.open('/popout', 'targetWindow', 'toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=300,height=70');
			this.sendAction();
		}

	}

});


