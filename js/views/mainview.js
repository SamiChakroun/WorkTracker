define(['backbone',
		'underscore',
		'jquery',
		'entrieslist',
        'entryview',
        'entrycreateview',
        'text!templates/mainpage.html',
        'bootstrap',
        'datatables'],

function(Backbone, _, $, EntriesCollection, EntryView, EntryCreateView, MainTemplate) {

	var MainContent = Backbone.View.extend({
					
					collection: new EntriesCollection,
					
					el: '#main-content',
					
					events: {'click #add-entry': 'openCreateView'
					},

					initialize: function() {
						var self = this;
						self.template = _.template(MainTemplate);
						
						self.collection.on('add' , self.render, self);
						self.collection.on('remove' , self.render, self);
						self.collection.on('change' , self.render, self);

						self.render();
					},

					render: function() {
						var self = this;
						self.$el.html(self.template);

						_.each(self.collection.toArray(), function(entry, i) {
							$('#grid tbody').append((new EntryView({model: entry})).render().$el);
						});
						
						$('#grid').DataTable();

						return self;
					},

					openCreateView: function() {
						var entryCreateView = new EntryCreateView({isCreate:true, collection: this.collection});
					}
	});

	return MainContent;

});