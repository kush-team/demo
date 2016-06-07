import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {

	setupController: function (controller, model) {
		this._super(controller, model);
		controller.set('isMaximize', false);
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