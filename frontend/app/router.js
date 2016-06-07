import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
	this.route("login");
	this.route("unpublish");
	this.route('reports', function() {
		this.route('index');
		this.route('new');
		this.route('edit', {
		  path: ":report_id/edit",
		});
		this.route('show', {
		  path: ":report_id/show",
		});
	}); 
});

export default Router;
