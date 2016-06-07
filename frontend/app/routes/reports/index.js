import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

  beforeModel: function () {
    console.log(this.get('session.user').get('isAdmin'));
  },

  model: function() {
     if (this.get('session.user').get('isAdmin')) {
        return this.store.find("report");
     } else {
        if (this.get('session.user').get('isLegislador')) {
            return this.store.find("report", {camera: this.get('session.user').get('camera').get('id')});
        } else {
          if (this.get('session.user').get('isMinisterio')) {
               var ministries = [];
               this.get('session.user').get('ministries').forEach(function (ministry) {
                  ministries.push(ministry.get('id'));
               });
               return this.store.find("report");
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

