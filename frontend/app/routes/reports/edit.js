import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';


export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {
	 modelPath: 'report',

	model: function(params) {
	    return Ember.RSVP.hash({
	        cameras: this.store.find('camera'),
	        report: this.store.find('report', params.report_id)
	    })    
  },
});
