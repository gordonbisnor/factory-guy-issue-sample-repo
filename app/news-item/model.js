import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  item_content: DS.attr('string'),
  date: DS.attr('string'),

	image: DS.attr('string'),
	image_medium: DS.attr('string'),
	image_thumb: DS.attr('string'),
	
	formattedDate: function () {
		var d = this.get('date');
		if(d !== null) { return moment(d).format('LL'); } else { return ''; }
	}.property('date'),
		
	twitterShareText: function () {
		return this.get('title');
	}.property('title')

});

