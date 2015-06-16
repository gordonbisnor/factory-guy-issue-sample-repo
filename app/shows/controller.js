import Ember from "ember";
import ShowModalMixin from '../mixins/show_modal';

export default Ember.Controller.extend(ShowModalMixin, {
  filteringByCategory: null,

	actions: {
    
    showCategory: function (cat) {
      if(cat === 'view_all') { 
        Ember.$('[data-target="show"]').show();
        this.set('filteringByCategory', false);
      } else {
        Ember.$('[data-target="show"]').hide();
        Ember.$('[data-category="' + cat + '"]').show();
        this.set('filteringByCategory', true);
      }
      return false;
    }
	
	}

});

