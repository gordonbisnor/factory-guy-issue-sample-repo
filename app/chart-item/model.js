import DS from 'ember-data';

export default DS.Model.extend({
	formatted_position: DS.attr('string'),
	album: DS.attr('string'),
	artist: DS.attr('string'),
	label: DS.attr('string')
});
