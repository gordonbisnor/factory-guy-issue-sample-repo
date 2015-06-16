import Ember from 'ember';

export default Ember.Route.extend({

	categories:  [
    	{id: 'cultural_third_language', title: "Cultural/Third-Language"},
    	{id: 'jazz_blues', title: "Jazz/Blues"},
    	{id: 'folk_classical', title: "Folk/Classical"},
    	{id: 'hip_hop', title: "Hip Hop"},
    	{id: 'electronic', title: "Electronic"},
    	{id: 'loud', title: "Loud"},
    	{id: 'eclectic', title: "Eclectic",},
    	{id: 'spoken_word', title: "Spoken Word"}
	],

	model: function () {
		return this.store.all('show');
	},

	setupController: function (controller, model) {
	  controller.set('model', model);
	  controller.set('categories', this.categories);
	}

});
