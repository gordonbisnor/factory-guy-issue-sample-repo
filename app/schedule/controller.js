import Ember from "ember";
import ShowModalMixin from '../mixins/show_modal';

export default Ember.Controller.extend(ShowModalMixin, {
  filteringByCategory: null,

  viewAll: function () {
    this.set('filteringByCategory', false);
    Ember.$('ul#show_categories').find('li a').removeClass('screened');
    Ember.$('#schedule').find('li a');
    Ember.$('div#schedule_container div#schedule div#time-slots-area').find('div.slot').removeClass('screened');
  },

  showCategory: function (cat) {
    this.set('filteringByCategory', true);
    Ember.$('ul#show_categories').find('li a').not('.view_all').addClass('screened');
    Ember.$('ul#show_categories').find('li a.' + cat.id).removeClass('screened');
    Ember.$('div#schedule_container div#schedule div#time-slots-area').find('div.slot').addClass('screened');
    Ember.$('div#schedule_container div#schedule div#time-slots-area').find('div.' + cat.id).removeClass('screened');
  },

  actions: {
  
    selectCategory: function (cat) {
      if(cat === 'view_all') {
        this.viewAll();     
      } else {  
        this.showCategory(cat);
      }
    }

  }

});
