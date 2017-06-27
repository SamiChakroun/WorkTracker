define(['backbone',
        'underscore',
        'jquery',
        'entrycreateview',
        'entrieslist',
        'text!templates/entrygridlinetemplate.html',
        'bootstrap'], 
function(Backbone, _, $, EntryCreateView, EntriesList, EntryGridLineTemplate) {

	var UserView = Backbone.View.extend({
					
					events: {
							'click .edit': 'edit',
							'click .delete': 'delete',
							'blur .to': 'close',
							'keypress .to': 'onEnterUpdate'
						},
					
					tagName: 'tr',

					initialize: function() {
						var self = this;
						self.template = _.template(EntryGridLineTemplate);
					},

					render: function() {
						this.$el.html(this.template(this.model.toJSON()));
						return this;
					},

					edit: function(ev) {
							var self = this;
							ev.preventDefault();
							var entryCreateView = new EntryCreateView({isCreate:false, model: self.model});
							//this.$('.to').attr('contenteditable', true).focus();
					},

					close: function(ev) {
							var lastname = this.$('.to').text();
							this.model.set('to', lastname);
							this.$('.to').removeAttr('contenteditable');
					},

					onEnterUpdate: function(ev) {
							var self = this;
							if (ev.keyCode === 13) {
								this.close();
								_.delay(function() { self.$('.to').blur() }, 100);
							}
					},

					delete: function(ev) {
							var self = this;
							ev.preventDefault();
							self.model.destroy();
					},
	});

	return UserView;

});

