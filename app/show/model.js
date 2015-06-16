import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
	show_name: DS.attr('string'),
	description: DS.attr('string'),
	image: DS.attr('string'),
	host_names: DS.attr('string'),
	air_times:  DS.attr('string'),
	short_air_times:  DS.attr('string'),
	email: DS.attr('string'),
	website: DS.attr('string'),
	category: DS.attr('string'),
	color: DS.attr('string'),
	podcast_url: DS.attr('string'),
	
	short_description: Ember.computed('description', function() {
		var desc = this.get('description');
		if(desc != null) { desc = desc.substring(0,130) + '...'; } else { desc = ''; }
    return desc;
  }),
	
	share_text: function () {
		return 'Check out ' + this.get('show_name') + ' on CKDU 88.1 FM';
	}.property('show_name'),

  twitterShareText: function () {
  	return this.get('share_text');
  }.property('share_text'),
  
});
