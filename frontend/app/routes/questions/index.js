import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {

     if (this.get('session.user').get('isAdmin')) {
        
        return Ember.RSVP.hash({
            report: this.store.find('report', params.report_id),
            questions: this.store.find('question', {report: params.report_id})
        }) 
     } else {
        if (this.get('session.user').get('isLegislador')) {

            return Ember.RSVP.hash({
                report: this.store.find('report', params.report_id),
                questions: this.store.find('question', {report: params.report_id, author: this.get('session.user').get('id')})
            })           
        } else {
          if (this.get('session.user').get('isMinisterio')) {
               var ministries = [];
               this.get('session.user').get('ministries').forEach(function (ministry) {
                  ministries.push(ministry.get('id'));
               });
               return Ember.RSVP.hash({
                  report: this.store.find('report', params.report_id),
                  questions: this.store.find('question', {report: params.report_id, ministry: ministries})
              })                  
          }
        }
     }   
  },  

  actions: {
    remove: function(model) {
      if(confirm('Are you sure?')) {
        model.destroyRecord();
      }
    } 
  }
});

