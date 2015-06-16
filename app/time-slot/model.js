import DS from 'ember-data';

export default DS.Model.extend({
	show: DS.belongsTo('show', {async: true}),
	min_from_six_am: DS.attr('string'),
	duration: DS.attr('string'),
	shared_slot: DS.attr('string'),
	color: DS.attr('string'),
	show_name: DS.attr('string'),
	show_num: DS.attr('string'),
	week_day_id: DS.attr('number'),
	start_time: DS.attr('date'),
	end_time: DS.attr('date'),
	schedule_day: DS.attr('number'),
	start_time_seconds_from_midnight: DS.attr('number'),
	end_time_seconds_from_midnight: DS.attr('number'),
	short_air_times:  DS.attr('string'),
	
	left_pos: function() {
		return parseFloat(this.get('schedule_day')) * 12.5;
	}.property('schedule_day')
	
});
