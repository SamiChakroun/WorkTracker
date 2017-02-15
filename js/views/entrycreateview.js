define(['backbone',
        'underscore',
        'jquery',
        'entry',
        'entrieslist',
        'text!templates/addentrytemplate.html'],
function(Backbone, _, $, Entry, userList, UserCreateTemplate) {

	var UserCreateView = Backbone.View.extend({
		events: {'click .submit': 'submit'
		},
		el: '#create-edit-user',
		initialize: function(input){
				this.collection = input.collection;
				this.isCreateOrEdit = input.isCreate;
				this.render();
				console.log('running');
		},
		render: function(){
			var self = this;
			var template = _.template(UserCreateTemplate);
			self.$el.html(template);
			if (!self.isCreateOrEdit) {
				$('#addUserModal').modal('show')
				$('#from').val(self.model.attributes.from);
				$('#to').val(self.model.attributes.to);
				$('#description').val(self.model.attributes.description);
				$('#hours').val(self.model.attributes.jobdescription);
				console.log('render usercreateview running');
			}
		},
		submit: function(ev) {
			ev.preventDefault();
			var self = this;
			if (self.isCreateOrEdit) {
				var entry = new Entry({ from: $('#from').val() ,
										to: $('#to').val() ,
										description: $('#description').val() ,
										jobdescription: $('#hours').val() });
				self.collection.add(entry);
				console.log('added entry to collection');
			} else {
				self.model.attributes.from = $('#from').val();
				self.model.attributes.to = $('#to').val();
				self.model.attributes.description = $('#description').val();
				self.model.attributes.jobdescription = $('#hours').val();
				self.model.trigger('change', self.model);
				}
			},
	});

return UserCreateView;
});