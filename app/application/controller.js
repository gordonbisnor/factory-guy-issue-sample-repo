import Ember from "ember";

export default Ember.Controller.extend({
  queryParams: ['show_id'],
  show_id: null,
  show: null,

  isPopout: function (){
    return this.get('currentPath') === 'popout';
  }.property('currentPath'),

  currentTimeMetronome: function() {  
    var interval = 1000 * 15; /* 1000ms * 15 = every fifteen seconds  */
    Ember.run.later(this, function() {
      this.notifyPropertyChange('currentTimePulse');
      this.currentTimeMetronome();
    }, interval);
  }.on('init'),

  currentShow: function () {
    var now = this.secondsFromMidnightToNow();
    var _this = this;
	  var show = this.get('slots').filter(function (item) {
      var startTime = item.get('start_time_seconds_from_midnight');
      var endTime = item.get('end_time_seconds_from_midnight');
      if (endTime === 0) { endTime = 86400; }
      var dayGood = item.get('schedule_day') === _this.dayOfWeek();
      var startTimeGood = startTime <= now;
      var endTimeGood = endTime >= now;
    	var valid = dayGood && startTimeGood && endTimeGood;
      return valid;
  	});
    return this.showOrEmptyShow(show);
  }.property('this.slots.@each,currentTimePulse'),

  nextShow: function () {
    var _this = this;
    var show = this.get('slots').filter(function (item) {
      var startTime = item.get('start_time_seconds_from_midnight');
      return item.get('schedule_day') === _this.dayOfWeek() && startTime === _this.get('currentShow.end_time_seconds_from_midnight');
    });
    return this.showOrEmptyShow(show);
  }.property('this.slots.@each,currentTimePulse'),
  
  previousShow: function () {
    var _this = this;
    var show = this.get('slots').filter(function (item) {
      var endTime = item.get('end_time_seconds_from_midnight');
      var endTimeGood = endTime === _this.get('currentShow.start_time_seconds_from_midnight');
      var dayGood = item.get('schedule_day') === _this.dayOfWeek();
      return dayGood && endTimeGood;
    });
    return this.showOrEmptyShow(show);
  }.property('this.slots.@each,currentTimePulse'),

  dayOfWeek: function () {
    var d = new Date();
    d = d.getDay();
    if (d === 0) { d = 7; } //else { d = d + 1; }
    return d;
  },

  secondsFromMidnightToNow: function () {
    var midnight = moment().startOf('day');     // set to 12:00 am today
    var now = moment();
    var diffSeconds = now.diff(midnight, 'seconds');
    return diffSeconds;
  },
  
  showOrEmptyShow: function (show) {
    if(show.get('length') > 0 ) { return show.get('firstObject'); } else { return this.emptyShow(); }
  },

  emptyShow: function () {
    return {show_name: 'N/A', short_air_times: ''};
  }

});
