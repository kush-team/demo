import Ember from 'ember';
import SaveModelMixin from '../../../mixins/users/save-model-mixin';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(SaveModelMixin, AuthenticatedRouteMixin, {
  model: function() {
	return Ember.RSVP.hash({
      user: this.store.createRecord('user'),
      roleList: this.store.find('role'),
      ministryList: this.store.find('ministry'),
      cameraList: this.store.find('camera')
 	})  	
  },
});
