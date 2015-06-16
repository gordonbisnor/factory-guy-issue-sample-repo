import DS from 'ember-data';

export default DS.Model.extend({
	image: DS.attr('string'),
	image_medium: DS.attr('string'),
	image_thumb: DS.attr('string'),
	name: DS.attr('string'),
	phone: DS.attr('string'),
	extension: DS.attr('string'),
	email: DS.attr('string'),
	title: DS.attr('string'),
	item_content: DS.attr('string')
});
