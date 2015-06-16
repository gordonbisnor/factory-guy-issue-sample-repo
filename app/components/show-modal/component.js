import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['show-modal'],
  actions: {
  	closeModal: function () {
  		this.sendAction('dismiss');
  	}
  }
});
