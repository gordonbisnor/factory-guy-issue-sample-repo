import Ember from 'ember';

var ShowModalMixin = Ember.Mixin.create({

  needs: 'application',

  init: function() {
    var app = this.get('controllers.application');
    var show_id = app.get('show_id');
    if (show_id !== 'undefined') { this.setShow(show_id); }
    this._super();
  },

  setShow: function (show_id) {
    if (show_id !== null) {
      var show = this.store.find('show', show_id);       
      var app = this.get('controllers.application');
      app.set('show_id', show_id);
        app.set('show', show);
      }
  },	

  actions: {
    
    openShowModal: function (show_id) {
      this.setShow(show_id);
    },
  }

});

export default ShowModalMixin;
  

