import Ember from 'ember';

export default Ember.Route.extend({

	model: function () {
		
		var categories =  [
    	{id: 'cultural_third_language', title: "Cultural/Third-Language"},
    	{id: 'jazz_blues', title: "Jazz/Blues"},
    	{id: 'folk_classical', title: "Folk/Classical"},
    	{id: 'hip_hop', title: "Hip Hop"},
    	{id: 'electronic', title: "Electronic"},
    	{id: 'loud', title: "Loud"},
    	{id: 'eclectic', title: "Eclectic",},
    	{id: 'spoken_word', title: "Spoken Word"}
		];

	  var times = ['6:00', '6:30', '7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00','5:30','6:00','6:30','7:00','7:30','8:00','8:30','9:00','9:30','10:00','10:30','11:00','11:30','12:00','12:30','1:00','1:30','2:00','2:30','3:00','3:30','4:00','4:30','5:00','5:30'];

		var time_slots = this.store.all('time_slot');
	  
	  var twenty_times =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
	  	  
	  var day_columns = ['Time', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

		return Ember.RSVP.hash({
			schedule: {
				timesOfDay: times,
				timeSlots: time_slots,
				twentyTimes: twenty_times
			},
			day_columns: day_columns,
			categories: categories
		});
	}

});
