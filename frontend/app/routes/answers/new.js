import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
  	var _this = this;  
    return Ember.RSVP.hash({
        question: _this.store.find('question', params.question_id),
    }).then(function (hash) {
 		   return _this.store.createRecord('answer', {question: hash.question});
 	  });
  },	

  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function(model) {
        route.transitionTo("answers", model.get('question').get('id'));
      }, function() {
        console.log('Failed to save the model');
      });
    }
  },

  deactivate: function() {
    var model = this.currentModel;
    if (model) {
      model.rollbackAttributes();
    }
  }    		
});
