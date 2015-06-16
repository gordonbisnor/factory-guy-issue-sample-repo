import DS from 'ember-data';

export default DS.ActiveModelSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs: { chart_items: {embedded: 'always'} }
});