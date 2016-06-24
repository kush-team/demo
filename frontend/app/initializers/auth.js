import Ember from 'ember';
import SimpleAuthSession from 'simple-auth/session';

var CustomSession = SimpleAuthSession.extend({
    user: function() {
      var userId = this.get('user_id');
      var _this = this;
      if (!Ember.isEmpty(userId)) {
        return this.container.lookup('store:main').find('user', userId).then(function (model) {
          return model;
        }, function (err) {
          _this.invalidate();
        });
      }
    }.property('user_id')
});

export function initialize( container ) {
  container.register('session:custom', CustomSession);
}


export default {
  name: 'auth',
  before: 'simple-auth',
  initialize: initialize
};
