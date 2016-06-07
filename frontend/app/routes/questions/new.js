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
