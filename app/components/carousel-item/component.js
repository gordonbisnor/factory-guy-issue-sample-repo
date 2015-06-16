import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNames: 'carousel_item',
  item: null,
  'data-carousel-item': Ember.computed.oneWay('item.id'),
	attributeBindings: ['data-carousel-item']
});




