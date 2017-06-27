define(['backbone',
        'underscore',
        'jquery',
        'entry',
        'entrieslist',
        'text!templates/addentrymodal.html',
        'bootstrap',
        'datetimepicker'],

function(Backbone, _, $, Entry, EntriesList, EntryCreateTemplate) {

	var EntryCreateView = Backbone.View.extend({
		
		events: {'click .submit': 'submit'
		},

		el: '#create-edit-entry',

		initialize: function(input){
				
				var self = this;

				self.collection = input.collection;
				self.isCreateOrEdit = input.isCreate;

				self.render();

				//$('.datepicker').datepicker();
		},

		render: function(){
			
			var self = this;

			var template = _.template(EntryCreateTemplate);
			self.$el.html(template);

			$('#create-entry-modal').modal('show');

			$('#datefrom').datetimepicker();
			$('#dateto').datetimepicker();

			if (!self.isCreateOrEdit) {			
				$('#datefrom').val(self.model.attributes.datefrom);
				$('#dateto').val(self.model.attributes.dateto);
				$('#description').val(self.model.attributes.description);
				$('#hours').val(self.model.attributes.hours);
			}
		},

		submit: function(ev) {
			
			ev.preventDefault();
			
			var self = this;
			
			if (self.isCreateOrEdit) {
				var entry = new Entry({ datefrom: $('#datefrom').val() ,
										dateto: $('#dateto').val() ,
										description: $('#description').val() ,
										hours: $('#hours').val() });
				
				self.collection.add(entry);

			} else {
				self.model.attributes.datefrom = $('#datefrom').val();
				self.model.attributes.dateto = $('#dateto').val();
				self.model.attributes.description = $('#description').val();
				self.model.attributes.hours = $('#hours').val();
				self.model.trigger('change', self.model);
				}
			},

	});

	return EntryCreateView;

});

