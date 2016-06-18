import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import InfinityRoute from "../../mixins/infinity-route";


export default Ember.Route.extend(AuthenticatedRouteMixin, InfinityRoute, {
  _listName: 'model.questions',
  model: function(params) {

     if (this.get('session.user').get('isAdmin')) {
        
        return Ember.RSVP.hash({
            report: this.store.find('report', params.report_id),
            questions: this.infinityModel('question', {report: params.report_id, sort: 'createdAt DESC'})
        }) 
     } else {
        if (this.get('session.user').get('isLegislador')) {

            return Ember.RSVP.hash({
                report: this.store.find('report', params.report_id),
                questions: this.store.find('question', {report: params.report_id, brick: this.get('session.user').get('brick').get('id'),sort: 'createdAt DESC'})
            })           
        } else {
          if (this.get('session.user').get('isMinisterio')) {
               var ministries = [];
               this.get('session.user').get('ministries').forEach(function (ministry) {
                  ministries.push(ministry.get('id'));
               });
               return Ember.RSVP.hash({
                  report: this.store.find('report', params.report_id),
                  questions: this.store.find('question', {report: params.report_id, ministry: ministries, sort: 'createdAt DESC'})
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
    },

    search: function () {
      this.set('_listName', 'model.questions.content');

      console.log(this.get('controller.model'));

      var report = this.get('controller.model.report');

      var filter = {report: report.get('id'), perPage: 10, startingPage: 1, sort: 'createdAt DESC'};

      if (this.get('controller.brick')) {
        filter.brick = this.get('controller.brick.id'); 
      }

      if (this.get('controller.user')) {
        filter.author = this.get('controller.user.id');   
      }

      if (this.get('controller.ministry')) {
        filter.ministry = this.get('controller.ministry.id');   
      }      

      this.get('controller').set('model.questions', this.infinityModel("question", filter))
    },      

  }
});
