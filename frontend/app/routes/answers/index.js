import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
    return Ember.RSVP.hash({
        question: this.store.find('question', params.question_id),
        answers: this.store.find('answer', {question: params.question_id})
    })    
  },  

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    } 
  }
});

