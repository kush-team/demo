import Ember from 'ember';

export default Ember.Controller.extend({

  tags: [],
  users: [],

  actions: {
	changedContent( event, component, images ) {
      let editor = component.get('editor');

      var model = this.get('model');
      model.set('text', component.get('editor.html').get());
    },

    updateTags: function (argument) {
    	var model = this.get('model');
    	model.set('tags', argument);
    },

    updateUsers: function (argument) {
    	var model = this.get('model');
    	model.set('coAuthors', argument);
    },

    addNewTag: function (argument) {
    	var model = this.get('model');
    	this.store.createRecord('tag', {name: argument}).save().then(function (tag) {
    		//model.get('tags').pushObject(tag);
    	});
    },
  },	
});
