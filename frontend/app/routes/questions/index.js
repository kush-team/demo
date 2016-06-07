import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function() {
      return this.store.find("question");
  },

  model: function(params) {
    return Ember.RSVP.hash({
        report: this.store.find('report', params.report_id),
        questions: this.store.find('question', {report: params.report_id})
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

