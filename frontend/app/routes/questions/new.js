import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';
import SaveModelMixin from '../../mixins/roles/save-model-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, SaveModelMixin, {

  model: function(params) {
  	var _this = this;
	return Ember.RSVP.hash({
      report: _this.store.find('report', params.report_id),
 	}).then(function (hash) {
 		return _this.store.createRecord('question', {report: hash.report});
 	});
  },		
});
