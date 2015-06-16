import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  item_content: DS.attr('string'),
  image: DS.attr('string'),
  image_medium: DS.attr('string')
});
