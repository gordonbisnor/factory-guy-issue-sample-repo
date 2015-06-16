import DS from 'ember-data';

export default DS.Model.extend({
	date: DS.attr('string'),
	formatted_position: DS.attr('string'),
	album: DS.attr('string'),
	artist: DS.attr('string'),
	label: DS.attr('string'),
	chart_items: DS.hasMany('chart_item', {async: true})
});
