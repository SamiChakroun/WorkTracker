define(['backbone',
		'underscore',
		'jquery',
		'entrylist',
        'entryview',
        'entrycreateview',
        'text!templates/entrygridtemplate.html'],
function(Backbone, _, $, userList, UserView, UserCreateView, UserGridTemplate) {

	var UsersList = Backbone.View.extend({
					collection: new userList,
					el: '#main-content',
					events: {'click #add': 'openCreateView'
					},
					initialize: function() {
						var self = this;
						self.template = _.template(UserGridTemplate);
						self.collection.on('add' , self.render, self);
						self.collection.on('remove' , self.render, self);
						self.collection.on('change' , self.render, self);
						//console.log('usergridview running');
						self.render();
					},
					render: function() {
						var self = this;
						self.$el.html(self.template);
						_.each(self.collection.toArray(), function(user, i) {
							$('#grid').append((new UserView({model: user})).render().$el);
						});
						//console.log('render');
						return self;
					},
					openCreateView: function() {
						var userCreateView = new UserCreateView({isCreate:true, collection: this.collection});
					}
	});

return UsersList;

});