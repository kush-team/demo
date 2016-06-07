import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
	changedContent( event, component, images ) {
      // If you need the editor instance...
      let editor = component.get('editor');

      var model = this.get('model');
      model.set('text', component.get('editor.html').get());
      // Your code...
    } // foobar()  	
  },	
});
