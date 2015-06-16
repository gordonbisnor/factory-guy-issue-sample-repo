import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	item_content: DS.attr('string'),
	position: DS.attr('number'),
	date: DS.attr('date'),
	image: DS.attr('string'),
	image_medium: DS.attr('string'),
	image_thumb: DS.attr('string'),
	
	formattedDate: function () {
		var d = this.get('date');
		if(d !== null) { return moment(d).format('LL'); } else { return ''; }
	}.property('date'),

	twitterShareText: function () {
		return [this.get('title'), this.get('formattedDate')].join(' - ');
	}.property('title,formattedDate')

});