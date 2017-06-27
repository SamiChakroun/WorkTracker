requirejs.config({
    baseUrl: '.',
    
    shim: {
        'bootstrap': {
            deps: [ 'jquery' ]
        },
        'backbone': {
            deps: [ 'underscore' ]
        }
    },
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
      entrieslist: 'js/collections/entrylist',

      // views
      mainview: 'js/views/mainview',

      entryview: 'js/views/entryview',

      entrycreateview: 'js/views/entrycreateview',
      
      
      // plugins
      datetimepicker: 'js/plugins/bootstrap-datetimepicker',
      moment: 'js/plugins/moment-with-locales',
      //chosen: ['js/plugins/chosen.jquery'], 
      text: 'js/plugins/text'
    }
});


// Load the main app module to start the app
require(['mainview'], function(MainView){
  var view = new MainView();
  return view;
});