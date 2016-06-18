import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {

  model: function(params) {
  	var _this = this;
  	return Ember.RSVP.hash({
      report: _this.store.find('report', params.report_id),
   	}).then(function (hash) {
   		return _this.store.createRecord('question', {report: hash.report});
   	});
  },	

  setupController: function (controller, model) {
    this._super(controller, model);

    this.store.find('tag').then(function (tags) {
      controller.set('tags', tags); 
    });

    this.store.find('user', {brick: this.get('session.user').get('brick').get('id')}).then(function (users) {
      controller.set('users', users); 
    });    
  },

  actions: {
    save: function() {
      var route = this;
      this.currentModel.save().then(function(model) {
        route.transitionTo("questions", model.get('report').get('id'));
      }, function() {
        console.log('Failed to save the model');
      });
    }
  },

  deactivate: function() {
    var model = this.currentModel;
    if (model) {
      model.rollback();
    }
  }  	
});
