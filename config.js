requirejs.config({
    baseUrl: '.',
    paths: {
      // base libs
      require: ['https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.2/require','js/libs/require'],
      jquery: ['https://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min', 'js/libs/jquery'],
	    bootstrap: ['https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min','js/libs/bootstrap.min'],
	    underscore: ['https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore', 'js/libs/underscore'],
      backbone: ["https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone","js/libs/backbone"],
      // model
      entry: 'js/models/entry',
      // collection
      entrieslist: 'js/collections/entrieslist',
      // views
      entrycreateview: 'js/views/entrycreateview',
      entryview: 'js/views/entryview',
      entriesgridview: 'js/views/entriesgridview',
      // plugins
      text: 'js/plugins/text'
    }
});


// Load the main app module to start the app
require(['entriesgridview'], function(MainView){
  var view = new MainView();
  return view;
});