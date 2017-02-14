define(['backbone',
        'entry'], 
function(Backbone, Entry) {
	var EntriesList = Backbone.Collection.extend({
		model: Entry,
		initialize: function() {
			console.log('Collection working!');
		}
	});
return EntriesList;
});