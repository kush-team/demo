import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, {

	model: function(params) {
	    return  this.store.find('question', params.question_id);  
 	 },	

	actions: {
		save: function() {
			var route = this;
			this.currentModel.save().then(function(model) {
				route.transitionTo("questions.show", model.get('report').get('id'), model.get('id'));
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
