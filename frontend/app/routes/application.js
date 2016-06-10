import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

	setupController: function (controller, model) {
		this._super(controller, model);
		controller.set('isMaximize', false);
	},

	userChanged: function () {
		var _this = this;
		if (this.get('session.isAuthenticated')) {
	  		this.get('session.user').then(function (user) {
		  		user.get('roles').then(function (roles) {
		  			if (user.get('isLegislador')) {
						_this.controller.set('model', _this.store.find("report", {camera: _this.get('session.user').get('camera').get('id')}));
		  			} else {
		  				_this.controller.set('model',_this.store.find("report"));
		  			}
		  		});
	  		})
		}		
	}.observes('session.isAuthenticated'),

	model: function() {
		var _this = this;
		if (this.get('session.isAuthenticated')) {
	  		return this.get('session.user').then(function (user) {
		  		return user.get('roles').then(function (roles) {
		  			if (user.get('isLegislador')) {
						return _this.store.find("report", {camera: _this.get('session.user').get('camera').get('id')});
		  			} else {
		  				return _this.store.find("report");
		  			}
		  		});
	  		})
		}
	},

	actions: {
 		willTransition: function(transition) { 
   		 	this.controller.set('isShowMenu', false);
   		},

		close: function () {
			var gui = requireNode('nw.gui');
			gui.App.quit();
		},

		minimize: function () {
			var gui = requireNode('nw.gui');
			var win = gui.Window.get();
			win.minimize();
		},
		maximize: function () {
			var gui = requireNode('nw.gui');
			var win = gui.Window.get();
			win.maximize();
			this.get('controller').set('isMaximize', true);
		},
		unmaximize: function () {
			var gui = requireNode('nw.gui');
			var win = gui.Window.get();
			win.unmaximize();
			this.get('controller').set('isMaximize', false);
		},		
	},	
});