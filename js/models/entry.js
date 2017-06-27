define(['backbone',
        'entry'],

function(Backbone, Entry) {

	var Entry = Backbone.Model.extend({
		
		initialize: function() {
		   				console.log('Entry model working!');
		   			},

		defaults : function() {
									return {
										datefrom: '-',
										dateto: '-',
										description: '-',
										hours: '-',
										paid: '-'
									}
							  }
	});

	return Entry;

});
