define(['backbone',
        'entry'],
function(Backbone, Entry) {

	var Entry = Backbone.Model.extend({
		
		initialize: function() {
		   				console.log('Entry model working!');
		   			},

		defaults : function() {
							return {
								from: '-',
								to: '-',
								description: '-',
								hours: '-',
								paid: '-'
							}
						}
	});
return Entry;
});
